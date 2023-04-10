import { LocationOn } from "@mui/icons-material";
import { Avatar, Box, Chip, Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";
import Breakdown from './Breakdown';


type ForecastData = {
  [key: string]: any;
};

const ForecastItem = ({ forecastData }: ForecastData) => {
  const { name, region, country, lat, lon, localtime } = forecastData?.location;

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
  } = forecastData?.current;

  const { text, icon } = condition;

  const { date, day, astro, hour } = forecastData?.forecast?.forecastday[0];

  const {
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    avgtemp_c,
    avgtemp_f,
    maxwind_mph,
    maxwind_kph,
    totalprecip_mm,
    totalprecip_in,
    totalsnow_cm,
    daily_will_it_rain,
    daily_chance_of_rain,
    daily_will_it_snow,
    daily_chance_of_snow,
    condition: overall_condition,
  } = day;

  const { overall_text, overall_icon } = overall_condition;

  const {sunrise,sunset, moonrise,moonset,moon_phase} = astro;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Location's Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Name of area : <LocationOn sx={{ color: grey[500] }} />
            {name}, {country}
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Currently the time is{"  "}
            <Chip
              color="primary"
              label={`${moment(localtime).format("MMMM Do YYYY, h:mm:ss a")}`}
            />
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Name of region is {region}
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Area's longitude is {lon} & the Area's latitude is {lat}
          </Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card>
        <Typography
          fontWeight={600}
          fontFamily="'Poppins', sans-serif"
          sx={{ p: 2 }}
        >
          The Overall Sky Outlook
        </Typography>
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
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Current Temperature Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Temperature in celcius is <Chip label={temp_c} color="primary" />{" "}
            and the Temperature in Fahrenheit is{" "}
            <Chip label={temp_f} color="primary" />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Current Wind Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Wind speed in kph is <Chip label={wind_kph} color="primary" /> and
            the Wind speed in mph is <Chip label={wind_mph} color="primary" />
            .The wind direction is <Chip label={wind_dir} color="primary" />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Current Atmosphere Pressure Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Atmospheric pressure in mb is{" "}
            <Chip label={pressure_mb} color="primary" /> and the Atmospheric
            pressure in in is <Chip label={pressure_in} color="primary" />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Current Precipitation Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Precipitation in mm is <Chip label={precip_mm} color="primary" />{" "}
            and the Precipitation in in is{" "}
            <Chip label={precip_in} color="primary" />
          </Typography>
        </Stack>
      </Card>
      <Typography fontWeight={700} fontFamily="'Poppins', sans-serif" variant="h4" align="center">
        A 24 hour based breakdown of the Forecast
      </Typography>
      <Breakdown hour={hour} />
    </div>
  );
};

export default ForecastItem;
