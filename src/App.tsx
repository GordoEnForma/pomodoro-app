import { useEffect, useState } from "react";
import { sendNotification } from '@tauri-apps/api/notification';
import { Button, Text, Flex, ButtonGroup, Box, space } from '@chakra-ui/react';
import { intervalTimeButtons } from "./utils/constants";
import { SpendedTime } from "./components/SpendedTime";
import { HoursComponent } from "./components/HoursComponent";

export const App = () => {
  const [intervalTime, setIntervalTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [intervalTimeSelected, setIntervalTimeSelected] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      if (startTimer && intervalTime > 0) {
        setIntervalTime((intervalTime) => intervalTime - 1)
      }
      if (intervalTime === 0 && startTimer === true) {

        setSessions(sessions + 1);
        sendNotification({
          title: 'Se acabó la sesión!',
          body: 'Lo lograste mi loco, hora de bajar pepa 5 ',

        })

        triggerRestart();
      }
      clearInterval(interval);
    }, 1000)

    return () => clearInterval(interval);
  }, [intervalTime, startTimer])

  const startSession = (timeSelected: number) => {
    setIntervalTimeSelected(timeSelected);
    setIntervalTime(timeSelected);
  }
  const triggerRestart = () => {
    setTimeSpent(timeSpended => (intervalTimeSelected - intervalTime + timeSpended));
    setIntervalTime(0);
    setStartTimer(false);
  }
  return (

    <Flex
      alignItems={'center'}
      flexDir={"column"} padding='12'
      background={'gray.700'}
      height='100%'
    >
      <Text fontSize={48} fontWeight='bold' color='white' mt='25' textAlign={{ base: 'center' }}>

        Pomodor Timer
      </Text>
      <Text fontSize={64} fontWeight='bold' color='white'>
        <HoursComponent timeInSeconds={intervalTime} />
      </Text>
      <Flex mt={10}>
        <ButtonGroup gap={3}>
          <Button width={100} colorScheme='red' color={'white'} onClick={() => setStartTimer(!startTimer)} >
            {!startTimer ? 'Start' : (intervalTime > 0 && 'Pause')}
          </Button>
          <Button width={100} colorScheme='facebook' color={'white'} onClick={triggerRestart}>
            Restart
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex mt={10}  >
        <ButtonGroup gap={5} flexDirection={{ base: 'column', sm: 'row' }}>
          {
            intervalTimeButtons.map(({ value, textDisplayed }) => (
              <Button
                disabled={startTimer ? true : false}
                px={15}
                m={2}
                backgroundColor={"green.300"}
                key={value}
                width={100}
                color={'white'}
                onClick={() => startSession(value)}
              >
                {textDisplayed}
              </Button>
            ))
          }
        </ButtonGroup>
      </Flex>
      <Flex w={{ base: '100%' }} justifyContent={'space-evenly'} flexDirection={{ base: 'column', sm: 'row' }}>
        <Box>
          <Text color={'whiteAlpha.900'} mt={5} fontWeight={"bold"} fontSize={24} textAlign={'center'}>Number of Sessions Completed:</Text>
          <Text color={'whiteAlpha.900'} fontSize={20} textAlign={'center'}>{sessions}</Text>
        </Box>
        <SpendedTime timeSpent={timeSpent} />
      </Flex>
    </Flex>


  );
}
