import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { useReviewOrderStyles } from "./styles"

function ShippingDetails(props) {
  const {
    formValues: { firstName, lastName, address1 },
  } = props
  const styles = useReviewOrderStyles()

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={styles.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  )
}

export default ShippingDetails
