import { shoe8, offer, customer1, customer2 } from "../assets/images";
import {
  truckFast,
  shieldTick,
  support,
  arrowRight,
  star,
} from "../assets/icons";

const About = () => {
  return (
    <div>
      <div
        id="about-us"
        className="flex justify-around flex-wrap w-full items-center sm:mt-30 mt-20 px-10"
      >
        <div>
          <h2 className="font-extrabold text-5xl mb-6 max-sm:text-4xl lg:max-w-lg">
            We Provide You
            <span className="text-red font-extrabold"> Super Quailty</span>{" "}
            Shoes
          </h2>
          <p className="text-slate-gray font-4xl lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 text-slate-gray lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <button className="w-44 py-4 px-6 mt-10 mb-6 rounded-full text-lg bg-red text-white font-semibold hover:bg-red/60">
            View Details
          </button>
        </div>
        <div>
          <img src={shoe8} alt="shoe" />
        </div>
      </div>
      <div className="flex justify-between flex-wrap items-center gap-9 2xl:px-32 px-10 max-lg:px-20 mt-32">
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
          <div className="bg-red rounded-full w-11 h-11 flex justify-center mb-4">
            <img src={truckFast} alt="icon" width={25} height={25} />
          </div>

          <h3 className="font-extrabold text-2xl">Free Shipping</h3>
          <p className="mt-2 text-lg text-slate-gray">
            Enjoy seamless shopping with our complementarys shipping service.
          </p>
        </div>
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
          <div className="bg-red rounded-full w-11 h-11 flex justify-center mb-4">
            <img src={shieldTick} alt="icon" width={25} height={25} />
          </div>
          <h3 className="font-extrabold text-2xl">Secure Payment</h3>
          <p className="mt-2 text-lg text-slate-gray">
            Experience worry-free transactions with our secure payment options.
          </p>
        </div>
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
          <div className="bg-red rounded-full w-11 h-11 flex justify-center mb-4">
            <img src={support} alt="icon" width={25} height={25} />
          </div>
          <h3 className="font-extrabold text-2xl">Love to help you</h3>
          <p className="mt-2 text-lg text-slate-gray">
            Our dedicated team is here to assist you every step of the way.
          </p>
        </div>
      </div>
      <div className="flex justify-between max-xl:flex-col-reverse items-center gap-10 2xl:px-32 px-10 max-lg:px-20 mt-32">
        <div className="flex-1">
          <img
            className="object-contain w-full"
            src={offer}
            width={773}
            height={687}
            alt="offer"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="text-red">Special</span> Offer
          </h2>
          <p className="text-lg text-slate-gray mb-8">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-lg text-slate-gray mb-10">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="sm:flex gap-2">
            <button className="flex justify-center items-center text-lg max-sm:mb-6 font-semibold gap-6 rounded-full bg-red hover:bg-red/50 px-8 py-4  text-white">
              <span>Shop now</span>
              <img src={arrowRight} alt="icon" />
            </button>
            <button className="text-lg font-semibold rounded-full px-12 py-4 text-slate-gray border-2 border-slate-gray hover:opacity-60">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary py-20 2xl:px-32 px-10 max-lg:px-20 mt-32">
        <h2 className="text-center font-extrabold text-5xl mb-6">
          What Our <span className="text-red"> Customers</span> Say?
        </h2>
        <p className="text-center max-w-lg m-auto info-text text-lg text-slate-gray">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          <div className="flex flex-col justify-center items-center">
            <img
              src={customer1}
              alt="person"
              className="w-[120px] h-[120px] rounded-full"
            />
            <p className="mt-6 max-w-sm text-center text-lg text-slate-gray">
              The attention to detail and the quality of the product exceeded my
              expectations. Highly recommended!
            </p>
            <div className="mt-2 flex gap-2">
              <img src={star} alt="icon" />
              <span className="text-lg text-slate-gray">(4.5)</span>
            </div>
            <h2 className="text-3xl font-extrabold mt-2">Morich Brown</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={customer2} alt="person" />
            <p className="mt-6 max-w-sm text-center text-lg text-slate-gray">
              The product not only met but exceeded my expectations. I'll
              definitely be a returning customer!
            </p>
            <div className="mt-2 flex gap-2">
              <img src={star} alt="icon" />
              <span className="text-lg text-slate-gray">(4.5)</span>
            </div>
            <h2 className="text-3xl font-extrabold mt-2">Lota Mongeskar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
