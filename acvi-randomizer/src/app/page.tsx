"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Tbody,
  Button,
} from "@chakra-ui/react";

import { PartsTable, PartsHeader } from "@/components/Parts";
import { PartsPositions } from "@/data/PartsData";

export default function Home() {
  const buttonHandler = () => {
    console.log("button clicked");
   };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ACVI Randomizer</h1>
      <Button size="sm" variant="ghost" onClick={() => buttonHandler()}> Randomize</Button>
      <TableContainer overflowX="auto" maxW="100%">
        <Table w="100%">
          <Thead position="sticky" top={0} zIndex="docked">
            <PartsHeader />
          </Thead>
          <Tbody>
            {PartsPositions.map((e, index) => {
              return(<PartsTable index={index} random={0} />);
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  )
}
