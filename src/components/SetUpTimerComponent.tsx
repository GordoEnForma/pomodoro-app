import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Textarea } from "@chakra-ui/react"
import { useContext } from "react";
import { intervalTimes } from '../utils/constants';
import { TimeContext } from '../context/TimeContext';
export const SetUpTimerComponent = () => {

    const { timeSelected, setTimeSelected, setHasInitiatedTimer,hasInitiatedTimer } = useContext(TimeContext);

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
            width={'100%'}
        >
            <Text
                fontWeight={'extrabold'}
                fontSize={24}
            >
                What do you plan to get done?
            </Text>
            <Textarea
                textColor={'black'}
                background={'#FFE4E0'}
                placeholder="Tell us what you're going to do or learn..."
                width={'100%'}
                mb='4'
            >
            </Textarea>
            <Box display={'flex'} alignItems='center' flexDir='column' py={7} width='50%'>
                <Text
                    fontWeight={'extrabold'}
                    fontSize={20}
                > Timer duration</Text>
                <Menu >
                    <MenuButton
                        mt={3}
                        px={4}
                        py={2}
                        background={'#FFE4E0'}
                        transition='all 0.2s'
                        borderColor={'blackAlpha.400'}
                        borderRadius='md'
                        borderWidth='1px'
                        _hover={{ bg: 'gray.400' }}
                        _expanded={{ bg: 'blue.400' }}
                        _focus={{ boxShadow: 'outline' }}
                        width='70%'
                    >
                        {
                            intervalTimes.filter(
                                ({ value }) => value === timeSelected
                            )
                            [0]?.textDisplayed
                        }
                    </MenuButton>
                    <MenuList width={'inherit'}>
                        {intervalTimes.map(({ value, textDisplayed }) => (
                            <MenuItem
                                key={value}
                                textColor={''}
                                justifyContent='center'

                                onClick={() => setTimeSelected(value)}
                            >
                                {textDisplayed}
                            </MenuItem>
                        ))}

                    </MenuList>
                </Menu>
            </Box>
            <Button background={'#D23E46'} onClick={()=>{setHasInitiatedTimer(!hasInitiatedTimer)}} >Start Timer</Button>
        </Box>

    )
}
