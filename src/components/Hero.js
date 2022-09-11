import React, { useEffect, useState } from 'react'
import { Button, Spacer } from '@nextui-org/react'
import HeroImage from './HeroImage'

const Hero = () => {
  const [imgShow, setImgShow] = useState(true)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 1200 ? setImgShow(false) : setImgShow(true)
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="flex flex-nowrap justify-between items-center text-white px-16 py-32">
      <div className="w-full max-w-[700px] flex flex-col m-auto">
        <span className="font-bold text-5xl lg:text-7xl py-8">
          Discover & Collect <span style={{ background: 'linear-gradient(90deg, rgba(251,185,88,1) 0%, rgba(251,238,29,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Super Rare</span> Digital Artworks
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
        <HeroImage />
      )}
    </div>
  )
}

export default Hero
