import { useDispatch, useSelector } from "react-redux";
import {
  switchPageGroupName,
  switchPageDate,
  switchPageUserName,
  switchPageUserGift,
  switchPageDone,
} from "../../store/actions/actions";
import { Button, Stack, } from "@mui/material";

const GroupPages = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const styles = {
    pages : {
      minWidth: 0,
      width : 35,
      height : 35,
      borderRadius : "50%",
      boxSizing: "border-box",
    },
    stack : {
      width : 1,
      mb : 1.5,
    },
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={styles.stack}
      data-testid="group-pages"
    >
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.group.error === true ? "error" : "primary"}
        onClick={() => dispatch(switchPageGroupName())}
      >1</Button>
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.date.error === true ? "error" : "primary"}
        disabled={state.step < 2}
        onClick={() => dispatch(switchPageDate())}
      >2</Button>
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.user.error === true ? "error" : "primary"}
        disabled={state.userStep < 1}
        onClick={() => dispatch(switchPageUserName())}
      >3</Button>
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.gift.error === true ? "error" : "primary"}
        disabled={state.userStep < 2}
        onClick={() => dispatch(switchPageUserGift())}
      >4</Button>
      {state.userStep >= 3 && <Button
        variant="contained"
        color="success"
        sx={styles.pages}
        onClick={() => dispatch(switchPageDone())}
      >5</Button>}
    </Stack>
  )
}

export default GroupPages;