import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import { withStyles} from "@material-ui/core/styles";


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default ColorButton;