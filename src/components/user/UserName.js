import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { groupUserNameError, saveUserName, createUserName, } from "../../store/actions/actions";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import GlobalButton from "../globalComponents/GlobalButton";

const UserName = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.santa);
  const { groupID } = useParams();
  const { userID } = useParams();
  const [userName, setUserName] = useState(userID ? props.user.data.name : state.user.name,);
  const [userEmail, setUserEmail] = useState(userID ? props.user.data.email : state.user.email);
  const [error, setError] = useState(null);
  const isValidEmail = (userEmail) => {
    return /\S+@\S+\.\S+/.test(userEmail);
  };
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setUserEmail(event.target.value);
  };

  let userDB = {
    data : {
      name : userName,
      email : userEmail,
    },
    gift : {
      age : userID ? props.user.gift.age : state.gift.age,
      gender : userID ? props.user.gift.gender : state.gift.gender,
      wishes : userID ? props.user.gift.wishes : state.gift.wishes,
    },
    groupID : groupID ? groupID : state.group.id,
    admin : userID ? props.user.admin : props.admin,
    recipientID : userID ? props.user.recipientID : null,
  };
  const addUserName = () => {
    if (userName === "" || userEmail === ""|| error) {
      dispatch(groupUserNameError(true));

      return;
    }
    if (state.user.id !== null || userID) {
      dispatch(saveUserName({
        userDB,
        userID : userID ? userID : state.user.id,
      }));
    } else {
      dispatch(createUserName({
        user : {
          name : userName,
          email : userEmail,
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

  if (state.user.edit || state.user.editProfile) {
    return (
      <div className="form_content">
        <Typography
          variant="caption"
          sx = {styles.typography}
        >Участник:</Typography>

        <TextField
          label="Ваше имя(видно участникам)"
          id="userName"
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          error={state.user.error === true}
          variant="outlined"
          size="small"
          sx={styles.textField}
        ></TextField>

        <TextField
          label="Ваш еmail(не видно ни кому)"
          id="userEmail"
          type="text"
          value={userEmail}
          onChange={handleChange}
          error={error}
          variant="outlined"
          size="small"
          sx={styles.textField}
        ></TextField>
        {error && <Typography sx={{color:"#d32f2f", fontSize: "12px"}}>Неверный E-mail</Typography>}

        <GlobalButton click={addUserName}/>
      </div>
    );
  };
};

export default UserName;