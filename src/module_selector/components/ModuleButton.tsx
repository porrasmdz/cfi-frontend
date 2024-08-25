import {
  Paper,
  Stack,
  Link,
  Typography,
  styled,
  SvgIcon,
  createSvgIcon,
  Box,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(2),
  display: "block",
  textAlign: "center",
  height: 128,
  width: 128,
  [theme.breakpoints.up("md")]: {
    height: 192,
    width: 192,
  },
  color: theme.palette.text.secondary,
}));
const IconStack = styled(Stack)(({ theme }) => ({
  display:"flex",
  height: 64,
  widht: 64,
  [theme.breakpoints.up("md")]: {
    height: 128,
    widht: 128,
  },
}));
//@ts-ignore
export const ModuleButton = ({ link, name, icon }) => {
  return (
    <Item >
      <Link
        href={link}
        underline="none"
        sx={{
          display: "block",
          height: "100%",
          width: "100%",
          padding: (theme) => theme.spacing(2),
        }}
      >
        <Stack>
          <IconStack>
            <img src={icon} alt={`${name} Menu Icon`} height={"100%"} width={"100%"} />
          </IconStack>
          <Typography
           
            fontWeight={500}
            variant="h5"
          >
            {name}
          </Typography>
        </Stack>
      </Link>
    </Item>
  );
};
