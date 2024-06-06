import { SearchRounded } from "@mui/icons-material";
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
      sx={{ mt: 3, mb: 4 }}
    >
      <Box
        position={"relative"}
        width={{ xs: "90%", sm: "75%", md: "60%", lg: "50%" }} 
      >
        <TextField
          placeholder="Search by title ...."
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
        <SearchRounded
          sx={{
            position: "absolute",
            right: 2,
            bottom: "50%",
            transform: "translateY(50%)",
          }}
        />
      </Box>
    </Box>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchBox;
