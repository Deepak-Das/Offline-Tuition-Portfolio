import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-hero-pattern  justify-centerjustify-center flex h-screen w-full flex-col  items-center bg-yellow-200 px-20 md:flex md:flex-row  md:items-center md:justify-center md:gap-20 md:py-24">
      <Image
        src={"/assets/feature1.png"}
        height={8}
        width={450}
        alt="feature1.png"
      />
      <div className="  flex flex-col  pt-4 md:pt-16">
        <h3 className="text-2xl font-medium">
          Frustrated by old school teaching style, struggling with your concepts
          ?? “Join US”.
        </h3>
        <p className="text-gray-500">
          We were come up with the new way of teaching, you just new a smart way
          of learning , we will develop your critical thinking.
        </p>
        <div className="justify-centert  flex items-center gap-2 text-2xl font-medium text-primary-900">
          <div className=" relative">
            <div className="flex ">
              <Image
                src={"/assets/call_icon.png"}
                width={36}
                height={36}
                alt=""
              />
              <span>8961100212</span>
            </div>
            <Image
              className="absolute -left-10 top-0 md:scale-150"
              src={"/assets/blue_plane.png"}
              width={200}
              height={36}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
