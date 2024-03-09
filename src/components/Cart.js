import {
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

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
                <Card>
                  <CardContent>
                    <Grid sx={{ display: "flex" }}>
                      <img width="20px" height="20px" alt="" src={item.logo} />
                      <Typography px="5px">{item.name} </Typography>
                    </Grid>
                    <Divider sx={{ my: "10px" }} />
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {item.fixtures.map((fixture) => (
                        <>
                          <Grid
                            container
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Grid item xs={3}>
                              <Typography fontSize="10px" fontWeight="bold">
                                {fixture.home.name}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <img
                                width="18px"
                                height="18px"
                                alt=""
                                src={fixture.home.logo}
                              />
                            </Grid>
                            <Grid item xs={2}>
                              {" "}
                              <Typography fontSize="10px" fontWeight="bold">
                                {dayjs(fixture.start_time).format("HH:mm")}
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <img
                                width="18px"
                                height="18px"
                                alt=""
                                src={fixture.away.logo}
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <Typography fontSize="10px" fontWeight="bold">
                                {fixture.away.name}
                              </Typography>
                            </Grid>
                          </Grid>
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
