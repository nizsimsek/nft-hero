import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroImg from './../../public/img/Hero.png';
import { css, Button, Grid, Spacer } from '@nextui-org/react';

const Hero = () => {
  const [imgShow, setImgShow] = useState(true);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 1200 ? setImgShow(false) : setImgShow(true);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="bg-black flex flex-nowrap justify-between items-center text-white p-16">
      <div className="xs:w-full sm:w-full md:w-full lg:w-full xl:w-1/2 max-w-[700px] flex flex-col m-auto">
        <span className="font-bold text-[48px] lg:text-[72px] xl:text-[72px]">
          Discover & Collect <span className="text-[#F7FC0E]">Super Rare</span>{' '}
          Digital Artworks
        </span>
        <span className="max-w-[520px] text-lg">
          The largest NFT marketplace. Authentic and truly unique digital
          creation. Signed and issued by the creator, made possible by
          blockchain technology
        </span>
        <div className="flex mt-8 justify-center md:justify-start">
          <Button shadow size="lg" auto color="secondary" rounded>
            Let&apos;s Explore
          </Button>
          <Spacer x={2} />
          <Button
            shadow
            size="lg"
            auto
            color="secondary"
            rounded
            bordered
            css={{ color: '#fff' }}
          >
            Sell NFT
          </Button>
        </div>
      </div>
      {imgShow && (
        <div className="w-1/2 max-w-[700px] m-auto">
          <Image src={HeroImg} alt="Picture of the author" />
        </div>
      )}
    </div>
  );
};

export default Hero;
