import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDone = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const { groupID } = useParams();
  const saveUser = state.saveUser === true;
  let user = {
    user : {
      name : state.user.name,
      email : state.user.email,
      groupID : groupID,
    }
  };

  useEffect(() => {
    const createUser = async(user) => {
      try {
        const response = await fetch("http://localhost:3002/user", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user),
        })

        const data = await response.json()
        dispatch({type : "SET_USER_ID", payload : { id : data.id, }})
        
        if (response.status < 300) {
          return true; 
        } else if (response.status >= 300) {
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
      }
    }
    if (saveUser) {
      createUser(user);
    }
    console.log("create-user", user);
  },[saveUser]);

  if (state.user.edit === false) {
    return (
      <div className="group_label">
        Готово!!!
      </div>
    );
  }
};

export default UserDone;