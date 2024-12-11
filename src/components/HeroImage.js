import React from 'react'
import { heroImages } from '@/public/img';
import { coinMarkets } from '@/public/svg';
import Link from 'next/link';

const HeroImage = () => {

    const onMouseEnter = (e) => {
        const image = e.target;
        document.getElementById("image-parent").style.zIndex = 10;
        image.style.zIndex = 10;
        image.style.transform = 'scale(1.1)';
    }

    const onMouseLeave = (e) => {
        const image = e.target;
        document.getElementById("image-parent").style.zIndex = 0;
        heroImages.map((heroImage) => {
            if (heroImage.alt == image.alt) {
                image.style.zIndex = heroImage.style.zIndex;
                image.style.transform = heroImage.style.transform;
            }
        })
    }

    return (
        <div className="hidden xl:block w-full max-w-[700px]">
            <div id="image-parent" className="relative w-full max-w-[472px] h-[300px]" style={{ zIndex: 0 }}>
                {
                    heroImages.map((heroImage, index) => {
                        return (
                            <div key={index}>
                                <img src={heroImage.src} alt={heroImage.alt} style={heroImage.style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="min-h-[120px] h-auto w-[550px] flex flex-col sm:flex-row justify-start items-center border-2 p-4 backdrop-blur-lg bg-white/10 rounded-[15px] z-10">
                {
                    coinMarkets.map((coinMarket, index) => {
                        return (
                            <div key={index} className="flex flex-col whitespace-nowrap w-full items-center">
                                <Link href={coinMarket.link}>
                                    <span className="text-white flex h-8" target="_blank">
                                        <img
                                            src={coinMarket.image}
                                            alt={coinMarket.name}
                                            className="h-8 mx-2"
                                            loading="lazy"
                                            onError={({ currentTarget }) => {
                                                currentTarget.style.display = "none";
                                                currentTarget.onerror = null;
                                            }} />
                                        <span style={coinMarket.textStyle}>
                                            {coinMarket.name}
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeroImage