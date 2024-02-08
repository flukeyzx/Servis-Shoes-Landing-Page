const Contact = () => {
  return (
    <div id="contact-us" className="2xl:px-32 px-10 max-lg:px-20 mt-32">
      <div className="flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-5xl lg:max-w-lg leading-relaxed font-exxtrabold">
          Sign Up for <span className="text-red">Updates</span> & Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            placeholder="subscribe@servis.com"
            className="input px-4 focus:outline-none max-sm:border-2 max-sm:border-slate-gray max-sm:rounded-full max-sm:px-20 max-sm:py-4"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-red text-white border-red rounded-full w-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
