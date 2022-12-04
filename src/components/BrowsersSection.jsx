import Button from "./Button";
import { browserCardsData } from "../data";

const BrowsersSection = () => {
  return (
    <section className="mt-40 mx-10 ">
      <div className="text-VeryDarkBlue text-center ">
        <h1 className="text-3xl md:text-4xl whitespace-pre font-medium">
          Download the extension
        </h1>
        <p className="text-GrayishBlue mt-8 mx-auto max-w-lg">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-center md:items-center  gap-8 mt-12 md:mt-4">
        {browserCardsData.map((item, i) => (
          <ExtensionCard index={i} {...item} key={item.img} />
        ))}
      </div>
    </section>
  );
};

export default BrowsersSection;

const ExtensionCard = ({ img, title, subtitle, index }) => {
  const offset = `${index * 4}rem`;
  console.log(offset);
  return (
    <div
      style={{ marginTop: offset }}
      className={`bg-white  rounded-2xl  pt-20 flex flex-col justify-center items-center shadow-xl text-center text-VeryDarkBlue`}
    >
      <img className="w-36" src={img} alt="" />
      <h1 className="text-2xl font-medium mt-8">{title}</h1>
      <p className="text-GrayishBlue mt-4">{subtitle} </p>
      <img className="w-full mt-8" src="/images/bg-dots.svg" alt="" />
      <div className="my-8 px-6 w-full">
        <Button block>Add & Install Extension</Button>
      </div>
    </div>
  );
};
