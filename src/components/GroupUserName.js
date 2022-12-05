import { GroupContext } from "../contexts/reduser";
import { useContext, useState } from "react";

const GroupUserName = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [userNameInput, setUserName] = useState(state.user.name);
  const [userEmailInput, setUserEmail] = useState(state.user.email);
  
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
          onClick={() => dispatch({type : "USER-NAME", payload : {
            user : {
              name : userNameInput,
              email : userEmailInput,
            }
          }})}
        >ОК</button>
      </>
    );
  };  
};

export default GroupUserName;