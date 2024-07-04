import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook para navegar entre páginas o rutas

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/authenticate",
        { username, password }
      );
      alert("Login exitoso");
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Error al iniciar sesión");
    }
  };
  return (
    <Box fullWidth sx={{}}>
      <Box component="text" sx={{}}>
        <Typography variant="h6">Inicio de sesión</Typography>
      </Box>
      <Box component="form" sx={{}}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre de usuario"
          name="username"
          autocomplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Password"
          name="password"
          autocomplete="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          margin="normal"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        {/* <Typography variant="body2" color="textSecondary">
          ¿No tienes cuenta? <a href="./register">Regístrate 1</a>
        </Typography> */}
        <Typography variant="body2" color="textSecondary">
          ¿No tienes cuenta?<span> </span>
          <RouterLink to="/register">Regístrate aquí</RouterLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
