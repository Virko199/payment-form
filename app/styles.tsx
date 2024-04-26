import { Box, styled } from "@mui/material";

export const Main = styled(Box)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled("h2")`
  font-weight: 700;
  font-size: 40px;
`;

export const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
