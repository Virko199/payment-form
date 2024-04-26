import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { FormError } from "../styles";

export const ErrorWrap = ({ children, error }: { children: ReactNode; error?: string}) => <Box>
    {children}
    {!!error && <FormError>{error}</FormError>}
</Box> 