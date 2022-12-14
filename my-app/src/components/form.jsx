import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'left'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Add New Card to Proceed</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
           
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Cardholder Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="number">
                <FormLabel>Card Number</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="date">
                <FormLabel>Expiry date</FormLabel>
                <Input type="date" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bg={'#4c83ee'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Save
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }