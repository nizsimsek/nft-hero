import HeroImg1 from '@public/img/hero-one.png'
import HeroImg2 from '@public/img/hero-two.png'
import HeroImg3 from '@public/img/hero-three.png'

export const heroImages = [
    {
        src: HeroImg1.src,
        alt: 'Hero Image 1',
        style: {
            boxSizing: 'border-box',
            position: 'absolute',
            left: '60px',
            transform: 'rotate(0deg)',
            zIndex: 3,
            transition: 'all 0.5s ease-in-out',
        }
    },
    {
        src: HeroImg2.src,
        alt: 'Hero Image 2',
        style: {
            boxSizing: 'border-box',
            position: 'absolute',
            left: '80px',
            transform: 'rotate(10deg)',
            zIndex: 2,
            transition: 'all 0.5s ease-in-out',
        }
    },
    {
        src: HeroImg3.src,
        alt: 'Hero Image 3',
        style: {
            boxSizing: 'border-box',
            position: 'absolute',
            left: '100px',
            transform: 'rotate(20deg)',
            zIndex: 1,
            transition: 'all 0.5s ease-in-out',
        }
    }
]