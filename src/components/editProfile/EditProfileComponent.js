import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  editProfileGroupName,
  editProfileGroupDate,
  editProfileUserName,
  editProfileUserGift,
  selectRecipient,
} from "../../store/actions/actions";
import db from '../../firebase';
import {
  getDocs,
  query,
  collection,
  where,
} from 'firebase/firestore';
import { Typography , Stack , Button } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const EditProfileComponent = (props) => {
  const state = useSelector(state => state.santa);
  const [users , setUsers] = useState();
  const { groupID } = useParams();
  const { userID } = useParams();
  const dispatch = useDispatch();
  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5,
    },
    button : {
      minWidth: 0,
      width : 35,
      height : 35,
      borderRadius : "50%",
      boxSizing: "border-box",
    },
  };

  useEffect(() => {
    const usersData = async() => {
      const docRef = query(collection(db, "user"), where("groupID", "==", groupID));
      const docs = await getDocs(docRef);
      let allUsers = [];
      
      docs.forEach((doc) => {
        const oneUser = doc.data()
        oneUser.id = doc.id
        allUsers.push(oneUser)
      });
      setUsers(allUsers);
    }
    usersData();
  }, [groupID]);

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
          >Название: {props.group.name}</Typography>
          {props.user.admin === true && <Button
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
          >Бюджет: {props.group.date.budget}₽</Typography>
          {props.user.admin === true && <Button
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
          >Дата: {props.group.date.registration}</Typography>
          {props.user.admin === true && <Button
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
          >Имя: {props.user.data.name}</Typography>
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
          >Почта: {props.user.data.email}</Typography>
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
          >Возраст: {props.user.gift.age}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserGift())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>
        </Stack>
        <Button
          variant="contained"
          sx={{ boxShadow: 3, width : 1, height: 40,  mt : 1.5, }}
          onClick={() => dispatch(selectRecipient({
            group : props.group,
            groupID : groupID,
            user : props.user,
            userID : userID,
            users : users,
          }))}
        >Выбрать получателя</Button>
      </>
    );
  }; 
};

export default EditProfileComponent;