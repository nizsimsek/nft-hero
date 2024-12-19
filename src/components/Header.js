import Link from 'next/link'
import { Button, Navbar, Spacer, Text } from '@nextui-org/react'

const Header = () => {
  return (
    <div className="bg-black z-[500] fixed w-full h-[88px] flex justify-around text-white border-b-2 border-[#333]">
      <Navbar.Content className="flex nav-links min-w-[400px]" hideIn="md">
        <Link href="/marketplace">
          <span className="text-white">Marketplace</span>
        </Link>
        <Spacer />
        <Link href="/creators">
          <span className="text-white">Creators</span>
        </Link>
        <Spacer />
        <Link href="/community">
          <span className="text-white">Community</span>
        </Link>
      </Navbar.Content>
      <Navbar.Content className="font-bold whitespace-nowrap text-3xl">
        NFT KING
      </Navbar.Content>
      <Navbar.Content className="flex justify-end min-w-[400px]" hideIn="md">
        <Button shadow color="gradient" auto rounded>
          Connect Wallet
        </Button>
      </Navbar.Content>
    </div>
  )
}

export default Header
