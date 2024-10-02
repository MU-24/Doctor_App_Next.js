"use client";
import Image from "next/image";
import Img1 from "../../../public/1.png";

import img1 from "../../../public/1.png";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bgColor={"black"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text> */}
            <br />{" "}
            <Text color={"white"} as={"span"}>
              Best Doctors of Pakistan
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Best Doctors of Pakistan Snippy is a rich coding snippets app that
            lets you create your own code snippets, categorize them, and even
            sync them in the cloud so you can use them anywhere. All that is
            free!
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
        className="-mt-2 ml-8"
          alt={"Login Image"}
          objectFit={"cover"}
          width={350}
          height={50}
          src={Img1}
        />
      </Flex>
    </Stack>
  );
}
