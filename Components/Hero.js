import Image from "next/image";
import Google from "../public/assets/pngwing.jpg";
import Group from "../public/assets/group.jpg";

const Hero = () => {
  return (
    <div className="flex-1 justify-between px-[6rem]">
      <h1 className="text-5xl font-bold mt-[70px]">Schoolbus Karo</h1>
      <h2 className="mt-3 text-primary text-2xl ">
        Live tracking and child safety
      </h2>
      <p className="mt-8 w-[500px] font-thin">
        Sagar’s first and only online bus service with live tracking, online fee
        payment and various safety features to ensure your child’s safety
      </p>
      <div className="mt-12">
        <Image src={Google} alt="Google Play" />
      </div>
      <div className="mt-12 flex gap-3">
        <Image src={Group} alt="group of people" />
        <div>
          <p className="font-bold">1000+ Students enrolled</p>
          <p className="font-light text-sm">Secure your child now</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
