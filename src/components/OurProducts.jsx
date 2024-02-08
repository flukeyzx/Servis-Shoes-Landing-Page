import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { star } from "../assets/icons";

const OurProducts = () => {
  return (
    <div id="products" className="sm:mt-32 mt-20 2xl:px-32 px-10 max-lg:px-20">
      <div className=" mb-12">
        <h2 className="font-bold text-5xl mb-4">
          Our <span className="text-red font-extrabold">Popular</span> Products
        </h2>
        <p className="text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="w-full mt-10 flex justify-between max-md:justify-center items-center flex-wrap gap-1">
        <div>
          <img src={shoe4} alt="" width={282} height={282} />
          <div className="flex pt-4 gap-2 text-slate-gray text-xl leading-0">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <p className="text-2xl font-extrabold pt-2 leading-0">
            Servis Air Shoe-01
          </p>
          <p className="pt-2 text-2xl font-extrabold text-coral-red mb-4">
            Rs.5,999.00
          </p>
        </div>
        <div>
          <img src={shoe5} width={282} height={282} alt="" />
          <div className="flex pt-4 gap-2 text-slate-gray text-xl leading-0">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <p className="text-2xl font-extrabold pt-2 leading-0">
            Servis Air Shoe-10
          </p>
          <p className="pt-2 text-2xl font-extrabold text-coral-red mb-4">
            Rs.8,999.00
          </p>
        </div>
        <div>
          <img src={shoe6} alt="" width={282} height={282} />
          <div className="flex pt-4 gap-2 text-slate-gray text-xl leading-0">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <p className="text-2xl font-extrabold pt-2 leading-0">
            Servis Air Shoe-10
          </p>
          <p className="pt-2 text-2xl font-extrabold text-coral-red mb-4">
            Rs.9,999.00
          </p>
        </div>
        <div>
          <img src={shoe7} alt="" />
          <div className="flex pt-4 gap-2 text-slate-gray text-xl leading-0">
            <img src={star} alt="" />
            <span>(4.5)</span>
          </div>
          <p className="text-2xl font-extrabold pt-2 leading-0">
            Servis Air Shoe-001
          </p>
          <p className="pt-2 text-2xl font-extrabold text-coral-red mb-4">
            Rs.19,999.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
