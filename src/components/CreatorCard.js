import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CreatorCard = ({ creator }) => {

    const { fullName, cover, profile, artWorks, isFollowed } = creator;
    const [isFollow, setIsFollow] = useState(false)

    useEffect(() => {
        setIsFollow(isFollowed)
    }, [isFollowed])

    const handleFollow = (item) => {
        if (item.target.innerText == 'Followed') {
            setIsFollow(false)
        } else {
            setIsFollow(true)
        }
    }

    return (
        <div className='min-w-[305px] w-[305px] h-full rounded-3xl backdrop-blur-xl bg-white/10'>
            <div className='min-w-[305px] w-full rounded-t-3xl relative'>
                <Image src={cover} alt={fullName} width="305" height="163" priority="true" />
                <div className='w-full h-full absolute -mt-12'>
                    <div className='w-20 h-20 rounded-full bg-[#1A1A1A] flex justify-center items-center mx-auto'>
                        <Image src={profile} alt={fullName} width="57" height="57" />
                    </div>
                </div>
            </div>
            <div className='w-full text-center mt-8'>
                <span className='text-white text-xl font-semibold'>
                    {fullName}
                </span>
            </div>
            <div className='w-full text-center mt-2'>
                <span className='text-xl font-bold' style={{ background: 'linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {artWorks} <span className='text-sm font-medium'>Artwork</span>
                </span>
            </div>
            <div className='w-full mt-2 flex justify-center p-4'>
                {
                    isFollow ?
                        <Button
                            auto
                            color="secondary"
                            bordered
                            css={{ color: '#fff', width: '100%', height: '55px', fontSize: '16px' }} onPress={(e) => handleFollow(e)}>
                            Followed
                        </Button> :
                        <Button auto color='secondary' css={{ color: '#fff', width: '100%', height: '55px', fontSize: '16px' }} onPress={(e) => handleFollow(e)}>
                            Follow
                        </Button>
                }
            </div>
        </div>
    )
}

export default CreatorCard