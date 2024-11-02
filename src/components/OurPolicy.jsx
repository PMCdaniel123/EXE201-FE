import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col px-10 justify-around gap-12 text-center py-10 mb-10 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Return items policy</p>
        <ul className="text-gray-400 text-xs lg:text-sm mt-6 space-y-2 list-inside list-decimal lg:px-32">
          <li>
            You may return one or more items within 30 days of the delivery date
            of your order.
          </li>
          <li>
            Items must be in perfect condition and with all labels still
            attached.
          </li>
          <li>
            Returns of your order are free of charge if the problem is caused by
            the designers or us within the first 30 days at the shipping post
            office. Alternatively, if you would like us to pick up the returned
            item at your home, you can request a home delivery for the fixed
            cost is $1.2
          </li>
          <li>
            If you choose the wrong size, you have to pay all the delivery fee
            to get the right one in the period of 15 days.
          </li>
        </ul>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Processing a return</p>
        <p className="text-gray-400 text-xs lg:text-sm mt-6 lg:px-32">
          Log in a Sunset Soiree' account, access your orders and request a
          return. Then you will receive a form to check the status of your item
          from the platform. You have to fill in all the information and it will
          be double checked by a host of brands ( Designers). When everything is
          clear, your process will be run. You can choose the type of delivery
          you want.
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Delivery</p>
        <ul className="text-gray-400 text-xs lg:text-sm mt-6 space-y-2 list-inside list-decimal lg:px-32">
          <li>
            Delivery options and times may vary depending on your address, time
            of purchase and availability of items.
          </li>
          <li>
            At checkout, we will show you the available delivery methods, cost
            and delivery date for your order.
          </li>
          <li>
            In addition, please note that during sales and promotions, delivery
            times may increase and some delivery methods may not be available.
          </li>
        </ul>
      </div>

      <div>
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400 text-xs lg:text-sm mt-6 lg:px-32">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
