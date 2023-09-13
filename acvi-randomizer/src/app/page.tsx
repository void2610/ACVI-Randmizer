"use client";
import styles from "./page.module.css";
import { useCallback } from "react";
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
  const randomArray = PartsPositions.map((e, index) => {
    return Math.floor(Math.random() * PartsDatas[index].length);
  });

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
    console.log("button clicked");
    randomArray.map((e, index) => {
      randomArray[index] = Math.floor(Math.random() * PartsDatas[index].length);
    });
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ACVI Randomizer</h1>
      {/*<Button size="sm" variant="ghost" onClick={() => buttonHandler()}> Randomize</Button>*/}
      <TableContainer overflowX="auto" maxW="100%">
        <Table w="100%">
          <Thead position="sticky" top={0} zIndex="docked">
            <PartsHeader />
          </Thead>
          <Tbody suppressHydrationWarning>
            {showTable()}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  )
}
