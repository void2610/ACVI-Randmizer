import Image from 'next/image';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Tbody,
} from "@chakra-ui/react";

import { PartsDatas, PartsPositions } from "@/data/PartsData";
import { PartsType } from "@/types/Parts";

export const PartsHeader = () => {
  return (
      <Tr>
        <Th>部位</Th>
        <Th>パーツ名</Th>
        <Th>画像</Th>
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
    <Tr>
      <Td style={{ padding: '8px',textAlign: 'center' }}>{PartsPositions[index]}</Td>
      <Td style={{ padding: '8px',textAlign: 'center' }}>{data.name}</Td>
      <Td><Image src={data.image} width={300} height={150} alt={data.name} /></Td>
    </Tr>
  );
}
