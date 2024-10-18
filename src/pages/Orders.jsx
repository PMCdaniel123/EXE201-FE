import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Spin, Table } from "antd";
import { ORDERS_TABLE_COLUMNS } from "../constants/table-columns";

const Orders = () => {
  const { userInfo, loading } = useContext(ShopContext);
  const [updatedOrders, setUpdatedOrders] = useState([]);

  useEffect(() => {
    setUpdatedOrders(userInfo?.orders);
  }, [userInfo]);

  return loading ? (
    <Spin />
  ) : (
    <div className="border-t border-gray-400 pt-16 px-10">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <Table
        dataSource={updatedOrders}
        columns={ORDERS_TABLE_COLUMNS}
        scroll={{ x: 2000 }}
      />
    </div>
  );
};

export default Orders;
