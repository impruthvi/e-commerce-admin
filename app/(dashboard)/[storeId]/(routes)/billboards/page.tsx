import { format } from "date-fns";
import prismadb from "@/lib/prismadb";

import { BillBoardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedBillboards: BillboardColumn[] = billboards.map((billboard) => {
    return {
      id: billboard.id,
      label: billboard.label,
      createdAt: format(billboard.createdAt, "MMMM do, yyyy"),
    };
  });

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient data={formatedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
