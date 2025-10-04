import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://my-app-server-liard.vercel.app', // ✅ no trailing slash
});

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
