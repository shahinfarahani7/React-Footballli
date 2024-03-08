import { Divider, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function CardData() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={11} p="5px">
        <Card>
          <CardContent>
            <Grid sx={{ display: "flex" }}>
              <SportsSoccerIcon />
              <Typography px="5px">لیگ برتر</Typography>
            </Grid>
            <Divider sx={{ my: "10px" }} />
            <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography>استقلال</Typography>
              <SportsSoccerIcon />
              <Typography>12:34</Typography>
              <SportsSoccerIcon />
              <Typography>سپاهان</Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardData;
