import { Box, TextField } from "@mui/material";
// import classes from './Home.module.scss';
import ListEmployees from "../../components/ListEmployees/ListEmployees";

export default function Home() {
  return (
    <Box component="section">
      <h1>Список сотрудников</h1>
      <TextField id="outlined-basic" label="Поиск" variant="outlined" />
      <ListEmployees />
    </Box>
  )
}