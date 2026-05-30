import AddProductForm from '@/components/products/AddProductForm';
import Heading from '@/components/ui/Heading';

const CreateProductPage = () => {
  return (
    <>
      <Heading>New Product</Heading>

      <AddProductForm />
    </>
  );
};

export default CreateProductPage;
