"use client";
import React, { useState, useCallback } from "react";
import {
  Table,
  Thead,
  TableContainer,
  Tbody,
  Button,
} from "@chakra-ui/react";

import { PartsTable, PartsHeader } from "@/components/Parts";
import { PartsDatas, PartsPositions } from "@/data/PartsData";

export default function Home() {
  // randomArrayをuseStateで状態として管理
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
    <main>
      <h1>ACVI Randomizer</h1>
      <Button size="sm" variant="ghost" onClick={buttonHandler}>
        Randomize
      </Button>
      <TableContainer overflowX="auto" maxW="100%">
        <Table w="100%">
          <Thead position="sticky" top={0} zIndex="docked">
            <PartsHeader />
          </Thead>
          <Tbody suppressHydrationWarning>{showTable()}</Tbody>
        </Table>
      </TableContainer>
    </main>
  );
}
