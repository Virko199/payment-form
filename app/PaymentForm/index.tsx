import { payerAccounts } from "@/app/mockData";
import { useForm } from "react-hook-form";
import { StyledButton, StyledForm } from "./styles";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { setValidationSchema } from "./shema";
import { ErrorWrap } from "./components/ErrorWrap";
import { SubmitFormData } from "./types";
import { Payer } from "../types";
import { useEffect } from "react";

export const PaymentForm = ({ payer }: { payer: Payer }) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    register,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      amount: 0,
      payeeAccount: "",
      purpose: "",
      payerAccount: payer.iban,
    },
    resolver: yupResolver(setValidationSchema(payer.amount)),
  });
  useEffect(() => {
    reset();
    setValue("amount", 0);
    setValue("payeeAccount", "");
    setValue("purpose", "");
    setValue("payerAccount", payer.iban);
  }, [payer, setValue, reset]);

  const onSubmitHandler = (data: SubmitFormData) => {
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
      <ErrorWrap error={errors.amount?.message}>
        <TextField
          fullWidth
          type="text"
          label="Amount*"
          variant="outlined"
          error={!!errors.amount}
          {...register("amount")}
        />
      </ErrorWrap>
      <ErrorWrap error={errors.payeeAccount?.message}>
        <TextField
          fullWidth
          type="text"
          label="Payee account*"
          variant="outlined"
          error={!!errors.payeeAccount}
          {...register("payeeAccount")}
        />
      </ErrorWrap>
      <ErrorWrap error={errors.purpose?.message}>
        <TextField
          fullWidth
          type="text"
          label="Purpose*"
          variant="outlined"
          error={!!errors.purpose}
          {...register("purpose")}
        />
      </ErrorWrap>
      <ErrorWrap error={errors.payerAccount?.message}>
        <TextField
          fullWidth
          type="text"
          label="Payer account*"
          variant="outlined"
          error={!!errors.payerAccount}
          {...register("payerAccount")}
        />
      </ErrorWrap>
      <StyledButton variant="contained" type="submit">
        Pay
      </StyledButton>
    </StyledForm>
  );
};
