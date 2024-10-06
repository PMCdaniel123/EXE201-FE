import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { Spin, Table, Tag, Tooltip, Typography } from "antd";


const ORDERS_TABLE_COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text, value) => (
      <Link to={"/orders/" + value.id}>
        <Tooltip placement="top" title={text}>
          <Typography.Text>{text}</Typography.Text>
        </Tooltip>
      </Link>
    ),
  },
  {
    title: "Full Name",
    dataIndex: "full_name",
    key: "full_name",
  },
  {
    title: "Total Amount",
    dataIndex: "total_amount",
    key: "total_amount",
    render: (value) => <Typography.Text>${value}</Typography.Text>,
  },
  {
    title: "Shipping Address",
    dataIndex: "shipping_address",
    key: "shipping_address",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Payment Method",
    dataIndex: "payment_method",
    key: "payment_method",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      return (
        <Tag
          color={
            status === "pending"
              ? "orange"
              : status === "processing"
              ? "blue"
              : status === "shipping"
              ? "yellow"
              : status === "successful"
              ? "success"
              : "error"
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      );
    },
  },
];

const Orders = () => {
  const { userInfo, loading } = useContext(ShopContext);
  const [updatedOrders, setUpdatedOrders] = useState([]);

  useEffect(() => {
    setUpdatedOrders(userInfo?.orders);
  }, [userInfo]);

  return loading ? (
    <Spin />
  ) : (
    <div className="border-t border-gray-400 pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <Table dataSource={updatedOrders} columns={ORDERS_TABLE_COLUMNS} />
    </div>
  );
};

export default Orders;
