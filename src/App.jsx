import { Box, Container, Skeleton } from "@mui/material";
import DataCards from "./components/DataCards/DataCards";
import useData from "./components/hooks/useData";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

const App = () => {
  const { data, isLoading } = useData();
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchedData(filteredData);
  }, [data, searchValue]);

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
