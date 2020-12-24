// PLUGINS IMPORTS //
import React, { FC } from "react"
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core"
import { useField } from "formik"
import { at } from "lodash"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  data: Array<{ label: string; value: string }>
  label: string
  name: string
  fullWidth?: boolean
}

const SelectField: FC<PropsType> = (props) => {
  const { label, data, ...rest } = props
  const [field, meta] = useField(props)
  const { value: selectedValue } = field
  const [touched, error] = at(meta, "touched", "error")
  const isError = touched && error && true
  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ""}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {renderHelperText()}
    </FormControl>
  )
}

export default SelectField
