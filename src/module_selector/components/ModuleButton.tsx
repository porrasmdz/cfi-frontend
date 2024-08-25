import { Paper, Stack, Link, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 128,
  width: 128,
  lineHeight: "60px",
}));
export const ModuleButton = ({ link, name }) => {
  return (
    <Link href={link} underline="none">
      <Item>
        <Stack>
          <Typography>{name}</Typography>
        </Stack>
      </Item>
    </Link>
  );
};
