import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getRealtimeData } from "../services/APIUtils";

type RealtimeData = {
  [key: string]: any;
};

type RealtimeContextProps = {
  realtimeData: RealtimeData;
  setRealtimeData: React.Dispatch<React.SetStateAction<RealtimeData>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RealtimeDataContext = createContext<RealtimeContextProps>({
  realtimeData: {},
  setRealtimeData: () => {},
  isLoading: true,
  setLoading: () => {},
});

export function useRealtimeData() {
  return useContext(RealtimeDataContext);
}

type RealtimeProps = {
  children: ReactNode;
};

let defaultLocation = "Nairobi";

export const RealtimeDataProvider = (props: RealtimeProps) => {
  const [realtimeData, setRealtimeData] = useState<RealtimeData>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchRealtimeData = async (location:string): Promise<void> => {
    try {
      const res = await getRealtimeData(location);
      const data = res.data;
      setRealtimeData(data);
    } catch (error) {
      console.error("Error fetching realtime data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRealtimeData(defaultLocation);
  }, []);

  return (
    <RealtimeDataContext.Provider
      value={{
        realtimeData,
        setRealtimeData,
        isLoading,
        setLoading,
      }}
    >
      {props.children}
    </RealtimeDataContext.Provider>
  );
};
