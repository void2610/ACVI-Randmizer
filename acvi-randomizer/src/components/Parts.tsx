import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Tbody,
  Center,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const PartsTable = ({ }) => {
  return (
    <TableContainer overflowX="auto" maxW="100%">
      <Table w="calc(100% + 400px)" overflow="scroll">
        <Thead>
          <Tr>
            <Th>Part</Th>
            <Th>Part Name</Th>
            <Th>Part Type</Th>
            <Th>Part Description</Th>
            <Th>Part Image</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Part Name</Td>
            <Td>Part Type</Td>
            <Td>Part Description</Td>
            <Td>Part Image</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
