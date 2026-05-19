const OrderPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  return <div>OrderPage: {category}</div>;
};

export default OrderPage;
