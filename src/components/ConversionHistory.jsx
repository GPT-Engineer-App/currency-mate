import React from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';

const ConversionHistory = ({ history }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" w="100%" mt={4}>
      <Heading size="md" mb={4}>Conversion History</Heading>
      <List spacing={3}>
        {history.map((entry, index) => (
          <ListItem key={index}>
            <Text>{entry.date}: {entry.amount} {entry.sourceCurrency} to {entry.targetCurrency} = {entry.result.toFixed(2)} {entry.targetCurrency}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ConversionHistory;