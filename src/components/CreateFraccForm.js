import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateFraccForm = () => {
  const [nombreFracc, setNombreFracc] = useState("");
  const [direccion, setDireccion] = useState("");
  const [NumeroCasas, setNumeroCasas] = useState();
  const [tipoFraccionamiento, setTipoFraccionamiento] = useState("");
  const [zonasInteres, setZonasInteres] = useState("");
  const [casasHabitadas, setCasasHabitadas] = useState();

  const navigate = useNavigate(); // Hook para navegar entre páginas o rutas

  const handleCreateFracc = async () => {
    try {
      const response = await axios.post(
        // Post means createUser
        `http://localhost:3001/api/fracc/`,
        {
          nombreFracc,
          direccion,
          NumeroCasas,
          tipoFraccionamiento,
          zonasInteres,
          casasHabitadas,
        }
      );
      alert("Fraccionamiento creado con exito");
      navigate("/fracc-register");
    } catch (error) {
      console.log(error);
      alert(`Error al crear Fraccionamiento ${nombreFracc}`);
    }
  };

  return (
    <Box fullWidth sx={{ p: 4 }}>
      <Box component="text" sx={{ mt: 1 }}>
        <Typography variant="h6">
          Registrar fraccionamiento de usuario
        </Typography>
      </Box>

      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nombreFracc"
          label="Nombre del fraccionamiento"
          name="nombreFracc"
          autocomplete="nombreFracc"
          autoFocus
          value={nombreFracc}
          onChange={(e) => setNombreFracc(e.target.value)}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="direccion"
          label="Direccion"
          name="direccion"
          autocomplete="direccion"
          autoFocus
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="NumeroCasas"
          label="Numero de casas"
          name="NumeroCasas"
          autocomplete="NumeroCasas"
          autoFocus
          value={NumeroCasas}
          onChange={(e) => setNumeroCasas(e.target.value)}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="tipoFraccionamiento"
          label="Tipo de fraccionamiento"
          name="tipoFraccionamiento"
          autocomplete="tipoFraccionamiento"
          autoFocus
          value={tipoFraccionamiento}
          onChange={(e) => setTipoFraccionamiento(e.target.value)}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="zonasInteres"
          label="Zonas de interes"
          name="zonasInteres"
          autocomplete="zonasInteres"
          autoFocus
          value={zonasInteres}
          onChange={(e) => setZonasInteres(e.target.value)}
        />
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          id="casasHabitadas"
          label="Casas habitadas"
          name="casasHabitadas"
          autocomplete="casasHabitadas"
          autoFocus
          value={casasHabitadas}
          onChange={(e) => setCasasHabitadas(e.target.value)}
        />
        <br />
        <Button
          margin="normal"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={handleCreateFracc}
        >
          Registrar Fraccionamiento
        </Button>
      </Box>
    </Box>
  );
};

export default CreateFraccForm;
