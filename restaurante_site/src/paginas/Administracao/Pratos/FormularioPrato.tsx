import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import http from "../../../http"
import ITag from "../../../interfaces/ITag"

const FormularioPrato = () => {
  
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tag, setTag] = useState('')
  
  const [tags, setTags] = useState<ITag[]>([])
  
  useEffect(()=>{
    http.get<{tags:ITag[]}>('tags/')
      .then(resposta => setTags(resposta.data.tags))
  }, [])

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
            margin="dense"
          />
          <TextField 
            value={descricao}
            onChange={evento => setDescricao(evento.target.value)} 
            label="Descrição" 
            variant="standard"
            fullWidth
            required
            margin="dense"
          />
          <FormControl margin="dense" fullWidth>
            <InputLabel id="select-tag">Tag</InputLabel>
            <Select 
              labelId="select-tag"
              value={tag}
              onChange={evento=>setTag(evento.target.value)}
              >
                {tags.map(tag=>
                  <MenuItem key={tag.id} value={tag.id}>
                    {tag.value}
                  </MenuItem>)}
            </Select>
          </FormControl>
          <Button sx={{marginTop:1}} type="submit" fullWidth variant="outlined">
              Salvar
          </Button>
        </Box>
    </Box>
)}

export default FormularioPrato