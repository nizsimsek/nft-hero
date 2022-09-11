import Image from 'next/image';
import { Button } from '@nextui-org/react';

const WeeklyCard = ({ fullName, username, price, nft, index }) => {

  return (
    <div className={`min-w-[350px] w-full max-w-[470px] m-auto ${index % 2 == 0 ? 'lg:ml-auto lg:m-0' : 'lg:mr-auto lg:m-0'}`}>
      <div className="text-center px-8">
        <Image src={nft} alt={fullName} responsive="true" />
      </div>
      <div className="mx-auto h-[120px] w-full min-w-[350px] max-w-[470px] flex items-center -mt-12 border-2 p-4 backdrop-blur-lg bg-white/10 rounded-[15px]">
        <div className="flex flex-col whitespace-nowrap w-full">
          <span className="m-0 font-bold md:text-base xl:text-2xl">{fullName}</span>
          <span className="text-slate-500">@{username}</span>
          <span className="text-[#F7FC0E] font-bold  md:text-base xl:text-xl">{price}</span>
        </div>
        <div className="flex justify-end w-full">
          <Button auto color="gradient" rounded>
            Collect Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
