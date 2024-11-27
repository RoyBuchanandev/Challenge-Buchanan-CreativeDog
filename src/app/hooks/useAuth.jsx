import { useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://jellyfish-app-mpahs.ondigitalocean.app/api/auth/local",
        {
          identifier: email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { jwt, user } = response.data;

      localStorage.setItem("authToken", jwt);
      setUser(user);

      return { jwt, user };
    } catch (err) {
      console.error("Error en el inicio de sesión:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user };
};

export default useAuth;
