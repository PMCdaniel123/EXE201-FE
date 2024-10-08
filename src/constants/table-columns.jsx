import { Select, Tag, Tooltip, Typography } from "antd";
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

const { Option } = Select;
export const DESIGNER_ORDERS_TABLE_COLUMNS = ({
  editableRowKey,
  handleStatusChange,
  onEditStatus,
  onSaveStatus,
}) => [
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
    render: (status, record) => {
      const st = status && status !== "N/A" ? status : "waiting";

      return editableRowKey === record.order_detail_id ? (
        <Select
          defaultValue={st}
          style={{ width: 120 }}
          onChange={(value) =>
            handleStatusChange(record.order_detail_id, value)
          }
          onBlur={() => onSaveStatus(record.order_detail_id)}
        >
          <Option value="processing">Processing</Option>
          <Option value="shipping">Shipping</Option>
          <Option value="successful">Successful</Option>
          <Option value="waiting">Waiting</Option>
        </Select>
      ) : (
        <Tag
          color={
            st === "waiting"
              ? "orange"
              : st === "processing"
              ? "blue"
              : st === "shipping"
              ? "yellow"
              : st === "successful"
              ? "green"
              : "red"
          }
          onClick={() => onEditStatus(record.order_detail_id)}
          style={{ cursor: "pointer" }}
        >
          {st.charAt(0).toUpperCase() + st.slice(1)}
        </Tag>
      );
    },
  },
];
