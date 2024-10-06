import { Table } from "antd";
import Title from "./Title";
import { DESIGNER_ORDERS_TABLE_COLUMNS } from "../constants/table-columns";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axiosInstance from "../utils/axiosInstance";

const DesignerOrders = () => {
  const { userInfo } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [ordersList, setOrdersList] = useState([]);

  // const getOrdersList = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axiosInstance.get(
  //       `/designers/${userInfo?.designer?.id}`
  //     );
  //     const orders_list = response.data.products.map((product) => {

  //     });
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (!userInfo) return;
  //   getOrdersList();
  // }, [userInfo]);

  // console.log(ordersList);

  return (
    <div className="flex flex-col w-full">
      <div className="text-base sm:text-2xl mb-4">
        <Title text1={"DESIGNER"} text2={"ORDERS"} />
      </div>

      <Table dataSource={[]} columns={DESIGNER_ORDERS_TABLE_COLUMNS} />
    </div>
  );
};

export default DesignerOrders;
