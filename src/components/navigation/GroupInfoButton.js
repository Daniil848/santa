import { useDispatch, useSelector } from "react-redux";
import { groupInfoSwitch } from "../../store/actions/actions";
import { Button, Stack } from "@mui/material"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GroupInfoButton = () => {
  const state = useSelector(state => state.adminReducer);
  const dispatch = useDispatch();
  const styles = { 
    icon : {
      height: 40,
      my : 0, p: 0,
      fontSize : 40,
      color : "#f4f7f8"
    },
    button : {
      boxShadow: 3,
      height: "auto",
      mb : 1, p: 0,
      fontSize : 12,
      color : "#f4f7f8",
      display : "flex",
      flexDirection : "column"
    },
    stack : {
      width : "auto",
      alignItems : "center",
    }
  }
  const switchText = () => {
    if (state.groupInfo === false) {
      return("Информация о группе");
    } else if (state.groupInfo === true) {
      return("Скрыть");
    };
  };
  const switchArrow = () => {
    if (state.groupInfo === false) {
      return(<ExpandLessIcon sx={styles.icon}/>);
    } else if (state.groupInfo === true) {
      return(<ExpandMoreIcon sx={styles.icon}/>);
    };
  };

  return (
    <Stack
      className="form--animation1"
      sx={styles.stack}
    >
      <Button
        variant="text"
        sx={styles.button}
        onClick={() => dispatch(groupInfoSwitch())}
      >{switchArrow()}{switchText()}</Button>
    </Stack>
  );
};

export default GroupInfoButton;