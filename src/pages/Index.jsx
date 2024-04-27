import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, NumberInput, NumberInputField, Table, Tbody, Td, Th, Thead, Tr, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPlus, FaFileExcel } from "react-icons/fa";

const Index = () => {
  const [materials, setMaterials] = useState([]);
  const [materialName, setMaterialName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("meters");
  const [dressesProduced, setDressesProduced] = useState("");
  const [materialUsed, setMaterialUsed] = useState("");
  const toast = useToast();

  const handleAddMaterial = () => {
    const newMaterial = {
      name: materialName,
      quantity: parseFloat(quantity),
      unit,
      dressesProduced: parseInt(dressesProduced, 10) || 0,
      materialUsed: parseFloat(materialUsed),
      kpi: parseFloat(materialUsed) / (parseInt(dressesProduced, 10) || 1),
    };
    setMaterials([...materials, newMaterial]);
    setMaterialName("");
    setQuantity("");
    setUnit("meters");
    setDressesProduced("");
    setMaterialUsed("");
  };

  return (
    <VStack spacing={4} p={5}>
      <FormControl>
        <FormLabel>Material Name</FormLabel>
        <Input value={materialName} onChange={(e) => setMaterialName(e.target.value)} placeholder="Enter material name" />
      </FormControl>
      <Flex>
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <NumberInput min={1}>
            <NumberInputField value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter quantity" />
          </NumberInput>
        </FormControl>
        <FormControl ml={2}>
          <FormLabel>Unit</FormLabel>
          <Input value={unit} onChange={(e) => setUnit(e.target.value)} placeholder="meters or yards" />
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel>Dresses Produced</FormLabel>
        <NumberInput min={0}>
          <NumberInputField value={dressesProduced} onChange={(e) => setDressesProduced(e.target.value)} placeholder="Enter number of dresses produced" />
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Material Used (in same unit)</FormLabel>
        <NumberInput min={0}>
          <NumberInputField value={materialUsed} onChange={(e) => setMaterialUsed(e.target.value)} placeholder="Enter material used" />
        </NumberInput>
      </FormControl>
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddMaterial}>
        Add Material
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Material Name</Th>
            <Th>Quantity</Th>
            <Th>Unit</Th>
            <Th>Dresses Produced</Th>
            <Th>Material Used</Th>
            <Th>KPI (Material/Dress)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {materials.map((material, index) => (
            <Tr key={index} bg={material.kpi < 3 || material.kpi > 4 ? "red.100" : "white"}>
              <Td>{material.name}</Td>
              <Td>{material.quantity}</Td>
              <Td>{material.unit}</Td>
              <Td>{material.dressesProduced}</Td>
              <Td>{material.materialUsed}</Td>
              <Td>{material.kpi.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default Index;
