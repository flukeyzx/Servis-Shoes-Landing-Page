import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { statistics, shoes } from "../constants";
import { useState } from "react";
import ShoeCard from "./ShoeCard";

const Home = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col justify-between items-center xl:gap-12 2xl:px-32 px-10 max-lg:px-20 xl:flex-row"
    >
      <div className="pt-40 relative xl:w-2/5 flex flex-col justify-between items-start gap-10 ">
        <p className="text-xl text-red">Our Summer Collections</p>
        <h1 className="mt-5 md:text-8xl text-5xl font-extrabold leading-loose">
          <span className="xl:bg-white xl:whitespace-nowrap sm:leading-4 relative z-10 lg:pr-6">
            The New Arrival
          </span>
          <br />
          <span className="text-red">Servis</span> Shoes
        </h1>
        <p className="text-slate-gray text-lg leading-8 mt-6 mb-2 sm:max-w-sm">
          Discover stylish Servis arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <button className="flex justify-between items-center w-48 py-4 px-8 rounded-full text-lg bg-red text-white font-semibold hover:bg-red/60">
          Shop now
          <img src={arrowRight} alt="shop" />
        </button>
        <div className="flex gap-5">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col px-4 py-8">
              <span className="font-extrabold text-4xl">{stat?.value}</span>
              <span className="text-slate-gray">{stat?.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative 2xl:flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
