import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegar entre páginas o rutas

  const role = "user";

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        // Post means createUser
        `http://localhost:3001/api/users/`,
        { username, password, role }
      );
      alert(`Registro exitoso`);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(`Error al registrar usuario`);
    }
  };

  return (
    <Box fullWidth sx={{ p: 4 }}>
      <Box component="text" sx={{ mt: 1 }}>
        <Typography variant="h6">Registro de usuario</Typography>
      </Box>

      <Box component="form" sx={{ mt: 1 }}>
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
        {/* <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="passwordVerify"
          label="passwordVerify"
          name="passwordVerify"
          autocomplete="passwordVerify"
          autoFocus
          value={passwordVerify}
          onChange={(e) => setPasswordVerify(e.target.value)}
        /> */}
        <br />
        <Button
          margin="normal"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
        >
          Crear nuevo usuario
        </Button>
        <Typography variant="body2" color="textSecondary">
          ¿Ya tienes cuenta?<span> </span>
          <RouterLink to="/login">Accede aquí</RouterLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
