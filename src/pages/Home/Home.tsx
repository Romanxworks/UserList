import { Box, Button, TextField } from "@mui/material";
// import classes from './Home.module.scss';
import ListEmployees from "../../components/ListEmployees/ListEmployees";

export default function Home() {
  return (
    <Box component="section">
      <h1>Список сотрудников</h1>
      <div className="">
        <TextField fullWidth id="outlined-basic" label="Поиск" variant="outlined" sx={{ marginBottom: 3 }}/>
        <Button variant="contained" sx={{ marginBottom: 5 }}>Найти</Button>
      </div>
      <ListEmployees />
    </Box>
  )
}