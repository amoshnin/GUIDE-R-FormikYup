// PLUGINS IMPORTS //
import React, { FC } from "react"
import { TextField, TextFieldProps } from "@material-ui/core"
import { useField } from "formik"
import { at } from "lodash"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  errorText?: string
  defaultProps: TextFieldProps
}

const InputField: FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props
  const [field, meta] = useField(props.defaultProps.name)

  const renderHelperText = () => {
    const [touched, error] = at(meta, "touched", "error")
    if (touched && error) {
      return error
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={renderHelperText()}
      {...field}
      {...restProps.defaultProps}
    />
  )
}

export default InputField
