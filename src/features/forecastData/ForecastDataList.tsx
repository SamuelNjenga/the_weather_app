import React, { useState } from "react";

import { Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { FadeLoader } from "react-spinners";

import { useForecastData } from "../../contexts/ForecastData";
import { getForecastData } from "./../../services/APIUtils";
import ForecastItem from "./ForecastItem";

import "./ForecastDataList.css";

const ForecastDataList = () => {
  const {
    forecastData,
    isLoading,
    setForecastData,
    setLoading,
  } = useForecastData();
  const [location, setLocation] = useState<string>("");

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await getForecastData(location);
      const data = res.data;
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="content-container">
      <h3 className="margin-left title-text">
        Get The Forecast Data of a specific location
      </h3>
      <h4 className="margin-left title-text">Enter the location</h4>
      <div className="margin-left title-text">
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          value={location}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setLocation(e.target.value)}
        />
        <Button className="margin-left margin-top" onClick={handleClick}>
          Search
        </Button>
      </div>
      {isLoading ? (
        <div className="loader-style">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="item-style">
          <ForecastItem forecastData={forecastData} />
        </div>
      )}
    </div>
  );
};

export default ForecastDataList;
