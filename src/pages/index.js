import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import WeeklyTrends from '@components/WeeklyTrends'

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT KING</title>
      </Head>

      <Header />
      <hr className="bg-[#333333]" />
      <Hero />
      <WeeklyTrends />

      <Footer />
    </>
  )
}
