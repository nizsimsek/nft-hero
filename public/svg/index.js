import Weekly1 from '@public/svg/weekly-one.svg'
import Weekly2 from '@public/svg/weekly-two.svg'
import Weekly3 from '@public/svg/weekly-three.svg'
import Weekly4 from '@public/svg/weekly-four.svg'
import MetaMask from '@public/svg/metamask-logo.svg'
import Binance from '@public/svg/binance-logo.svg'
import Coinbase from '@public/img/coinbase-logo.png'

export const weeklyTrends = [
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

export const coinMarkets = [
    {
        name: 'METAMASK',
        link: 'https://metamask.io/',
        image: MetaMask.src,
        textStyle: {
            fontWeight: '400',
            fontSize: '18px',
            letterSpacing: '4px'
        }
    },
    {
        name: 'BINANCE',
        link: 'https://www.binance.com/',
        image: Binance.src,
        textStyle: {
            fontWeight: '500',
            fontSize: '20px',
            letterSpacing: '3px'
        }
    },
    {
        name: 'coinbase',
        link: 'https://www.coinbase.com/',
        image: Coinbase.src,
        textStyle: {
            fontWeight: '600',
            fontSize: '20px',
            letterSpacing: '0px'
        }
    },
]
