import { Box, TextField } from "@mui/material";
import PropTypes from "prop-types";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <Box
      component={"div"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
      padding={2}
      sx={{mt:3,mb:4}}
    >
      <TextField
        placeholder="Search by title ...."
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{
          width: "50%",
         
          
        }}
      />
    </Box>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchBox;
