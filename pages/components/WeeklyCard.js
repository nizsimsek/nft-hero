import Image from 'next/image';
import { Button } from '@nextui-org/react';

const WeeklyCard = ({ fullName, username, price, nft }) => {
  return (
    <div className="relative min-w-[300px]">
      <div className="m-auto -z-10 w-5/6 h-full">
        <Image src={nft} alt={fullName} responsive="true" />
      </div>
      <div
        style={{
          borderRadius: '15px',
          backgroundColor: 'rgba(0,0,0, 1)',
          filter: 'blur(1px)',
        }}
        className="absolute w-full h-[120px] -bottom-20"
      ></div>
      <div
        className="absolute w-full h-[120px] flex items-center -bottom-20 border-2 p-4"
        style={{
          borderRadius: '15px',
        }}
      >
        <div className="flex flex-col whitespace-nowrap w-1/2">
          <span className="m-0 font-bold md:text-base xl:text-2xl">{fullName}</span>
          <span className="text-slate-500">@{username}</span>
          <span className="text-[#F7FC0E] font-bold  md:text-base xl:text-xl">{price}</span>
        </div>
        <div className="flex justify-end self-end w-1/2">
          <Button auto color="gradient" rounded>
            Collect Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
