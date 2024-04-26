import { Button, styled } from "@mui/material";

export const StyledForm = styled("form")`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormError = styled("span")`
  color: #d32f2f;
  font-weight: 400;
  font-size: 12px;
  margin-top: 3px;
`;

export const StyledButton = styled(Button)`
  margin: 30px 0;
`;
