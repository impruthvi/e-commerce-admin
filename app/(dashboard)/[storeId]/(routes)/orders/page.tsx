import { format } from "date-fns";
import prismadb from "@/lib/prismadb";

import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import { formatter } from "@/lib/utils";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedOrders: OrderColumn[] = orders.map((order) => {
    return {
      id: order.id,
      phone: order.phone,
      address: order.address,
      isPaid: order.isPaid,
      totalPice: formatter.format(
        order.orderItems.reduce((total, items) => {
          return total + Number(items.product.price);
        }, 0)
      ),
      produts: order.orderItems.map((item) => item.product.name).join(", "),
      createdAt: format(order.createdAt, "MMMM do, yyyy"),
    };
  });

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formatedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
