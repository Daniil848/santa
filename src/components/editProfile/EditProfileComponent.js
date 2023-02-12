import { useState, useEffect } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  editProfileGroupName,
  editProfileGroupDate,
  editProfileUserName,
  editProfileUserGift,
} from "../../store/actions/actions";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {Button} from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const EditProfileComponent = () => {
  const state = useSelector(state => state.adminReducer);
  const dispatch = useDispatch();
  const [group , setGroup] = useState();
  const [user , setUser] = useState();
  const { groupID } = useParams();
  const { userID } = useParams(); 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3002/group/${groupID}`);
      const data = await response.json();
      setGroup(data);
      console.log(data);
    };
    fetchData();
  },[groupID]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3002/user/${userID}`);
      const data = await response.json();
      setUser(data);
      console.log(data);
    };
    fetchData();
  },[userID]);
  const styles = {
    typography : {
      fontWeight : 500, fontSize: 18, my : 1.5
    },
    button : {
      minWidth: 0, width : 35, height : 35, borderRadius : "50%", boxSizing: "border-box"
    }
  }

  console.log(group);
  console.log(user);

  if (group && user) {
    if (state.group.editProfile === false &&
      state.date.editProfile === false && 
      state.user.editProfile === false && 
      state.gift.editProfile === false) {
      return (
        <>
          <Typography
            variant="caption"
            sx = {styles.typography}
          >Группа:</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Название: {group.group.name}</Typography>
            {user.admin && <Button
              variant="contained"
              onClick={() => dispatch(editProfileGroupName())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Бюджет: {group.date.budget}₽</Typography>
            {user.admin && <Button
              variant="contained"
              onClick={() => dispatch(editProfileGroupDate())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Дата: {group.date.registration}</Typography>
            {user.admin && <Button
              variant="contained"
              onClick={() => dispatch(editProfileGroupDate())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>}
          </Stack>

          <Typography
            variant="caption"
            sx = {styles.typography}
          >Ваши данные:</Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Имя: {user.user.name}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch(editProfileUserName())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Почта: {user.user.email}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch(editProfileUserName())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{width : 1,}}
          >
            <Typography
            variant="caption"
            sx = {styles.typography}
            >Возраст: {user.gift.age}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch(editProfileUserGift())}
              sx={styles.button}
            ><EditRoundedIcon fontSize="small"/></Button>
          </Stack> 
        </>
      );
    }; 
  } else {
    return null;
  };
};

export default EditProfileComponent;