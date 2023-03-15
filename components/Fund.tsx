import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { RxCopy } from "react-icons/rx";
import { useSession } from "next-auth/react";
// import { Session } from "types/Session";
import useApi from "hooks/useApi";

const Fund = () => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const { data: session } = useSession();
  const request = useApi("onramps", "RAMP_NETWORK");
  console.log(request);

  const handleCopyAddress = () => {
    const address = session && session?.user?.address;
    navigator.clipboard.writeText(address);
    setOpenTooltip(true);
    setTimeout(() => {
      setOpenTooltip(false);
    }, 1000);
  };

  return (
    <Box px="1rem" w="full">
      <Heading as="h3">
        <Text fontSize="32px" color="socialIconsGray">
          Fund your Wallet
        </Text>
      </Heading>
      <VStack spacing="1.5rem" mt="1.5rem">
        <Box w="full">
          <Button variant="ramps" color="#22272F">
            <Image src={"payment-ramp.svg"} alt="Ramp" />
          </Button>
        </Box>
        <Box w="full">
          <Button variant="ramps" color="#4A4D53">
            <Image src={"payment-coinbase.svg"} alt="" />
            <Text ml="1rem">Coinbase</Text>
          </Button>
        </Box>
        <Box w="full">
          <Tooltip
            label="Address copied to clipboard"
            isOpen={openTooltip}
            placement="bottom-start"
          >
            <Button
              variant="ramps"
              color="formBlueDark"
              onClick={handleCopyAddress}
            >
              <RxCopy />
              <Text ml="1rem">Copy Address</Text>
            </Button>
          </Tooltip>
        </Box>
      </VStack>
      <Box w="full" mt="3rem">
        <Button variant="form" color="formBlueDark">
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Fund;
