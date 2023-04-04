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
  doc,
  getDoc,
} from 'firebase/firestore';
import { Typography , Stack , Button } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import GroupName from "../group/GroupName";
import GroupDate from "../group/GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";

const EditProfile = () => {
  const state = useSelector(state => state.santa);
  const dispatch = useDispatch();
  const [group , setGroup] = useState();
  const [user , setUser] = useState();
  const [users , setUsers] = useState();
  const isRecipient = state.isRecipient === true;
  console.log(isRecipient);
  const { groupID } = useParams();
  const { userID } = useParams();
  
  const formAnimationGroupName = (state.group.editProfile) ? "form--animation1" : "";
  const formAnimationGroupDate = (state.date.editProfile) ? "form--animation2" : "";
  const formAnimationUserName = (state.user.editProfile) ? "form--animation3" : "";
  const formAnimationGift = (state.gift.editProfile) ? "form--animation4" : "";
  const formAnimationEditPage = (
    state.group.editProfile === false &&
    state.date.editProfile === false && 
    state.user.editProfile === false && 
    state.gift.editProfile === false
  ) ? "form--animation5" : "";

  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5,
    },
    editButton : {
      minWidth: 0,
      width : 35,
      height : 35,
      borderRadius : "50%",
      boxSizing: "border-box",
    },
    recipientButton : {
      boxShadow: 3,
      width : 1,
      height: 40,
      mt : 1.5,
      fontWeight : "bold"
    }
  };
  
  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, 'group', groupID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGroup(docSnap.data());
      } else {
        return null;
      } 
    };
    
    getData(); 
  },[groupID,]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, 'user', userID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        return null;
      } 
    };
    getData();
  },[userID]);

  useEffect(() => {
    const usersData = async () => {
      const docRef = query(collection(db, "user"), where("groupID", "==", groupID));
      const docs = await getDocs(docRef);
      let allUsers = [];
      
      docs.forEach((doc) => {
        const oneUser = doc.data();
        oneUser.id = doc.id
        allUsers.push(oneUser);
      });
      setUsers(allUsers);
    }
    usersData();
    console.log(1);
  }, [groupID, isRecipient,]);

  const handleChange = () => {
    dispatch(selectRecipient({
      group : group,
      groupID : groupID,
      user : user,
      userID : userID,
      users : users,
    }));

  };

  const findRecipient = () => {
    if (state.recipientID !== null || isRecipient) {
      const userRecipient = users.find(userRecipient => userRecipient.id === state.recipientID);
      return `Получатель : ${userRecipient.data.name}`;
    } else {
      return null;
    }
  };



  if (!group && !user) return null;
  if (state.group.editProfile === false &&
    state.date.editProfile === false && 
    state.user.editProfile === false && 
    state.gift.editProfile === false) {
    return (
      <div className={`form ${formAnimationEditPage}`}>
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
          >Название: {group.name}</Typography>
          {user.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupName())}
            sx={styles.editButton}
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
          {user.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupDate())}
            sx={styles.editButton}
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
          {user.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupDate())}
            sx={styles.editButton}
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
          >Имя: {user.data.name}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserName())}
            sx={styles.editButton}
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
          >Почта: {user.data.email}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserName())}
            sx={styles.editButton}
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
            sx={styles.editButton}
          ><EditRoundedIcon fontSize="small"/></Button>
        </Stack>

        {<Button
          variant="contained"
          sx={styles.recipientButton}
          disabled={isRecipient}
          onClick={handleChange}
        >{isRecipient ? findRecipient() : "Выбрать получателя"}</Button>}
      </div>
    );
  } else {
    return (
      <div className={
        `form
        ${formAnimationGroupName}
        ${formAnimationGroupDate}
        ${formAnimationUserName}
        ${formAnimationGift}`}
      >
        {state.group.editProfile && <GroupName group={group}/>}
        {state.date.editProfile && <GroupDate group={group}/>}
        {state.user.editProfile && <UserName user={user}/>}
        {state.gift.editProfile && <YourGift user={user}/>}
      </div>
    )
  };
};

export default EditProfile;