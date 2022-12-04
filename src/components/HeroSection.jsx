import Button from "./Button";

const HeroSection = () => {
  return (
    <section className=" mt-20 overflow-hidden md:px-16 lg:px-24 md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-8 relative  ">
      {/* Hero img */}

      <div className="relative  z-10   md:flex-1">
        <img
          className=" block relative z-10  object-contain "
          src="/images/illustration-hero.svg"
          alt=""
        />
        <div className=" absolute w-[90%] md:w-full -right-24 h-[80%] top-16   rounded-bl-[30%] bg-SoftBlue" />
      </div>

      {/* /Hero img */}

      <div className="text-VeryDarkBlue md:text-start text-center px-8 md:px-0 mt-24 md:mt-0 mx-auto  md:mx-0  md:flex-1">
        <h1 className="text-3xl md:text-5xl whitespace-pre font-medium">
          A Simple Bookmark {"\n"} Manager
        </h1>
        <p className="text-GrayishBlue mt-8">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className=" flex justify-between md:justify-start items-center gap-8 md:gap-4 mt-8">
          <Button
            block
            variant="primary"
            className="md:w-auto whitespace-nowrap"
          >
            Get it on Chrome
          </Button>
          <Button
            block
            variant="secondary"
            className="md:w-auto whitespace-nowrap"
          >
            Get it on Firefox
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
