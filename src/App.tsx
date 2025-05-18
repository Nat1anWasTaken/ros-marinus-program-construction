import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [countdown, setCountdown] = useState<number>(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    }
  }, [countdown]); // Add countdown as a dependency

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        direction={"column"}
        w={"full"}
        h={"full"}
        gap={4}
      >
        <Image src={"/ros-marinus.png"} maxW={{ base: "90%", md: "72" }} />
        <Heading>節目冊目前還在構建中</Heading>
        <Text>請 5/24 當天再掃一次這個 QR Code</Text>
        <Text color={"fg.subtle"} fontSize={"sm"}>
          {countdown < 5
            ? `我說你可以離開這個頁面了，你還有 ${countdown} 秒`
            : `你現在可以離開這個頁面了`}
        </Text>
      </Flex>
    </>
  );
}

export default App;
