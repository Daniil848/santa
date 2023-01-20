import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { groupUserNameError, saveUserName, createUserName } from "../../store/actions/actions";

const UserName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [userNameInput, setUserName] = useState(state.user.name);
  const [userEmailInput, setUserEmail] = useState(state.user.email);
  let userDB = {
    user : {
      name : userNameInput,
      email : userEmailInput,
    },
    gift : {
      age : state.gift.age,
      gender : state.gift.gender,
      wishes : state.gift.wishes,
    }
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

  if (state.user.edit) {
    return (
      <>
        <div className="group_label">Участник(вы - администратор группы).</div>
        <div className="group_form_container">
          <label>Ваше имя(видно участникам):</label>
          <input
            className="group_input"
            placeholder="Василий"
            value={userNameInput}
            onChange={e => setUserName(e.target.value)}
          ></input>
        
          {state.user.error === true && (<div className="error_text">Ваше имя не может быть пустым!</div>)}
        
          <label>Ваш еmail(не видно ни кому):</label>
          <input
            className="group_input"
            placeholder="santa@gmail.com"
            value={userEmailInput}
            onChange={e => setUserEmail(e.target.value)}
          ></input>
          {state.user.error === true && (<div className="error_text">Email не может быть пустым!</div>)}
        </div>
        
        <button
          className="group_button"
          onClick={addUserName}
        >ОК</button>
      </>
    );
  };
};

export default UserName;