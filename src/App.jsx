import { Box, Container, Skeleton, Stack } from "@mui/material";
import DataCards from "./components/DataCards/DataCards";
import useData from "./components/hooks/useData";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

const App = () => {
  const { data, isLoading } = useData();
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState(data);

  useEffect(() => {
    // filter data by search value
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchedData(filteredData);
  }, [data, searchValue]);

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "90vw", margin: "auto", mt: 4 }}>
          <Stack spacing={2}>
            <Skeleton
              variant="text"
              width="80%"
              height={40}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              animation="wave"
            />
          </Stack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "90vw", margin: "auto" }}>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <DataCards data={searchedData} />
      </Box>
    </Container>
  );
};

export default App;
