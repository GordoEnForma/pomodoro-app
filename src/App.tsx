import { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { SetUpTimerComponent } from "./components/SetUpTimerComponent";
import { TimerComponent } from "./components/TimerComponent";
import { TimeContext } from './context/TimeContext';
import { SpentTime } from './components';

export const App = () => {

  const { hasInitiatedTimer, timeSpent } = useContext(TimeContext);

  return (
    <Flex
      alignItems={'center'}
      flexDir={"column"}
      background={'#D23E46'}
      p={'3.5rem'}
      width={'100%'}
      border={'px'}
      borderColor={'blackAlpha.800'}
      height='100vh'
    >
      {hasInitiatedTimer ? (

        <TimerComponent />
        // {/* Set Up Timer  */}
      ) : (
        // {/* Time Running with Pause/Resume buttons  */}
        <SetUpTimerComponent />
      )
      }

      <Flex w={{ base: '100%' }} justifyContent={'space-evenly'} flexDirection={{ base: 'column', sm: 'row' }}>
        <Box>
          <Text color={'whiteAlpha.900'} mt={5} fontWeight={"bold"} fontSize={24} textAlign={'center'}>Number of Sessions Completed:</Text>
          {/* <Text color={'whiteAlpha.900'} fontSize={20} textAlign={'center'}>{sessions}</Text> */}
        </Box>
        <SpentTime timeSpent={timeSpent} />
      </Flex>



    </Flex>


  );
}
