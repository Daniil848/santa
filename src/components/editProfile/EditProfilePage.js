import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  editProfileGroupName,
  editProfileGroupDate,
  editProfileUserName,
  editProfileUserGift,
} from "../../store/actions/actions";

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
        <p className="group_label">Группа:</p>
        <div className="edit_info">
          <span className="main_info">Название: {group.group.name}</span>
          {user.admin && <button
            onClick={() => dispatch(editProfileGroupName())}
            className="edit_button"
          ></button>}
        </div>
        <div className="edit_info">
          <span className="main_info">Бюджет: {group.date.budget}₽</span>
          {user.admin && <button
            onClick={() => dispatch(editProfileGroupDate())}
            className="edit_button"
          ></button>}
        </div>
        <div className="edit_info">
          <span className="main_info">Дата: {group.date.registration}</span>
          {user.admin && <button
            onClick={() => dispatch(editProfileGroupDate())}
            className="edit_button"
          ></button>}
        </div>
        <p className="group_label">Ваши данные:</p>
        <div className="edit_info">
          <span className="main_info">{user.user.name}</span>
          <button
            onClick={() => dispatch(editProfileUserName())}
            className="edit_button"
          ></button>
        </div>
        <div className="edit_info">
          <span className="main_info">{user.gift.age}</span>
          <button
            onClick={() => dispatch(editProfileUserGift())}
            className="edit_button"
          ></button>
        </div> 
      </>
    )
  } else {
    return null;
  };
};

export default EditProfilePage;