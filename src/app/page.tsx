"use client";
import React, { useState, useCallback, useEffect } from "react";
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

  const randomize = () => {
    const updatedRandomArray = randomArray.map((e, index) => {
      return Math.floor(Math.random() * PartsDatas[index].length);
    });

    if (!checkIsValid(updatedRandomArray)) {
      setTimeout(randomize, 0); // ランダマイズを非同期に再帰呼び出し
    } else {
      setRandomArray(updatedRandomArray);
    }
  };


  const checkIsValid = (n: number[] ) => {
    if (PartsDatas[0][n[0]].name === PartsDatas[2][n[2]].name || PartsDatas[1][n[1]].name === PartsDatas[3][n[3]].name) {
      if (PartsDatas[0][n[0]].name === "NO EQUIPMENT" || PartsDatas[1][n[1]].name === "NO EQUIPMENT") {
        return true;
      }
      return false;
    }

    //aaaa
    // ENチェック実装予定
    console.log("Check is valid");
    return true;
  };

  useEffect(() => {
    randomize(); // コンポーネントがマウントされたときにランダマイズを実行
  }, []);

  return (
    <ChakraProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Heading size='2xl'>ACVI Randomizer</Heading>
        <Button onClick={randomize} colorScheme='teal'>
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
