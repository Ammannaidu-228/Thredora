import { Avatar, Box, Grid2, Rating } from "@mui/material"

function ProductReviewCard() {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
            <Box>
                <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155fd"}}>S</Avatar>
            </Box>
        </Grid2>
        <Grid2 item xs={9}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg">Sudheer</p>
                    <p className="opacity-70"> April 1, 2022</p>
                </div>
            </div>
            <Rating value={3.5} precision={0.5} name="half-rating" readOnly></Rating>
            <p>`I recently bought this t-shirt, and its quickly become one of my favorites! The material is soft and breathable, making it perfect for everyday wear. The fit is true to size and comfortable, without being too loose or tight. I also love how vibrant the color stays even after several washes. Plus, it pairs well with both jeans and shorts. Highly recommend it if you are looking for a quality basic tee!</p>
        </Grid2>

      </Grid2>
    </div>
  )
}

export default ProductReviewCard
