import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

const apiClient = new APIClient("quarters");

const useComs = () => {
  return useQuery({
    queryKey: ["quarters"],
    queryFn: apiClient.getSampleData,
    staleTime: 100000, //ms // 100sec
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useComs;
