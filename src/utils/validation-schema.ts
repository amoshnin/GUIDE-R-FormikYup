import * as yup from "yup"
import moment from "moment"
import formModel from "./form-model"
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = formModel

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
export default [
  yup.object().shape({
    [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: yup
      .string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val) => val && val.length === 5
      ),
    [country.name]: yup
      .string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),
  yup.object().shape({
    [nameOnCard.name]: yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: yup
      .string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: yup
      .string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test("expDate", expiryDate.invalidErrorMsg, (val) => {
        if (val) {
          const startDate = new Date()
          const endDate = new Date(2050, 12, 31)
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate)
          }
          return false
        }
        return false
      }),
    [cvv.name]: yup
      .string()
      .required(`${cvv.requiredErrorMsg}`)
      .test("len", `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3),
  }),
]
