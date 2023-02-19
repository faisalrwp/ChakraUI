import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src}  mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={2} as={Stack} spacing={5}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Courses Speaks For Themselves</Heading>
          <Text color={'green.400'}>We have been teaching next gen technologies to Students around every corner PAKISTAN in Onsite/Online mode.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 3, lg: 4 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Artificial Intelligence</TestimonialHeading>
              <TestimonialText>
              A one year AI program designed for getting Pakistan ready 
              for the new era of computing enabled by the rise of AI.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/ai.png'}
              title={'01 Year AI Program'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cloud Native Computing</TestimonialHeading>
              <TestimonialText>
              A one  year cloud  computing program designed for getting Pakistan ready 
              for the new era of micro-services and multi-cloud native computing.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/cloudcomp.png'}
              title={'01 Year CNC Program'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Block Chain</TestimonialHeading>
              <TestimonialText>
              A one year blockchain program designed for getting Pakistan ready 
              for the new era of blockchain, fintech and smart contracts 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/bc.png'}
              title={'01 Year BC Program'}
            />
          </Testimonial>
        </Stack>
      </Container>

<Container maxW={'7xl'} py={2} as={Stack} spacing={1}>
  <Stack
    direction={{ base: 'column', md: 'row' }}
    spacing={{ base: 2, md: 3, lg: 4 }}>
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>Internet of Things</TestimonialHeading>
        <TestimonialText>
        A fifteen months IOT and AI program designed for getting Pakistan ready
        for the new era of Internet of Things IoT and AI. 
        </TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar
        src={'/iot.png'}
        title={'01 Year IoT Program'}
      />
    </Testimonial>
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>Web 3.0 and Metaverse</TestimonialHeading>
        <TestimonialText>
        A one year Web 3.0 and Metaverse program designed for getting Pakistan ready
        for the new era of next generation Web 3.0 technologies. 
        </TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar
        src={'web3.0.png'}
        title={'01 Year Web3.0 Program'}
      />
    </Testimonial>
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>Career Management</TestimonialHeading>
        <TestimonialText>
        Extensive guidance, practical support and management services for the students of these programs
        for making them learn and earn at the same time.
        </TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar
        src={'/career.png'}
        title={'Career Counceling and Support'}
      />
    </Testimonial>
  </Stack>
</Container>
</Box>
  );
}
