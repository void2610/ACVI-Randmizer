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
            <PartsTable index={0} random={0} />
            <PartsTable index={0} random={1} />
            <PartsTable index={0} random={2} />
            <PartsTable index={0} random={3} />
            <PartsTable index={0} random={4} />
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  )
}
