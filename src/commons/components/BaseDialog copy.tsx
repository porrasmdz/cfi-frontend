import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
export default function BaseDialogCopy({
  open,
  handleClose,
  children,
  title = "Alerta",
}) {
  //   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <React.Fragment>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Stack direction={"row"}>
          <DialogTitle>{title}</DialogTitle>
          <Button variant="text" onClick={handleClose}>
            {" "}
            <CloseIcon />
          </Button>
        </Stack>

        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
