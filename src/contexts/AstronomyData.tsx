import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAstronomyData } from "../services/APIUtils";

type AstronomyData = {
  [key: string]: any;
};

type AstronomyContextProps = {
  astronomyData: AstronomyData;
  setAstronomyData: React.Dispatch<React.SetStateAction<AstronomyData>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AstronomyDataContext = createContext<AstronomyContextProps>({
  astronomyData: {},
  setAstronomyData: () => {},
  isLoading: true,
  setLoading: () => {},
});

export function useAstronomyData() {
  return useContext(AstronomyDataContext);
}

type AstronomyProps = {
  children: ReactNode;
};

let defaultLocation = "Nairobi";

export const AstronomyDataProvider = (props: AstronomyProps) => {
  const [astronomyData, setAstronomyData] = useState<AstronomyData>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchAstronomyData = async (location: string): Promise<void> => {
    try {
      const res = await getAstronomyData(location);
      const data = res.data;
      setAstronomyData(data);
    } catch (error) {
      console.error("Error fetching astronomy data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAstronomyData(defaultLocation);
  }, []);

  return (
    <AstronomyDataContext.Provider
      value={{
        astronomyData,
        setAstronomyData,
        isLoading,
        setLoading,
      }}
    >
      {props.children}
    </AstronomyDataContext.Provider>
  );
};
