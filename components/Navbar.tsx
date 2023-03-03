import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar: React.FC<NavbarProps> = () => {
  const { data: session } = useSession();

  return (
    <HStack
      py="1rem"
      px="1rem"
      justifyContent="space-between"
      w="full"
      mb="1.5rem"
      fontSize="23px"
    >
      <Box>
        <Link href="/">
          <Heading
            as="h1"
            fontWeight="bold"
            fontFamily="Sharpie"
            color="#F5287E"
          >
            <Text>Ka-ching</Text>
          </Heading>
        </Link>
      </Box>
      <Box>
        {/* TODO: render image based on social logo of login */}
        <Text color="black">Signed in as {session?.user?.username || ""}</Text>
        {/* <Button onClick={() => signOut()}>Sign out</Button> */}
      </Box>
    </HStack>
  );
};

export default Navbar;
