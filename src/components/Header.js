import { Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Header() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        xs={11}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding:"10px"
        }}
      >
        <Typography fontWeight="bold">نتایج زنده</Typography>

        <AccessTimeIcon />
      </Grid>
    </Grid>
  );
}

export default Header;
