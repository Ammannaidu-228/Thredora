
import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { insertProduct } from "../../state/Product/Action";


const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProduct = () => {
  
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title:'',
    color: "",
    discountPrice: "",
    price: "",
    discountPercent: "",
    sizes: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });
const dispatch=useDispatch();
const userToken=localStorage.getItem("userToken")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

 /* const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  }; */

  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(insertProduct({data:productData, userToken}))
    console.log("Data Sending to Action",productData);
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <div className="createProductContainer bg-[#777E8B]  p-10">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", color:'white' }}
        className="py-10 text-center "
      >
        Add Product To DataBase
      </Typography>
      <form
      
        onSubmit={handleSubmit}
        className="createProductContainer text-white min-h-screen"
      >
        <Grid container className="text-white"  spacing={2}>
          <Grid className="text-white"  sx={{color:'white'}} item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel
              sx={{color:'white'}}
              >Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
                sx={{
                  '& .MuiSelect-select': {
                    color: 'white', // Set the text color of the Select component
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Set border color for Select
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                  },
                }}
                
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel               sx={{color:'white'}}
              >Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
                sx={{
                  '& .MuiSelect-select': {
                    color: 'white', // Set the text color of the Select component
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Set border color for Select
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                  },
                }}
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel               sx={{color:'white'}}
              >Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
                sx={{
                  '& .MuiSelect-select': {
                    color: 'white', // Set the text color of the Select component
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Set border color for Select
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                  },
                }}
              >
                <MenuItem value="top">Tops</MenuItem>
                <MenuItem value="women_dress">Dress</MenuItem>
                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                <MenuItem value="saree">Saree</MenuItem>
                <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
              InputLabelProps={{
                style: { color: 'white' } // Label color
              }}
              InputProps={{
                style: { color: 'white' } // Text color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color when not focused
                },
                '& .Mui-focused': {
                  color: 'white', // Label color when focused
                },
              }}
            />
          </Grid>
          {productData?.sizes?.map((size, index) => (
            <Grid container item spacing={3} key={index} >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                  InputLabelProps={{
                    style: { color: 'white' } // Label color
                  }}
                  InputProps={{
                    style: { color: 'white' } // Text color
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color when hovered
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color when not focused
                    },
                    '& .Mui-focused': {
                      color: 'white', // Label color when focused
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                  InputLabelProps={{
                    style: { color: 'white' } // Label color
                  }}
                  InputProps={{
                    style: { color: 'white' } // Text color
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Border color when hovered
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Label color when not focused
                    },
                    '& .Mui-focused': {
                      color: 'white', // Label color when focused
                    },
                  }}
                />
              </Grid> </Grid>
            
          ))}
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
              fullWidth
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProduct;
