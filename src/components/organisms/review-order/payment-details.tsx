// PLUGINS IMPORTS //
import React, { FC } from "react"
import { Typography, Grid } from "@material-ui/core"
import { FormikValues } from "formik"
import moment from "moment"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { useReviewOrderStyles } from "./styles"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  formValues: FormikValues
}

const PaymentDetails: FC<PropsType> = (props) => {
  const {
    formValues: { nameOnCard, cardNumber, expiryDate },
  } = props

  const styles = useReviewOrderStyles()
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={styles.title}>
        Payment details
      </Typography>
      <Grid container>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Visa</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card holder</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{nameOnCard}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{cardNumber}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Expiry Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {moment(expiryDate).format("MM/YY")}
            </Typography>
          </Grid>
        </>
      </Grid>
    </Grid>
  )
}

export default PaymentDetails
