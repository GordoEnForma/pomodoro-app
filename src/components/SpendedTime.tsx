import { Box, Text } from "@chakra-ui/react"
import { HoursComponent } from './HoursComponent';
import { memo } from 'react';

type Props = {
    timeSpent: number
}

export const SpendedTime = memo(({ timeSpent }: Props) => {
    
    console.log('SpendedTime')
    return (
        <Box>
            <Text color={'whiteAlpha.900'} mt={5} fontWeight={"bold"} fontSize={24} textAlign={'center'}>Amount of Time Spended Working:</Text>
            <Text color={'whiteAlpha.900'} fontSize={20} textAlign={'center'}>
                <HoursComponent timeInSeconds={timeSpent} displayHours={(timeSpent >= 3600) ? true : false} />
            </Text>
        </Box>
    )
})

