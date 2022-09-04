import Image from 'next/image';
import Weekly1 from './../../public/img/Weekly1.svg';
import Weekly2 from './../../public/img/Weekly2.svg';
import Weekly3 from './../../public/img/Weekly3.svg';
import Weekly4 from './../../public/img/Weekly4.svg';
import { css, Button, Grid, Spacer } from '@nextui-org/react';
import WeeklyCard from './WeeklyCard';

const WeeklyTrends = () => {
  const weeklyTrends = [
    {
      fullName: 'Miles Grogosters',
      username: 'rominolegs',
      price: '4.99 ETH',
      nft: Weekly1,
    },
    {
      fullName: 'Reox Fancxy',
      username: 'hibnastiar',
      price: '3.27 ETH',
      nft: Weekly2,
    },
    {
      fullName: 'Miles Grogosters',
      username: 'senjadisini',
      price: '4.20 ETH',
      nft: Weekly3,
    },
    {
      fullName: 'Tuinz Rey',
      username: 'albertov',
      price: '2.99 ETH',
      nft: Weekly4,
    },
  ];

  return (
    <div className="bg-black flex flex-wrap justify-center text-white p-16">
      <div className="w-1/2 text-center">
        <span className="text-6xl font-bold max-w-[600px]">
          Trending This Week
        </span>
      </div>
      <div className="w-1/2 px-6">
        <span className="text-lg text-gray-500 max-w-[500px]">
          Various kinds of Artwork categories that are trending this week. The
          trend will be reset every week. Don’t miss out on the best artworks
          every week
        </span>
      </div>
      <Grid.Container gap={2}>
        {weeklyTrends.map((item, index) => {
          return (
            <Grid
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              justify="center"
              css={{ margin: '100px 0' }}
              key={index}
            >
              <WeeklyCard
                fullName={item.fullName}
                username={item.username}
                price={item.price}
                nft={item.nft}
              />
            </Grid>
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default WeeklyTrends;
