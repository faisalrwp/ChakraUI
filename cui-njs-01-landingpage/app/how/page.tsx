"use client"

import { Box, Heading, Text, List, ListItem, ListIcon, OrderedList, UnorderedList,Button} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function how() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={0} background='gray.400'>
        Nationwide OnSite / Online Classes
      </Heading>
      <Text color={'gray.800'} background='gray.200'>
      PIAIC will launch classes in the following locations, one city at a time, in the following order
      <List>
        <ListItem>Karachi</ListItem>
        <ListItem>Islamabad</ListItem>
        <ListItem>Lahore</ListItem>
        <ListItem>Peshawar</ListItem>
            </List>
      </Text>
      <Heading as="h2" size="xl" mt={6} mb={0} background='green.400'>
        Admission Procedure
      </Heading>
      <Text color={'gray.500'} textAlign='justify' background='green.50'>
      To participate in the program and become eligible for the most prestigious credentials for AI, 
      Cloud and Blockchain technologies in the world, students must complete the following process
<List>
<ListItem> <ListIcon as={CheckCircleIcon} color='green.500' /> Signup at PIAIC Portal. <Button   variant={'link'} as='a' href="https://portal.piaic.org/signup" target={'_blank'} >Click Here</Button></ListItem>
<ListItem> <ListIcon as={CheckCircleIcon} color='green.500' />Submit the online application.</ListItem>
<ListItem> <ListIcon as={CheckCircleIcon} color='green.500' />Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</ListItem>
<ListItem> <ListIcon as={CheckCircleIcon} color='green.500' />Pass all PIAIC exams with an average score of at least 70%.</ListItem>
</List>
      </Text>
      <Heading as="h2" size="xl" mt={6} mb={0} background='gray.400'>
        Classes Schedule
      </Heading>
      <Text color={'gray.800'} textAlign='justify'background='gray.200'>
      All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.
      </Text>
      <Heading as="h2" size="xl" mt={6} mb={0} background='green.400'>
        Fee Structure
      </Heading>
      <Text color={'gray.500'} textAlign='justify' background='green.50'>
      Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.

The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.

The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.
      </Text>
      
      <Text color={'red.500'} textAlign='justify' background='pink.50'>
      Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds. 
      </Text>

    </Box>

    
  );
}
