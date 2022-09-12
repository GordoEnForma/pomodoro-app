import { useEffect, useState } from "react";
import {sendNotification} from '@tauri-apps/api/notification';
import {ask} from '@tauri-apps/api/dialog';

import { Button, Text, Flex, ButtonGroup } from '@chakra-ui/react';

function App() {

  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const timeButtons = [
    { value: 900, display: '15 Minutos' }, { value: 1800, display: '30 Minutos' }, { value: 3600, display: '60 Minutos' }
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      if (startTimer && time > 0) {
        setTime((time) => time - 1)
        console.log(time);
      }
      if (time === 0 && startTimer === true) {
        
        sendNotification({
          title:'Se acabó la sesión!',
          body: 'Lo lograste mi loco, hora de bajar pepa 5 ',

        })
        triggerRestart();
      }
      clearInterval(interval);
    }, 1000)

    return () => clearInterval(interval);
  }, [time, startTimer])

  const triggerRestart = () => {
    setTime(0);
    setStartTimer(false);
  }
  return (

    <Flex
      alignItems={'center'}
      flexDir={"column"} padding='12'
      background={'gray.700'}
      height='100vh'
    >
      <Text fontSize={48} fontWeight='bold' color='white' mt='25' textAlign={{ base: 'center' }}>
        Pomodoro Timer
      </Text>
      <Text fontSize={64} fontWeight='bold' color='white'>
        {`${Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : `${Math.floor(time / 60)}`
          }:${time % 60 < 10 ? `0${time % 60}` : time % 60}`}
      </Text>
      <Flex mt={10}>
        <ButtonGroup gap={3}>
          <Button width={100} colorScheme='red' color={'white'} onClick={() => setStartTimer(!startTimer)} >
            {!startTimer ? 'Start' : (time > 0 && 'Pause')}
          </Button>
          <Button width={100} colorScheme='facebook' color={'white'} onClick={triggerRestart}>
            Restart
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex mt={10}  >
        <ButtonGroup gap={5} flexDirection={{ base: 'column', sm: 'row' }}>
          {
            timeButtons.map(({ value, display }) => (
              <Button disabled={startTimer ? true : false} px={15} m={2} backgroundColor={"green.300"} key={value} width={100} color={'white'} onClick={() => setTime(value)}>
                {display}
              </Button>
            ))
          }
        </ButtonGroup>
      </Flex>

    </Flex>


  );
}

export default App;
