import { Button, Input, css } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className="bg-black p-16">
      <div
        className="w-full h-[400px] flex flex-col items-center place-content-center border-2 p-4"
        style={{
          borderRadius: '15px',
        }}
      >
        <div className="flex flex-col">
          <span className="text-4xl font-semibold text-white text-center">
            Never miss a drop!
          </span>
          <span className="text-slate-500 mt-4">
            Subscribe to super-exclusive drop list and be the first to know
            about upcoming drops
          </span>
        </div>
        <div className="flex justify-center mt-12 w-full">
          <input
            placeholder="Enter your email address"
            type="email"
            className="bg-slate-800 p-4 subscribe-input"
            style={{
              borderRadius: '40px',
              width: '100%',
              maxWidth: '500px',
              height: '40px',
              color: '#FFF',
            }}
          />
          <Button auto color="gradient" rounded className="ml-8">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
