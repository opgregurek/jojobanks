import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./navbar/nav-bar";
import Footer from "./footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      w="100vw"
      minHeight="100vh"
      bg="white"
      templateRows={[
        "100px 1fr auto",
        "100px 1fr auto",
        "100px 1fr auto",
        "138px 1fr auto",
      ]}
    >
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem>
        <Box>{children}</Box>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
}
