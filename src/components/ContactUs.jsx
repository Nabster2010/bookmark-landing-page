import { useRef, useState } from "react";
import ValidateEmail from "../utils/emailValidate";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section className="bg-SoftBlue mt-28 w-full py-8 px-8 md:px-24">
      <div className=" text-center text-white mt-8">
        <h3 className="uppercase text-sm tracking-[.5rem]">
          35,000+ already joined
        </h3>
        <h1 className="text-3xl md:text-4xl font-medium mt-8">
          Stay up-to-date with what <br className="hidden md:block" /> we’re
          doing
        </h1>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;

const ContactForm = () => {
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const value = inputRef.current?.value?.trim();
    const isValid = ValidateEmail(value);
    if (!value || !isValid) {
      return setError(true);
    }
    console.log("success");
  };
  return (
    <form
      className="md:flex justify-center items-start md:gap-4 md:mt-8"
      onSubmit={handleSubmit}
    >
      <div
        className={`relative ${
          error ? "bg-SoftRed" : "bg-transparent"
        } mt-8 md:mt-0 p-0.5 transition duration-300 rounded-md  `}
      >
        <input
          className="w-full md:w-80 block py-3 rounded-md focus:outline-none pl-6 pr-16 md:pr-8 "
          placeholder="Enter your email address"
          ref={inputRef}
          type="text"
        />
        <span
          className={`text-white ${
            !error && "hidden"
          } italic px-4 font-medium text-xs`}
        >
          Whoops, make sure it's an email
        </span>
        <span
          className={`block transition duration-1000 ${
            error ? "opacity-100 animate-bounce" : "opacity-0"
          } absolute top-[14px]  right-4 w-6 h-6 rounded-full bg-SoftRed text-white text-center`}
        >
          !
        </span>
      </div>
      <div className="mt-4 md:mt-0 ">
        <Button type="submit" variant="danger" block>
          Contact Us
        </Button>
      </div>
    </form>
  );
};
