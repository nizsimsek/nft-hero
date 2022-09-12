import { topCreators } from '@/public/img/user-images'
import React from 'react'
import CreatorCard from '@components/CreatorCard'
import { Grid } from '@nextui-org/react'

const TopListCreators = () => {
    return (
        <div className='p-8 lg:p-16 w-full m-auto'>
            <div className='flex flex-col items-center'>
                <span className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-8'>
                    Top List Creator
                </span>
                <Grid.Container gap={4} justify="center">
                    {topCreators.map((creator, index) => {
                        return (
                            <Grid xs={12} sm={6} md={6} lg={3} xl={3} justify="center" key={index}>
                                <CreatorCard creator={creator} key={index} />
                            </Grid>
                        )
                    })
                    }
                </Grid.Container>
            </div>
        </div>
    )
}

export default TopListCreators