import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { TableHead } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/redux';
import { User } from '../types/User';

export default function ListEmployees() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const {users} = useAppSelector((state) => state.usersReducer);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="custom pagination table">
        <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="right">Департамент</TableCell>
              <TableCell align="right">Должность</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((row: User) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Link to={`user/${row.id}`}>{row.lastName} {row.firstName} {row.middleName}</Link>
              </TableCell>
              <TableCell style={{ width: 400}} align="right">
                {row.department}
              </TableCell>
              <TableCell style={{ width: 200 }} align="right">
                {row.post}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Все', value: -1 }]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={'Показывать на странице'}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'Строк на странице',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

  )
}