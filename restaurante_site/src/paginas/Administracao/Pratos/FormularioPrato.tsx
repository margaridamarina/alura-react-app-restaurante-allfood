import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

const FormularioPrato = () => {
  
  const [nomePrato, setNomePrato] = useState('')
  
  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    }

  return (
    <Box sx={{display:'flex', flexDirection:"column", alignItems:"center"}}>
      <Typography component="h1" variant="h6" >Formulário de Pratos</Typography>
        <Box component="form" sx={{}} onSubmit={aoSubmeterForm}>
          <TextField 
            value={nomePrato}
            onChange={evento => setNomePrato(evento.target.value)} 
            label="Nome do Prato" 
            variant="standard"
            fullWidth
            required
          />
          <Button sx={{marginTop:1}} type="submit" fullWidth variant="outlined">
              Salvar
          </Button>
        </Box>
    </Box>
)}

export default FormularioPrato