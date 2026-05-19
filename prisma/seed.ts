import 'dotenv/config';
import { categories } from './data/categories';
import { products } from './data/products';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$transaction(async (tx) => {
    await tx.product.deleteMany();
    await tx.category.deleteMany();

    await tx.$executeRawUnsafe(
      'ALTER SEQUENCE "Category_id_seq" RESTART WITH 1',
    );
    await tx.$executeRawUnsafe(
      'ALTER SEQUENCE "Product_id_seq" RESTART WITH 1',
    );

    await tx.category.createMany({
      data: categories,
    });

    await tx.product.createMany({
      data: products,
    });
  });

  console.log('Data seeded successfully!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
