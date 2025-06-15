import axios from "axios";
import { use } from "react";
import AuthContext from "./../context/AuthContext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { loginUser, signOutUser } = use(AuthContext);
  const token = loginUser?.accessToken;

  console.log(loginUser);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        signOutUser()
          .then(() => {
            console.log(
              `You are logged out because of an error with ${err.status} code.`
            );
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
