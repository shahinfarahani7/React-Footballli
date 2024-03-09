import { Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Header() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        xs={11}
        px="10px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop:"12px"
        }}
      >
        <Typography fontWeight="bold">نتایج زنده</Typography>

        <AccessTimeIcon />
      </Grid>
    </Grid>
  );
}

export default Header;
