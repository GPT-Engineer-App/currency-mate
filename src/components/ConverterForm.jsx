import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const ConverterForm = ({ onConversion }) => {
  const [currencies, setCurrencies] = useState([]);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const toast = useToast();

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch(error => {
        toast({
          title: "Error fetching currencies.",
          description: "Unable to fetch currency data. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, [toast]);

  const handleConvert = () => {
    if (!sourceCurrency || !targetCurrency || !amount) {
      toast({
        title: "Invalid input.",
        description: "Please fill in all fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    axios.get(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`)
      .then(response => {
        const rate = response.data.rates[targetCurrency];
        const result = amount * rate;
        onConversion({ sourceCurrency, targetCurrency, amount, result, date: new Date().toLocaleString() });
      })
      .catch(error => {
        toast({
          title: "Error converting currency.",
          description: "Unable to perform conversion. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" w="100%">
      <VStack spacing={4}>
        <FormControl id="source-currency">
          <FormLabel>Source Currency</FormLabel>
          <Select placeholder="Select source currency" value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)}>
            {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
          </Select>
        </FormControl>
        <FormControl id="target-currency">
          <FormLabel>Target Currency</FormLabel>
          <Select placeholder="Select target currency" value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
          </Select>
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleConvert}>Convert</Button>
      </VStack>
    </Box>
  );
};

export default ConverterForm;