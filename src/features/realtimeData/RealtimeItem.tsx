import { LocationOn } from "@mui/icons-material";
import { Avatar, Box, Chip, Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";

type RealtimeData = {
  [key: string]: any;
};

const RealtimeItem = ({ realtimeData }: RealtimeData) => {
  const { name, region, country, lat, lon, localtime } = realtimeData?.location;

  const {
    temp_c,
    temp_f,
    last_updated,
    condition,
    wind_mph,
    wind_kph,
    wind_dir,
    pressure_mb,
    pressure_in,
    humidity,
    precip_mm,
    precip_in,
    vis_km,
    vis_miles,
  } = realtimeData?.current;

  const { text, icon } = condition;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Name of area : <LocationOn sx={{ color: grey[500] }} />
            {name}, {country}
          </Typography>
          <Typography>
            Current time is
            <Chip
              label={`${moment(localtime).format("MMMM Do YYYY, h:mm:ss a")}`}
            />
          </Typography>
          <Typography variant="h5" component="div">
            Name of region : {region}
          </Typography>
          <Typography variant="h5" component="div">
            Area's longitude : {lon} Area's latitude : {lat}
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" src={icon} />
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>{text}</Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography>The Current Temperature Stats</Typography>
          <Typography>
            Temperature in celcius is <Chip label={temp_c} /> and the
            Temperature in Fahrenheit is <Chip label={temp_f} />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography>The Current Wind Stats</Typography>
          <Typography>
            Wind speed in kph is <Chip label={wind_kph} /> and the Wind speed in
            mph is <Chip label={wind_mph} />
            .The wind direction is <Chip label={wind_dir} />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography>The Current Atmosphere Pressure Stats</Typography>
          <Typography>
            Atmospheric pressure in mb is <Chip label={pressure_mb} /> and the
            Atmospheric pressure in in is <Chip label={pressure_in} />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography>The Current Precipitation Stats</Typography>
          <Typography>
            Precipitation in mm is <Chip label={precip_mm} /> and the
            Precipitation in in is <Chip label={precip_in} />
          </Typography>
        </Stack>
      </Card>
    </div>
  );
};

export default RealtimeItem;
