import Image from 'next/image'
import HeroImg from '@public/img/Hero.png'

const HeroImage = () => {

    return (
        <div className="w-full max-w-[700px] m-auto">
            <Image src={HeroImg} alt="Picture of the author" />
        </div>
    )
}

export default HeroImage