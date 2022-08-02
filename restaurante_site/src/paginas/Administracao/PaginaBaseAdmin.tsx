import { AppBar, Box, Button, Typography, Container, Toolbar, Link, Paper } from "@mui/material"
import { Fragment} from "react"
import {Link as RouterLink, Outlet} from 'react-router-dom'
const PaginaBaseAdmin = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">
              Administração
            </Typography>
            <Box sx={{display:'flex', flexGrow:1}}>
              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{my:2, color:'white'}}>
                  Restaurantes
                </Button>
              </Link>
              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{my:2, color:'white'}}>
                  Novo Restaurante
                </Button>
              </Link>
              <Link component={RouterLink} to="/admin/pratos">
                <Button sx={{my:2, color:'white'}}>
                  Pratos
                </Button>
              </Link>
              <Link component={RouterLink} to="/admin/pratos">
                <Button sx={{my:2, color:'white'}}>
                  Novo prato
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth="lg" sx={{mt:1}}>
          <Paper sx={{p:2}}>
            <Outlet/>
          </Paper>
        </Container>
      </Box>
    </Fragment>
   
  )
}

export default PaginaBaseAdmin