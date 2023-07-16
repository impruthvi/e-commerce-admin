import prismadb from "@/lib/prismadb";
import ProductForm from "./components/product-form";

const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboard = await prismadb.product.findUnique({
    where: {
      id: params.storeId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={billboard}
          colors={colors}
          categories={categories}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default BillboardPage;
