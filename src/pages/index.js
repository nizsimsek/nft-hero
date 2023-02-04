import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import WeeklyTrends from '@components/WeeklyTrends'
import TopListCreators from '../components/TopListCreators'

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>NFT KING</title>
      </Head>

      <Header />
      <Hero />
      <WeeklyTrends />
      <TopListCreators />

      <Footer />
    </div>
  )
}
