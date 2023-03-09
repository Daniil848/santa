import { useDispatch, useSelector } from "react-redux";
import {
  switchPageUserName,
  switchPageUserGift,
  switchPageDone 
} from "../../store/actions/actions";
import { Button, Stack, } from "@mui/material";

const UserPages = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.santa);
  const styles = {
    pages : {
      minWidth: 0,
      width : 35,
      height : 35,
      borderRadius : "50%",
      boxSizing: "border-box",
    },
    stack : {
      width : 3/4,
      mb : 1.5,
    },
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={styles.stack}
    >
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.user.error === true ? "error" : "primary"}
        onClick={() => dispatch(switchPageUserName())}
      >1</Button>
      <Button
        variant="contained"
        sx={styles.pages}
        color={state.gift.error === true ? "error" : "primary"}
        disabled={state.userStep < 2}
        onClick={() => dispatch(switchPageUserGift())}
      >2</Button>
      {state.userStep >= 3 && <Button
        variant="contained"
        color="success"
        sx={styles.pages}
        onClick={() => dispatch(switchPageDone())}
      >3</Button>}
    </Stack>
  );
};

export default UserPages;