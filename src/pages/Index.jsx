import React, { useState, useEffect } from 'react';
import { Container, VStack, Heading, useColorMode, Button } from '@chakra-ui/react';
import ConverterForm from '../components/ConverterForm';
import ConversionHistory from '../components/ConversionHistory';

const Index = () => {
  const [history, setHistory] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    setHistory(storedHistory);
  }, []);

  const handleConversion = (conversion) => {
    const updatedHistory = [conversion, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('conversionHistory', JSON.stringify(updatedHistory));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="100%">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <Heading>Currency Converter</Heading>
        <ConverterForm onConversion={handleConversion} />
        <ConversionHistory history={history} />
      </VStack>
    </Container>
  );
};

export default Index;