import { GroupContext } from "../contexts/reduser";
import { useContext, useEffect } from "react";

const UserDone = () => {
  const [state, dispatch] = useContext(GroupContext);
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