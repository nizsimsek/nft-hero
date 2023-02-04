import { Button } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className="p-8 md:p-16 lg:p-32 max-w-7xl lg:max-w-full m-auto w-full">
      <div className="min-w-[250px] w-full backdrop-blur-lg bg-white/10 m-auto min-h-[400px] h-full flex flex-col items-center place-content-center border-2 p-8 md:p-16 rounded-[15px]">
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-semibold text-white text-center">
            Never miss a drop!
          </span>
          <span className="text-slate-500 mt-4 p-4">
            Subscribe to super-exclusive drop list and be the first to know
            about upcoming drops
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center my-6 w-full">
          <div className="w-full max-w-[500px]">
            <input
              placeholder="Enter your email address"
              type="email"
              className="bg-slate-800 p-4 subscribe-input w-full rounded-[40px] h-10 text-white"
            />
          </div>
          <div>
            <Button auto color="gradient" rounded className="mx-auto my-4 md:my-0 md:ml-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
