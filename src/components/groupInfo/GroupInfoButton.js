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
      minHeight : 0,
      height: "auto",
      my : 0,
      p: 0,
      fontSize : 35,
      color : "#f4f7f8"
    },
    button : {
      boxShadow: 3,
      height: "auto",
      mb : state.groupInfo ? "10px" : 0,
      py : "5px",
      fontSize : 12,
      color : "#f4f7f8",
      display : "flex",
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

  return (
    <Stack
      className="form--animation1"
      sx={styles.stack}
    >
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => dispatch(groupInfoSwitch())}
        endIcon={state.groupInfo ? <ExpandMoreIcon sx={styles.icon}/> : <ExpandLessIcon sx={styles.icon}/>}
      >{switchText()}</Button>
    </Stack>
  );
};

export default GroupInfoButton;