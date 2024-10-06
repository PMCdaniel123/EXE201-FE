import { Tag, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";

export const ORDERS_TABLE_COLUMNS = [
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

export const DESIGNER_ORDERS_TABLE_COLUMNS = [
  {
    title: "Product Image",
    dataIndex: "image_url",
    key: "image_url",
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Full Name",
    dataIndex: "full_name",
    key: "full_name",
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
