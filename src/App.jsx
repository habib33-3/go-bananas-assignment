import { Box, Container, Skeleton } from "@mui/material";
import DataCards from "./components/DataCards/DataCards";
import useData from "./components/hooks/useData";

const App = () => {
  const { data, isLoading } = useData();

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={210}
        height={118}
      />
    );
  }

  return (
    <Container maxWidth="lg" >
      <Box sx={{ maxWidth: "90vw", margin: "auto" }}>
        <DataCards data={data} />
      </Box>
    </Container>
  );
};

export default App;
