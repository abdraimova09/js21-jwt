import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "https://backend-for-fs-makers.herokuapp.com/api/v1";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      // console.log(res);
      navigate("/register-success");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }
  return (
    <authContext.Provider value={{ user, error, loading, handleRegister }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
