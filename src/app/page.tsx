"use client";
import React, { useState, useCallback } from "react";
import {
  ChakraProvider,
  Table,
  Thead,
  TableContainer,
  Tbody,
  Button,
  TableCaption,
  Heading,
} from "@chakra-ui/react";

import { PartsTable, PartsHeader } from "@/components/Parts";
import { PartsDatas, PartsPositions } from "@/data/PartsData";

export default function Home() {
  const [randomArray, setRandomArray] = useState(
    PartsPositions.map((e, index) => {
      return Math.floor(Math.random() * PartsDatas[index].length);
    })
  );

  const showTable = useCallback(() => {
    return (
      <>
        {PartsPositions.map((e, index) => (
          <PartsTable key={index} index={index} random={randomArray[index]} />
        ))}
      </>
    );
  }, [randomArray]);

  const buttonHandler = () => {
    // ボタンをクリックしたときにrandomArrayを更新し、再レンダリングをトリガー
    const updatedRandomArray = randomArray.map((e, index) => {
      return Math.floor(Math.random() * PartsDatas[index].length);
    });
    setRandomArray(updatedRandomArray);
  };

  return (
    <ChakraProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Heading size='2xl'>ACVI Randomizer</Heading>
        <Button onClick={buttonHandler} colorScheme='teal'>
          Randomize
        </Button>
      </div>
      <TableContainer overflowX="auto" maxW="100%">
      <Table w="100%" variant='simple' size='lg'>
        <TableCaption>EN出力不足になる場合があります</TableCaption>
          <Thead position="sticky" top={0} zIndex="docked">
            <PartsHeader />
          </Thead>
          <Tbody suppressHydrationWarning>{showTable()}</Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}
