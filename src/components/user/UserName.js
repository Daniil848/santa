import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, userNameError, createUserName } from "../../store/actions/actions";
import { useParams } from "react-router-dom";

const UserName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const [userNameInput, setUserName] = useState(state.user.name);
  const [userEmailInput, setUserEmail] = useState(state.user.email);
  const { groupID } = useParams();
  // let userDB = {
  //   user : {
  //     name : state.user.name,
  //     email : state.user.email,
  //     groupID : groupID,
  //   }
  // };
  const addUserName = () => {
    if (userNameInput === "" || userEmailInput === "") {
      dispatch(userNameError(true));
      return;
    }
    dispatch(createUserName({
      user : {
        name : userNameInput,
        email : userEmailInput,
      },
    }))
  }
  
  if (state.user.edit) {
    return (
      <>
        <div className="group_label">Участник:</div>
        <div className="group_form_container">
          <label>Ваше имя(видно участникам):</label>
          <input
          className="group_input"
          placeholder="Дмитрий"
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