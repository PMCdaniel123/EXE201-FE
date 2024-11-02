const NewsletterBox = () => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center px-6 lg:px-10">
      <p className="text-xl lg:text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3 italic text-xs md:text-base">
        Subscribe now and enjoy 20% off your first order! Be the first to know
        about exclusive deals, new arrivals, and style tips tailored just for
        you.
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full lg:w-1/2 flex items-center mx-auto my-6 border text-sm md:text-base"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-full sm:flex-1 outline-none p-3 md:py-4 md:px-6"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white py-3 px-4 md:px-10 md:py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
