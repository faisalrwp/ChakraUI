"use client"

import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Container,
    SimpleGrid,
    Stack, StackDivider,
    Text,
    useColorModeValue,

  } from '@chakra-ui/react';
  import {
      IoAnalytics,
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import {} from '@chakra-ui/react';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  interface FeaturesProps {
    heading: string;
    text: string;
  }
  
  const Features = ({ heading, text }: FeaturesProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function cai() {
    return (
      <Box as={Container} maxW="7xl" mt={5} p={4}>
<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Courses
            </Text>
            <Heading>Cloud Native Computing</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) 
            that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering 
            services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students 
            a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost 
            by expanding software exports.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning, Analysis and Execution'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Borderless Financial Independence'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Technical Mastery in Cutting Edge Technologies'}
              />
              <Feature
                icon={
                  <Icon as={IoAnalytics} color={'blue.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Technical Mastery in Cutting Edge Technologies'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/ccc.png'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
                <p/><br/><br/><br/>
        
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Features
            heading={'First Quarter'}
            text={'Cloud Native Computing Foundations'}
          />
          <Features
            heading={'Second Quarter'}
            text={'Developing Cloud Native Microservices'}
          />
          <Features
            heading={'Third Quarter'}
            text={'Kubernetes in Practice'}
          />
          <Features
            heading={'Fourth Quarter'}
            text={'AWS Application Development'}
          />
        </Grid>
      </Box>
    );
  }