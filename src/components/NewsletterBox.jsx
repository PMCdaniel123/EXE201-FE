const NewsletterBox = () => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
        sint quas accusantium eveniet atque repellat placeat assumenda
        dignissimos voluptas, vero facilis eos in pariatur excepturi unde optio
        velit. Delectus!
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center mx-auto my-6 border"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-full sm:flex-1 outline-none py-4 px-6"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
