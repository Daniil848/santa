import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserDone = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const saveUser = state.saveUser === true;
  let user = {
    user : {
      name : state.user.name,
      email : state.user.email, 
    }
  };

  useEffect(() => {
    const createUser = async(user) => {
      try {
        const res = await fetch("http://localhost:3002/user", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user),
        })

        const response = await res.json()
        dispatch({type : "SET-USER-ID", payload : { id : response.id, }})
        
        if (res.status < 300) {
          return true; 
        } else if (res.status >= 300) {
          return false;
        }
      } catch (err) {
        console.error('Произошла ошибка!', err);
      }
    }
    if (saveUser) {
      createUser(user);
    }
    console.log("create", user);
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