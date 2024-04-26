import axios from "axios";
import * as yup from "yup";

export const setValidationSchema = (amount: number) =>
  yup.object({
    amount: yup.number().min(0.01).max(amount).required("Required field"),
    payeeAccount: yup
      .string()
      .required("Required field")
      .test(
        "is-valid-iban",
        "Invalid IBAN address",
        async (payeeAccount) => {
          try {
            if (payeeAccount.length >= 20) {
              const response = await axios.get(
                `https://matavi.eu/validate?iban=${payeeAccount}`
              );
              return response.data.valid;
            }
          } catch (error) {
            return false;
          }
        }
      ),
    purpose: yup.string().min(3).max(135).required("Required field"),
    payerAccount: yup.string().max(70).required("Required field"),
  });
