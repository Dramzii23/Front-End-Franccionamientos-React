import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  DialogTitle,
  Dialog,
  Paper,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Person as PersonIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

// const openDialog = () => {
//   const [open, setOpen] = useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
// };

const GetUsers = () => {
  const [usuarios, setUsuarios] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [itemIndex, setitemIndex] = useState("");
  const [userId, setuserId] = useState("");
  const navigate = useNavigate();

  const handleClickOpen = (
    createUserDiag,
    deleteUserDiag,
    userIndex,
    userId
  ) => {
    if (createUserDiag) setOpenDialog(true);
    if (deleteUserDiag) setDeleteDialog(true);
    setitemIndex(userIndex);
    setuserId(userId);
    // setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setDeleteDialog(false);
  };

  try {
    useEffect(() => {
      const traerUsuarios = async () => {
        const respuesta = await axios.get("http://localhost:3001/api/users/");
        // const data = await respuesta.json({
        //   //   username: data.username,
        // });

        if (Array.isArray(respuesta.data.usuarios)) {
          //   alert("Data: " + respuesta.data.usuarios);

          setUsuarios(respuesta.data.usuarios);
        } else {
          console.log("Expected an array but got:", typeof respuesta);
          setUsuarios([]); // Set to empty array or handle accordingly
        }
        console.log(respuesta);
      };
      traerUsuarios();
    }, []);
  } catch (error) {
    console.log(error);
    alert("Error al traer usuarios");
  }
  async function borrarUsuario(itemID) {
    try {
      const respuesta = await axios.delete(
        "http://localhost:3001/api/users/" + itemID
      );
      // setUsuarios((currentUsers) =>
      //   currentUsers.filter((user) => user.id !== itemId)
      // );

      // setUsuarios(respuesta.data.usuarios);
      handleClose(); // Close the dialog after deletion
      alert("Usuario borrado exitosamente");

      navigate(0);

      // Handle success (e.g., notify user, refresh list)
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error (e.g., show error message to user)
    }
  }
  return (
    <Box>
      <Dialog id="createUserDialog" open={openDialog} onClose={handleClose}>
        {/* <DialogTitle>Create User</DialogTitle> */}
        <DialogContent sx={{}}>
          <RegisterForm navigateTo="/getusers" />
        </DialogContent>
        <DialogActions sx={{ pb: 4, pr: 4 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          {/* <Button variant="outlined" onClick={handleClose}>
            Create
          </Button> */}
        </DialogActions>
      </Dialog>
      <Dialog id="deletUserDialog" open={deleteDialog} onClose={handleClose}>
        <DialogTitle>Borrar usuario</DialogTitle>
        <DialogContent sx={{}}>
          ¿Estas seguro que deseas borrar al usuario:
          {/* // Aqui va el nombre del usuario a borrar */}
          <Typography variant="h6" sx={{ my: 1, fontWeight: "bold" }}>
            {"ID: " +
              userId +
              " " +
              (usuarios[itemIndex]
                ? usuarios[itemIndex].username + " " + usuarios[itemIndex]._id
                : "Unknown")}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ pb: 4, pr: 4 }}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={
              //   () =>
              () => borrarUsuario(userId)
              // handleClose
            }
          >
            Borrar
          </Button>
        </DialogActions>
      </Dialog>
      <Paper>
        <Box fullWidth sx={{ p: 4 }}>
          <Box component="text" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ my: 1, fontWeight: "bold" }}>
              Usuarios registrados
            </Typography>
            <List variant="body1" id="usersList">
              {usuarios.map((user, index) => (
                <ListItem key={index} id={index + 1}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: blue[100],
                          color: blue[600],
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.username}
                      secondary={user.role}
                    />

                    <List>
                      <ListItem>
                        <ListItemButton
                          sx={{ borderRadius: "50%", p: 0, m: 1 }}
                        >
                          <Avatar>
                            <EditIcon />
                          </Avatar>
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: "50%", p: 0, m: 1 }}
                          onClick={() =>
                            handleClickOpen(
                              false,
                              true,
                              index,
                              usuarios[index]._id
                            )
                          }
                        >
                          <Avatar>
                            <DeleteIcon />
                          </Avatar>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItemButton onClick={() => handleClickOpen(true, false)}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={
                        {
                          //   bgcolor: blue[100],
                          //   color: blue[600],
                        }
                      }
                    >
                      <AddIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Create User" />
                </ListItem>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default GetUsers;
