import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getForecastData } from './../services/APIUtils';

type ForecastData = {
  [key: string]: any;
};

type ForecastContextProps = {
  forecastData: ForecastData;
  setForecastData: React.Dispatch<React.SetStateAction<ForecastData>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ForecastDataContext = createContext<ForecastContextProps>({
  forecastData: {},
  setForecastData: () => {},
  isLoading: true,
  setLoading: () => {},
});

export function useForecastData() {
  return useContext(ForecastDataContext);
}

type ForecastProps = {
  children: ReactNode;
};

let defaultLocation = "Nairobi";

export const ForecastDataProvider = (props: ForecastProps) => {
  const [forecastData, setForecastData] = useState<ForecastData>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchForecastData = async (location: string): Promise<void> => {
    try {
      const res = await getForecastData(location);
      const data = res.data;
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecastData(defaultLocation);
  }, []);

  return (
    <ForecastDataContext.Provider
      value={{
        forecastData,
        setForecastData,
        isLoading,
        setLoading,
      }}
    >
      {props.children}
    </ForecastDataContext.Provider>
  );
};
