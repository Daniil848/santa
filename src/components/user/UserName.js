import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { groupUserNameError, saveUserName, createUserName } from "../../store/actions/actions";
import GlobalButton from "../navigation/GlobalButton";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

const UserName = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [userNameInput, setUserName] = useState(state.user.name);
  const [userEmailInput, setUserEmail] = useState(state.user.email);
  const { groupID } = useParams();
  let userDB = {
    data : {
      name : userNameInput,
      email : userEmailInput,
    },
    gift : {
      age : state.gift.age,
      gender : state.gift.gender,
      wishes : state.gift.wishes,
    },
    groupID : Number(groupID ? groupID : state.group.id),
    admin : props.admin,
  };
  const addUserName = () => {
    if (userNameInput === "" || userEmailInput === "") {
      dispatch(groupUserNameError(true));
      return;
    }
    if (state.user.id !== null) {
      dispatch(saveUserName({
        userDB,
        userID : state.user.id,
      }));
    } else {
      dispatch(createUserName({
        user : {
          name : userNameInput,
          email : userEmailInput,
        },
      }));
    }
  }
  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5
    },
    textField : {
      width : 1,
      my : 1.5,
    },
  };
  
  if (state.user.edit || state.user.editProfile || state.userStep === 1) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {styles.typography}
        >Участник:</Typography>

        <TextField
          label="Ваше имя(видно участникам)"
          id="groupNameInput"
          type="text"
          value={userNameInput}
          onChange={e => setUserName(e.target.value)}
          error={state.user.error === true}
          variant="outlined"
          size="small"
          sx={styles.textField}
        ></TextField>

        <TextField
          label="Ваш еmail(не видно ни кому)"
          id="groupNameInput"
          type="text"
          value={userEmailInput}
          onChange={e => setUserEmail(e.target.value)}
          error={state.user.error === true}
          variant="outlined"
          size="small"
          sx={styles.textField}
        ></TextField>

        <GlobalButton click={addUserName}/>
      </>
    );
  };
};

export default UserName;