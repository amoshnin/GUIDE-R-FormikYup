// PLUGINS IMPORTS //
import React, { FC } from "react"
import { FormikValues } from "formik"

// COMPONENTS IMPORTS //
import { InputField, DatePickerField } from "components/atoms/form-fields"
import { Grid, Typography } from "@material-ui/core"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  formField: FormikValues
}

const PaymentForm: FC<PropsType> = (props) => {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv },
  } = props

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: nameOnCard.name,
              label: nameOnCard.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: cardNumber.name,
              label: cardNumber.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={["year", "month"]}
            minDate={new Date()}
            maxDate={new Date("2050/12/31")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            defaultProps={{
              name: cvv.name,
              label: cvv.label,
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}
export default PaymentForm
