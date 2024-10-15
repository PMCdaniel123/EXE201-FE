import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Title from "../components/Title";
import { Spin } from "antd";
import ProductItem from "../components/ProductItem";

const DesignerInfo = () => {
  const { designerId } = useParams();
  const [loading, setLoading] = useState(false);
  const [designerProducts, setDesignerProducts] = useState([]);
  const [designerInfo, setDesignerInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    const getDesignerInfo = async () => {
      try {
        const response = await axiosInstance.get(`/designers/${designerId}`);
        console.log(response.data);
        setDesignerInfo(response.data);
        setDesignerProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getDesignerInfo();
  }, [designerId]);

  return (
    <div className="border-t border-gray-400 pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"DESIGNER"} text2={"INFO"} />
      </div>

      {loading ? (
        <Spin />
      ) : (
        <div>
          <div className="mb-10">
            <div className="w-full flex flex-col justify-center items-start gap-6 p-8 border border-gray-400">
              <p className="font-semibold text-xl text-gray-600">
                Designer: {designerInfo?.full_name}
              </p>
              <p className="text-gray-800">
                Contact: {designerInfo?.contact_info}
              </p>
              <p className="text-gray-800">Bio: {designerInfo?.bio}</p>
            </div>
          </div>

          <div className="text-2xl mb-3 flex">
            <Title text1={"DESIGNER"} text2={"PRODUCTS"} />
            <span className="ml-2 text-sm w-8 h-8 p-2 rounded-full text-white bg-gradient-to-br from-[#4A5942] to-[#9d905a]">
              {designerProducts.length}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mb-10 px-20">
            {designerProducts.length > 0 ? (
              designerProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item.id}
                  image={item.images}
                  name={item.product_name}
                  price={item.price}
                />
              ))
            ) : (
              <p>No clothes here.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignerInfo;
