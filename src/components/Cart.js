import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CardData() {
  const [cardDetail, setCardDetail] = useState({
    all: [],
    favorites: [],
    live: [],
    pinned: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://core-sport-api.zarebin.ir/api/football/fixtures/?date=2023-01-03"
    );
    console.log("data", response.data);
    setCardDetail({
      all: response.data.all,
      favorites: response.data.favorites,
      live: response.data.live,
      pinned: response.data.pinned,
    });
  };

  return (
    <div>
      {cardDetail.all.map((item) => (
        <>
          <div key={item.id}>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={11} p="5px">
                <Accordion defaultExpanded>
                  <Card>
                    <CardContent>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Grid sx={{ display: "flex" }}>
                          <SportsSoccerIcon />
                          <Typography px="5px">{item.name} </Typography>
                          <Divider sx={{ my: "10px" }} />
                        </Grid>
                        <Divider sx={{ my: "10px" }} />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid sx={{ display: "flex", flexDirection: "column" }}>
                          <Grid
                            sx={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            {item.fixtures.map((fixture) => (
                              <>
                                <Typography>{fixture.home.name}</Typography>
                                <img
                                  width="25px"
                                  height="25px"
                                  alt=""
                                  src={fixture.home.logo}
                                />
                                <Typography>
                                  {dayjs(fixture.start_time).format("HH:mm")}
                                </Typography>
                                <img
                                  width="25px"
                                  height="25px"
                                  alt=""
                                  src={fixture.away.logo}
                                />
                                <Typography>{fixture.away.name}</Typography>
                              </>
                            ))}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </CardContent>
                  </Card>
                </Accordion>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={11} p="5px">
                <Card>
                  <CardContent>
                    <Grid sx={{ display: "flex" }}>
                      <SportsSoccerIcon />
                      <Typography px="5px">{item.name} </Typography>
                    </Grid>
                    <Divider sx={{ my: "10px" }} />
                    <Grid
                      sx={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                      {item.fixtures.map((fixture) => (
                        <>
                          <Typography>{fixture.home.name}</Typography>
                          <SportsSoccerIcon />
                          <Typography>
                            {dayjs(fixture.start_time).format("HH:mm")}
                          </Typography>
                          <SportsSoccerIcon />
                          <Typography>{fixture.away.name}</Typography>
                          <br />
                        </>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </>
      ))}
    </div>
  );
}

export default CardData;
