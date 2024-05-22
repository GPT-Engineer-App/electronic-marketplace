import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6} textAlign="center">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Flex gap={4}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </Flex>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex gap={4}>
            <Link href="#">Contact Us</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;