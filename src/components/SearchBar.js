import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        xs={11}
        p="5px"
      >
      <TextField
        placeholder="جستجو..."
        fullWidth
        sx={{
          "& fieldset": { border: "none" },
          backgroundColor: "#F5F6FB",
          borderRadius: "8px",
          marginTop: "5%",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9C9C9F" }} />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Grid>
    </Grid>
  );
}

export default SearchBar;
