import { useState, useEffect, useContext } from 'react';
import { sendNotification } from '@tauri-apps/api/notification';
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import { TimeContext } from '../context/TimeContext';
import { HoursComponent } from './HoursComponent';

export const TimerComponent = () => {
  const {hasInitiatedTimer, setHasInitiatedTimer, timeSelected,setTimeSelected} = useContext(TimeContext);
  
  const [timeOfTheSession, setTimeOfTheSession] = useState<number>(timeSelected); 
  const [pause,setPause] = useState<boolean>(false);

  const [sessions, setSessions] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [intervalTimeSelected, setIntervalTimeSelected] = useState(0);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      
      if (hasInitiatedTimer && timeSelected > 0) {
        setTimeOfTheSession(timeOfTheSession - 1)
      }
      if (timeOfTheSession === 0 && hasInitiatedTimer === true) {

        setSessions(sessions + 1);
        sendNotification({
          title: 'Se acabó la sesión!',
          body: 'Lo lograste mi loco, hora de bajar pepa 5 ',

        })

        triggerFinishEarly();
      }
      clearInterval(interval);
    }, 1000)

    return () => clearInterval(interval);
  }, [timeOfTheSession, hasInitiatedTimer,pause])

  
  const triggerFinishEarly = () => {
    setTimeSpent(timeSelected - timeOfTheSession);
    setHasInitiatedTimer(false);
  }
    return (
      <Box 
      alignItems={'center'}
      background={'#FFB2AD'}
      border={"1px"}
      borderColor={'blackAlpha.700'}
      borderRadius={"md"}
      display='flex'
      flexDir={'column'}
      padding='3'
      width={'100%'}>
      <Text fontSize={16} fontWeight={'extrabold'}>
        Your current plan  
      </Text>
      <Text fontSize={14} fontWeight={'light'}>
        asd
        </Text>  
      <Text fontSize={{ base: 32, sm: 72 }} fontWeight='light' color='black'>
        <HoursComponent timeInSeconds={timeOfTheSession} />
      </Text>
      <Flex mt={10} justifyContent='center'>
        <ButtonGroup gap={3} >
          <Button width={120} background={'#CE4700'} color={'white'} onClick={() => setPause(!pause)} >
            {pause ? 'Resume' : (timeSelected > 0 && 'Pause')}
          </Button>
          <Button width={120} background={'#36B7EC'} color={'white'} onClick={triggerFinishEarly}>
            Finish Early
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
