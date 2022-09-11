import Image from 'next/image'
import Weekly1 from '@public/img/Weekly1.svg'
import Weekly2 from '@public/img/Weekly2.svg'
import Weekly3 from '@public/img/Weekly3.svg'
import Weekly4 from '@public/img/Weekly4.svg'
import { Grid, Spacer } from '@nextui-org/react'
import WeeklyCard from './WeeklyCard'

const weeklyTrends = [
  {
    fullName: 'Miles Grogosters',
    username: 'rominolegs',
    price: '4.99 ETH',
    nft: Weekly1
  },
  {
    fullName: 'Reox Fancxy',
    username: 'hibnastiar',
    price: '3.27 ETH',
    nft: Weekly2
  },
  {
    fullName: 'Miles Grogosters',
    username: 'senjadisini',
    price: '4.20 ETH',
    nft: Weekly3
  },
  {
    fullName: 'Tuinz Rey',
    username: 'albertov',
    price: '2.99 ETH',
    nft: Weekly4
  }
]

const WeeklyTrends = () => {
  return (
    <div className="text-white p-0">
      <div className="flex flex-col lg:flex-row w-full justify-center my-0 md:my-10">
        <div className="w-full max-w-[650px] m-auto lg:m-0 lg:ml-auto flex text-center">
          <div className="w-full max-w-[650px] mt-3 lg:m-0 self-center">
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Trending This Week
            </span>
          </div>
        </div>
        <div className="w-full max-w-[650px] m-auto lg:m-0 lg:mr-auto">
          <div className="w-full max-w-[500px] px-6 mt-3 lg:m-0 self-center flex m-auto">
            <span className="text-lg text-gray-500">
              Various kinds of Artwork categories that are trending this week. The
              trend will be reset every week. Don’t miss out on the best artworks
              every week
            </span>
          </div>
        </div>
      </div>
      <Grid.Container gap={8}>
        {weeklyTrends.map((item, index) => {
          return (
            <Grid
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              css={{ display: 'flex !important' }}
              key={index}
            >
              <WeeklyCard
                fullName={item.fullName}
                username={item.username}
                price={item.price}
                nft={item.nft}
                index={index}
              />
            </Grid>
          )
        })}
      </Grid.Container>
    </div>
  )
}

export default WeeklyTrends
