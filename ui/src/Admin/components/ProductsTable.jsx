import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts, getAllProducts } from "../../state/Product/Action";
import { Avatar, Button } from "@mui/material";

function ProductsTable() {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      minPrice: 0,
      maxPrice: 100000,
      sizes: [],
      minDiscount: [],
      sort: "priceLow",
      pageNumber: 1, // Use the pageNumber from the URL
      pageSize: 40, // Adjusted pageSize for more products per page
      stock: "inStock",
    };
    const fetchProducts = async () => {
      try {
        console.log("Data In the Admin Products Ui", data)
        await dispatch(findProducts(data));
        await dispatch(getAllProducts())
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
    console.log("Products in the Admin Db", product.adminProducts)
  }, [dispatch,  product.deleteProduct, ]);
  const handleDeleteProduct=(productId)=>{
    dispatch(deleteProduct(productId))
  }
  return (
    <div className="text-center mt-10 bg-[#777E8B] p-7">
      <h2 className="font-bold mb-3 text-3xl text-black"> Products</h2>
      <TableContainer component={Paper} sx={{bgcolor:'#777E8B', color:'black'}}>
        <Table sx={{ minWidth: 650, height:'full'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color:"black"}}>Product</TableCell>
              <TableCell sx={{color:"black"}} align="left">Brand</TableCell>
              <TableCell sx={{color:"black"}} align="left">Price</TableCell>
              <TableCell sx={{color:"black"}} align="left">Category</TableCell>
              <TableCell sx={{color:"black"}} align="left">Quantity</TableCell>
              <TableCell sx={{color:"black"}} align="left">Delete Product</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product?.adminProducts?.allProducts?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" sx={{color:"black"}} scope="row">
                  <Avatar src={item.imageUrl}></Avatar>{" "}
                </TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.brand}</TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.price}</TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.category.name}</TableCell>
                <TableCell sx={{color:"black"}} align="left">{item.quantity}</TableCell>
                <TableCell sx={{color:"white"}} align="left"><Button onClick={()=>handleDeleteProduct(item._id)} variant="contained" color="error">delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductsTable;
