import { instagram, facebook, twitter, copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-black w-full mt-24">
      <div className="flex justify-between flex-wrap gap-5 2xl:px-32 px-10 max-lg:px-20 py-20">
        <div>
          <h3 className="text-white font-extrabold text-4xl">Servis</h3>
          <p className="text-white-400 max-w-sm mt-2">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8">
            <div className="bg-white rounded-full font-bold flex justify-center items-center w-11 h-11 hover:-translate-y-2 hover:translate-x-2 transition-all delay-150 ease-in-out cursor-pointer">
              <img src={facebook} alt="logo" width={24} height={24} />
            </div>
            <div className="bg-white rounded-full font-bold flex justify-center items-center w-11 h-11 hover:-translate-y-2 hover:translate-x-2 transition-all delay-150 ease-in-out cursor-pointer">
              <img src={instagram} alt="logo" width={24} height={24} />
            </div>
            <div className="bg-white rounded-full font-bold flex justify-center items-center w-11 h-11 hover:-translate-y-2 hover:translate-x-2 transition-all delay-150 ease-in-out cursor-pointer">
              <img src={twitter} alt="logo" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="text-white-400 leading-8">
          <h2 className="text-white font-bold text-2xl mb-4">Products</h2>
          <p className="cursor-pointer hover:opacity-70">Air Force 1</p>
          <p className="cursor-pointer hover:opacity-70">Air Max 1</p>
          <p className="cursor-pointer hover:opacity-70">Air Jordan 1</p>
          <p className="cursor-pointer hover:opacity-70">Air Force 2</p>
          <p className="cursor-pointer hover:opacity-70">Servis Waffle Racer</p>
          <p className="cursor-pointer hover:opacity-70">Servis Cortez</p>
        </div>
        <div className="text-white-400 leading-8">
          <h2 className="text-white font-bold text-2xl mb-4">Help</h2>
          <p className="cursor-pointer hover:opacity-70">About us</p>
          <p className="cursor-pointer hover:opacity-70">FAQs</p>
          <p className="cursor-pointer hover:opacity-70">How it works</p>
          <p className="cursor-pointer hover:opacity-70">Privacy policy</p>
          <p className="cursor-pointer hover:opacity-70">Payment policy</p>
        </div>
        <div className="text-white-400 leading-8">
          <h2 className="text-white font-bold text-2xl mb-4">Get in touch</h2>
          <p className="cursor-pointer hover:opacity-70">customer@servis.com</p>
          <p className="cursor-pointer hover:opacity-70">+923124527890</p>
        </div>
      </div>
      <div className="flex justify-between items-center 2xl:px-32 px-10 max-lg:px-20 pb-8">
        <div className="cursor-pointer flex gap-2">
          <img src={copyrightSign} alt="logo" />
          <p className="text-white">Copyright. All rights reserved.</p>
        </div>
        <span className="cursor-pointer text-white">Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
