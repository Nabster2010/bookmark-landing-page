import * as Tabs from "@radix-ui/react-tabs";
import Button from "./Button";
const Features = () => {
  return (
    <section className=" mt-24 md:mt-16 text-center ">
      <div className="mx-auto max-w-lg px-8 ">
        <h1 className="text-VeryDarkBlue text-2xl md:text-4xl font-medium">
          Features
        </h1>
        <p className="text-GrayishBlue mt-8 ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <TabSection />
    </section>
  );
};

export default Features;

const TabSection = () => {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List aria-label="" className="md:flex md:justify-center px-8">
        <div className="flex flex-col md:flex-row justify-center items-center  divide-GrayishBlue/40  w-full mt-10 md:max-w-3xl  ">
          <Tabs.Trigger
            className="text-GrayishBlue border-b border-t  md:border-t-0 hover:text-SoftRed transition-all  trigger text-lg  w-full "
            value="tab1"
          >
            <span className="py-3 block">Simple Bookmarking</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-GrayishBlue  border-b hover:text-SoftRed transition-all  trigger text-lg  w-full "
            value="tab2"
          >
            <span className="py-3 block ">Speedy Searching</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-GrayishBlue border-b  hover:text-SoftRed transition-all  trigger text-lg  w-full "
            value="tab3"
          >
            <span className="py-3 block">Easy Sharing</span>
          </Tabs.Trigger>
        </div>
      </Tabs.List>
      <Tabs.Content
        className="mt-20 tab md:mt-16 relative md:flex justify-center gap-8 items-center"
        value="tab1"
      >
        {/* Hero img */}
        <div className="relative px-8 flex justify-center md:justify-end z-10   md:flex-1">
          <img
            className=" block relative z-10  object-contain "
            src="/images/illustration-features-tab-1.svg"
            alt=""
          />
          <div className=" absolute w-[80%] md:w-full -left-24 h-[80%] top-28   rounded-br-[30%] bg-SoftBlue" />
        </div>{" "}
        {/* /Hero img */}
        <div className="md:flex-1 text-VeryDarkBlue text-center md:text-start mt-24 md:mt-0  mx-8 ">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-3xl md:text-4xl whitespace-pre font-medium">
              Bookmark in one click
            </h1>
            <p className="text-GrayishBlue mt-8">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
          <div className="hidden md:block md:mt-8">
            <Button>More Info</Button>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="mt-20 md:mt-0 tab relative md:flex justify-center gap-8 items-center"
        value="tab2"
      >
        {/* Hero img */}
        <div className="relative px-8 flex justify-center md:justify-end z-10   md:flex-1">
          <img
            className=" block relative z-10  object-contain "
            src="/images/illustration-features-tab-2.svg"
            alt=""
          />
          <div className=" absolute w-[80%] md:w-full -left-24 h-[80%] top-28   rounded-br-[30%] bg-SoftBlue" />
        </div>{" "}
        {/* /Hero img */}
        <div className="md:flex-1 text-VeryDarkBlue text-center md:text-start mt-24 md:mt-0  mx-8 ">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-3xl md:text-4xl whitespace-pre font-medium">
              Intelligent search
            </h1>
            <p className="text-GrayishBlue mt-8">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className="hidden md:block md:mt-8">
              <Button>More Info</Button>
            </div>
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        className="mt-20 md:mt-0 tab relative md:flex justify-center gap-8 items-center "
        value="tab3"
      >
        <div className="relative px-8 flex justify-center md:justify-end z-10   md:flex-1">
          <img
            className=" block relative z-10  object-contain "
            src="/images/illustration-features-tab-3.svg"
            alt=""
          />
          <div className=" absolute w-[80%] md:w-full -left-24 h-[80%] top-28   rounded-br-[30%] bg-SoftBlue" />
        </div>

        <div className="md:flex-1 text-VeryDarkBlue text-center md:text-start mt-24 md:mt-0  mx-8 ">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-3xl md:text-4xl whitespace-pre font-medium">
              Share your bookmarks
            </h1>
            <p className="text-GrayishBlue mt-8">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <div className="hidden md:block md:mt-8">
              <Button>More Info</Button>
            </div>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};
