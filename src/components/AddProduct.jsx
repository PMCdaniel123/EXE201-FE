import { useState } from "react";
import { Steps, theme } from "antd";
import AddInitialProduct from "./AddInitialProduct";
import AddAttributeProduct from "./AddAttributeProduct";

const steps = [
  {
    title: "Create an initial product",
  },
  {
    title: "Add images, sizes and colors",
  },
  {
    title: "Done",
  },
];

const AddProduct = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const moveToNextStep = () => {
    next();
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 60,
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="w-[60%] flex flex-col items-center">
      <Steps current={current} items={items} />
      <div
        style={contentStyle}
        className="w-full flex items-center justify-center"
      >
        {current === 0 && <AddInitialProduct moveToNextStep={moveToNextStep} />}
        {current === 1 && (
          <AddAttributeProduct moveToNextStep={moveToNextStep} />
        )}
        {current === 2 && (
          <div className="flex flex-col justify-center items-center gap-4 text-base">
            <p>Your product is created successfully.</p>
            <p>
              Please reload the page to see your product!{" "}
              <span
                className="text-[#4A5942] underline cursor-pointer"
                onClick={handleReloadPage}
              >
                Or click here
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
