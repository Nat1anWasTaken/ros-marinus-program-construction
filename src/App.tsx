import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [countdown, setCountdown] = useState<number>(11);
  const imgUrl = `${import.meta.env.BASE_URL}/ros-marinus.png`;

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
      window.location.href = "https://www.youtube.com/watch?v=FoO7Pmx0bE4";
    }
  }, [countdown]);

  let countdownText = "";
  if (countdown >= 6) {
    countdownText = "你可以離開這個頁面了";
  } else if (countdown <= 5 && countdown > 0) {
    countdownText = `我說你可以離開這個頁面了，你還有 ${countdown} 秒`;
  } else if (countdown === 0) {
    countdownText = "呀哩呀哩，攔不住的大小姐";
  }

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
        <Image src={imgUrl} maxW={{ base: "90%", md: "72" }} />
        <Heading>節目冊目前還在構建中</Heading>
        <Text>請 5/24 當天再掃一次這個 QR Code</Text>
        <Text color={"fg.subtle"} fontSize={"sm"}>
          {countdownText}
        </Text>
      </Flex>
    </>
  );
}

export default App;
