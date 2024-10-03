import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminOrders } from "../../state/Admin/AdminOrders/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, AvatarGroup } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

function Orderstable() {
  //Update status
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const { adminOrdersStore } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllAdminOrders());
  }, []);
  console.log("All Orders In the Ui", adminOrdersStore);

  const handleDeleteOrder = async () => {};

  return (
    <div className="text-center mt-10 bg-[#777E8B] p-10">
      <h2 className="font-bold mb-3 text-3xl text-white"> Orders </h2>
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#777E8B", color: "white" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Orders</TableCell>
              <TableCell sx={{ color: "white" }}>OrderId</TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Total Items
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Price
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Order Status
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Update Status
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Delete order
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrdersStore?.adminOrders?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "white" }} align="left">
                  <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                    {item.orderItems.map((orderitem, index) => (
                      <Avatar key={index} src={orderitem.product?.imageUrl} />
                    ))}
                  </AvatarGroup>
                </TableCell>

                <TableCell component="th" sx={{ color: "white" }} scope="row">
                  {item._id}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {item.totalItems}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {item.totalPrice}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {item.orderStatus}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    variant="contained"
                    sx={{ bgcolor: "#6A89CC" }}
                  >
                    status
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>confirm</MenuItem>
                    <MenuItem onClick={handleClose}>ship</MenuItem>
                    <MenuItem onClick={handleClose}>place</MenuItem>
                    <MenuItem onClick={handleClose}>deliver</MenuItem>
                  </Menu>
                </TableCell>

                <TableCell sx={{ color: "white" }} align="left">
                  <Button
                    onClick={() => handleDeleteOrder(item._id)}
                    variant="contained"
                    color="error"
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orderstable;
