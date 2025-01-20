import classes from './User.module.scss';
import { Avatar, Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../../store/redux';
import { User as TUser}  from '../../components/types/User';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function User() {
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.usersReducer);
  const navigate = useNavigate();

  const user = users.find((user: TUser) => user.id == id );

  const { firstName, photo, lastName, middleName, department, post, salary, birthDate } = user

  return (
    <Box>
      <div className={classes.header}>
        <div className={classes.userInfo}>
          <h2>{lastName} {firstName} {middleName}</h2>
          <p>Департамент: {department}</p>
          <p>Должность: {post}</p>
          <p>Зарплата: {salary} Р/мес</p>
          <p>Дата рождения: {new Date(birthDate).toLocaleDateString()}</p>
        </div>
        <Avatar alt={firstName} src={photo} sx={{ width: 240, height: 240, fontSize: 80}}/>
      </div>
      <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={()=> navigate('/')}>
        Назад
      </Button>
    </Box>
  )
}