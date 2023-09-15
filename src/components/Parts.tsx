"use client";
import Image from 'next/image';
import {
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import { PartsDatas, PartsPositions } from "@/data/PartsData";
import { PartsType } from "@/types/Parts";

export const PartsHeader = () => {
  return (
      <Tr>
        <Th>Category</Th>
        <Th>Name</Th>
        <Th>Image</Th>
      </Tr>
  )
};

export const PartsTable = ({
  index,
  random,
}: {
  index: number;
  random: number;
  }) => {
  const data:PartsType  = PartsDatas[index][random];

  return (
    <Tr suppressHydrationWarning>
      <Td style={{ padding: '8px',textAlign: 'center' }} suppressHydrationWarning>{PartsPositions[index]}</Td>
      <Td style={{ padding: '8px',textAlign: 'center' }} suppressHydrationWarning>{data.name}</Td>
      <Td suppressHydrationWarning><Image src={data.image} width={300} height={150} alt={data.name} suppressHydrationWarning/></Td>
    </Tr>
  );
}
