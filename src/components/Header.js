import Link from 'next/link';
import { Button, Navbar, Spacer, Text } from '@nextui-org/react';

const Header = () => {
  return (
    <div className="bg-black z-[500] fixed w-full h-[88px] flex justify-around text-white border-b-2 border-[#333]">
      <Navbar.Content className="flex nav-links min-w-[400px]" hideIn="md">
        <Link href="/marketplace">
          <a className="text-white">Marketplace</a>
        </Link>
        <Spacer />
        <Link href="/creators">
          <a className="text-white">Creators</a>
        </Link>
        <Spacer />
        <Link href="/community">
          <a className="text-white">Community</a>
        </Link>
      </Navbar.Content>
      <Text className="m-auto" showIn="md">
        <span className="text-white text-3xl font-bold">NFT KING</span>
      </Text>
      <Navbar.Content
        className="font-bold m-auto whitespace-nowrap text-3xl"
        hideIn="md"
      >
        NFT KING
      </Navbar.Content>
      <Navbar.Content className="min-w-[400px] flex justify-end" hideIn="md">
        <Button shadow color="gradient" auto rounded>
          Connect Wallet
        </Button>
      </Navbar.Content>
    </div>
  );
};

export default Header;
