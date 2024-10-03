import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../state/Auth/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CustomersTable() {

  const dispatch = useDispatch();
  const { auth } = useSelector((store)=> store)

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="text-center mt-10 bg-[#777E8B] p-10" >
      <h2 className="font-bold mb-3 text-3xl text-black"> Users</h2>
      <TableContainer component={Paper} sx={{bgcolor:'#777E8B', color:'white'}}>
        <Table sx={{ minWidth: 650, }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color:"black"}}>UserId</TableCell>
              <TableCell sx={{color:"black"}} align="left">Name</TableCell>
              <TableCell sx={{color:"black"}} align="left">Email</TableCell>
              <TableCell sx={{color:"black"}} align="left">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auth?.users?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" sx={{color:"black"}} scope="row">
                 {item._id}
                </TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.firstName} {item.lastName}</TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.email}</TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default CustomersTable
