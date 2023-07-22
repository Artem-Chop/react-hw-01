import React, { useState } from 'react';

import FeedBacksButtons from './FeedBacksButtons';
import Statistics from './Statistics';
import { Box, Text, Heading } from '@chakra-ui/react';

export default function Feedbaks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    if (e.target.name === 'good') {
      setGood(prev => prev + 1);
    }
    if (e.target.name === 'neutral') {
      setNeutral(prev => prev + 1);
    }
    if (e.target.name === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const totalCount = good + neutral + bad;
  const percentage = ((good / totalCount) * 100).toFixed(0) + '%';

  return (
    <Box
      as="section"
      pt="10px"
      maxW="400px"
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h1" size="xl" mt="10px">
        Please leave feedback
      </Heading>
      <FeedBacksButtons
        options={['good', 'neutral', 'bad']}
        onClick={onClick}
      />
      <Heading as="h1" size="md" mt="10px">
        Statistics
      </Heading>
      {totalCount > 0 ? (
        <Statistics
          goodInf={good}
          neutralInf={neutral}
          badInf={bad}
          totalInf={totalCount}
          percentInf={percentage}
        />
      ) : (
        <Text mt="10px">There is no feedback</Text>
      )}
    </Box>
  );
}
