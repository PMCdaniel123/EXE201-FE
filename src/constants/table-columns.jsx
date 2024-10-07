import { Tag, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";

export const ORDERS_TABLE_COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    width: 100,
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
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    fixed: "right",
    render: (value) => {
      return (
        <Typography.Text>
          {new Date(value).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography.Text>
      );
    },
  },
];

export const DESIGNER_ORDERS_TABLE_COLUMNS = [
  {
    title: "Customer Name",
    dataIndex: "customer_name",
    key: "customer_name",
    fixed: "left",
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
    dataIndex: "product_size",
    key: "product_size",
    width: 100,
  },
  {
    title: "Color",
    dataIndex: "product_color",
    key: "product_color",
    width: 100,
    render: (value) => (
      <p
        className="px-2 sm:px-3 sm:py-1 h-10 w-10 border bg-slate-50"
        style={{ backgroundColor: value }}
      ></p>
    ),
  },
  {
    title: "Shipping Address",
    dataIndex: "address",
    key: "address",
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
    fixed: "right",
    align: "center",
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
