"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Button,
} from "@chakra-ui/react";

import { PartsTable } from "@/components/Parts";

export default function Home() {
  const buttonHandler = () => {
    console.log("button clicked");
   };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ACVI Randomizer</h1>
      <Button size="sm" variant="ghost" onClick={() => buttonHandler()}> Randomize</Button>
      <PartsTable />
    </main>
  )
}
