import * as React from "react"
import {
  ChakraProvider,
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
  theme,
  Heading,
  Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
    <Heading pt='5px'>Job Listing app</Heading>
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
      <Tr>
      <Th>Name</Th>
      <Th>Description</Th>
      <Th >Start</Th>
    </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Arya Stark</Td>
          <Td>Killer of the Night King</Td>
          <Td >5/21/2021</Td>
        </Tr>
        <Tr>
          <Td>Khal Drogo</Td>
          <Td>Dothraki chief</Td>
          <Td >6/1/2021</Td>
        </Tr>
      </Tbody>
      {/* <Tbody>
        {listings.map((listing: { id: any; name: any; description: any; date: any }) => (
          <Tr key={listing.id}>
            <Td>{listing.name}</Td>
            <Td>{listing.description}</Td>
            <Td>{listing.date}</Td>
          </Tr>
        ))}
      </Tbody> */}
      </Table>
      </Box>
  </ChakraProvider>
)
