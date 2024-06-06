import { Box, Container } from "@mui/material";
import DataCards from "./components/DataCards/DataCards";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import useData from "./components/hooks/useData";
import Loader from "./components/Loader/Loader";

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
    return <Loader />;
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
