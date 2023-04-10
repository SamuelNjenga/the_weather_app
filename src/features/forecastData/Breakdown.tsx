import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import moment from "moment";
import React, { CSSProperties, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "10px",
  padding: "10px",
};

interface Hour {
  time: string;
  condition: {
    icon: string;
    text: string;
  };
  temp_c: number;
  temp_f: number;
  wind_kph: number;
  wind_mph: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
}

interface Props {
  hour: Hour[];
}
const Breakdown = ({ hour }: Props) => {
  const [hasMore, setHasMore] = useState<boolean>(true); // Set this to true since there may be more data to fetch
  const [displayCount, setDisplayCount] = useState<number>(4); // Set this to the number of items to display at once
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMoreData = () => {
    if (displayCount >= hour.length) {
      setHasMore(false); 
      return;
    }

    if (displayCount >= 4 && !isLoading) {
      setIsLoading(true);
    }

    setTimeout(() => {
      setDisplayCount(displayCount + 4);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={displayCount}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          isLoading && <ClipLoader color="#36d7b7" cssOverride={override} />
        }
        endMessage={<h4>No more forecast items</h4>}
      >
        {hour?.slice(0, displayCount).map((item) => {
          return (
            <>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Currently the time is{"  "}
                    <Chip
                      color="primary"
                      label={`${moment(item.time).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}`}
                    />
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Name of region is
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Area's longitude is & the Area's latitude is
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <Typography
                  fontWeight={600}
                  fontFamily="'Poppins', sans-serif"
                  sx={{ p: 2 }}
                >
                  The Overall Sky Outlook
                </Typography>
                <Box sx={{ p: 2, display: "flex" }}>
                  <Avatar variant="rounded" src={item.condition.icon} />
                  <Stack spacing={0.5}>
                    <Typography fontWeight={700}>
                      {item.condition.text}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  sx={{ px: 2, py: 1, bgcolor: "background.default" }}
                >
                  <Typography
                    fontWeight={600}
                    fontFamily="'Poppins', sans-serif"
                  >
                    The Current Temperature Stats
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Temperature in celcius is{" "}
                    <Chip label={item.temp_c} color="primary" /> and the
                    Temperature in Fahrenheit is{" "}
                    <Chip label={item.temp_f} color="primary" />
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  sx={{ px: 2, py: 1, bgcolor: "background.default" }}
                >
                  <Typography
                    fontWeight={600}
                    fontFamily="'Poppins', sans-serif"
                  >
                    The Current Wind Stats
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Wind speed in kph is{" "}
                    <Chip label={item.wind_kph} color="primary" /> and the Wind
                    speed in mph is{" "}
                    <Chip label={item.wind_mph} color="primary" />
                    .The wind direction is{" "}
                    <Chip label={item.wind_dir} color="primary" />
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  sx={{ px: 2, py: 1, bgcolor: "background.default" }}
                >
                  <Typography
                    fontWeight={600}
                    fontFamily="'Poppins', sans-serif"
                  >
                    The Current Atmosphere Pressure Stats
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Atmospheric pressure in mb is{" "}
                    <Chip label={item.pressure_mb} color="primary" /> and the
                    Atmospheric pressure in in is{" "}
                    <Chip label={item.pressure_in} color="primary" />
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  sx={{ px: 2, py: 1, bgcolor: "background.default" }}
                >
                  <Typography
                    fontWeight={600}
                    fontFamily="'Poppins', sans-serif"
                  >
                    The Current Precipitation Stats
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontFamily="'Poppins', sans-serif"
                  >
                    Precipitation in mm is{" "}
                    <Chip label={item.precip_mm} color="primary" /> and the
                    Precipitation in in is{" "}
                    <Chip label={item.precip_in} color="primary" />
                  </Typography>
                </Stack>
                <Divider />
              </Card>
            </>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default Breakdown;
