import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  editProfileGroupName,
  editProfileGroupDate,
  editProfileUserName,
  editProfileUserGift,
} from "../../store/actions/actions";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const EditProfilePage = () => {
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

  console.log(group);
  console.log(user);

  if (group && user) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Группа:</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Название: {group.group.name}</Typography>

          {user.admin && <button
            onClick={() => dispatch(editProfileGroupName())}
            className="edit_button"
          ></button>}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Бюджет: {group.date.budget}₽</Typography>

          {user.admin && <button
            onClick={() => dispatch(editProfileGroupDate())}
            className="edit_button"
          ></button>}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Дата: {group.date.registration}</Typography>

          {user.admin && <button
            onClick={() => dispatch(editProfileGroupDate())}
            className="edit_button"
          ></button>}
        </Stack>

        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Ваши данные:</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Имя: {user.user.name}</Typography>

          <button
            onClick={() => dispatch(editProfileUserName())}
            className="edit_button"
          ></button>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Почта: {user.user.email}</Typography>

          <button
            onClick={() => dispatch(editProfileUserName())}
            className="edit_button"
          ></button>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width : 1,}}>
          <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
          >Возраст: {user.gift.age}</Typography>
          <button
            onClick={() => dispatch(editProfileUserGift())}
            className="edit_button"
          ></button>
        </Stack> 
      </>
    )
  } else {
    return null;
  };
};

export default EditProfilePage;