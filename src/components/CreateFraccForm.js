import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Swal from "sweetalert2";

const CreateFraccForm = () => {
  const [nombreFracc, setNombreFracc] = useState("");
  const [direccion, setDireccion] = useState("");
  const [NumeroCasas, setNumeroCasas] = useState();
  const [tipoFraccionamiento, setTipoFraccionamiento] = useState("");
  const [zonasInteres, setZonasInteres] = useState("");
  const [casasHabitadas, setCasasHabitadas] = useState();
  const [logo, setLogo] = useState(null); // null para permitir que em caso de no subir imagen, no se envie nada

  const navigate = useNavigate(); // Hook para navegar entre páginas o rutas

  const handleCreateFracc = async () => {
    if (
      !nombreFracc ||
      !direccion ||
      !NumeroCasas ||
      !tipoFraccionamiento ||
      !zonasInteres ||
      !casasHabitadas
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, llena todos los campos requeridos",
      });
      return;
    }

    if (isNaN(NumeroCasas) || isNaN(casasHabitadas)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, llena los campos de Numero de casas y Casas habitadas con numeros",
      });
    }

    if (parseInt(NumeroCasas) < parseInt(casasHabitadas)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El numero de casas habitadas no puede ser mayor al numero de casas",
      });
      return;
    }

    const formData = new FormData();
    formData.append("nombreFracc", nombreFracc);
    formData.append("direccion", direccion);
    formData.append("NumeroCasas", NumeroCasas);
    formData.append("tipoFraccionamiento", tipoFraccionamiento);
    formData.append("zonasInteres", zonasInteres);
    formData.append("casasHabitadas", casasHabitadas);
    if (logo) {
      formData.append("logo", logo);
    }

    try {
      const response = await axios.post(
        // Post means createUser
        `http://localhost:3001/api/fracc/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      Swal.fire({
        icon: "success",
        title: "Fraccionamiento creado",
        text: `Fraccionamiento ${nombreFracc} creado con exito`,
      });

      alert("Fraccionamiento creado con exito");
      navigate("/fracc-register");
    } catch (error) {
      console.log(error);
      // alert(`Error al crear Fraccionamiento ${nombreFracc}`);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error al crear Fraccionamiento ${nombreFracc}`,
      });
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

        <input
          type="file"
          accept="image/"
          onChange={(e) => setLogo(e.target.files[0])}
          style={{ marginTop: "1rem, marginBottom: 1rem" }}
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
