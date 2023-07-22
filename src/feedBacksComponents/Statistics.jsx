import React from 'react';

import { VStack, Text } from '@chakra-ui/react';

const Statistics = ({ goodInf, badInf, neutralInf, totalInf, percentInf }) => {
  return (
    <VStack>
      <Text>Good:{goodInf}</Text>
      <Text>Neutral:{neutralInf}</Text>
      <Text>Bad:{badInf}</Text>
      <Text>Total:{totalInf}</Text>
      <Text>Good Percentage: {percentInf}</Text>
    </VStack>
  );
};

export default Statistics;
