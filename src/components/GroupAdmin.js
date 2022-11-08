import { GroupContext } from "../contexts/reduser";
import { useContext, useState } from "react";
import Steps from "./Pages";

const GroupAdmin = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [adminNameInput, setAdminName] = useState(state.admin.name);
  const [adminEmailInput, setAdminEmail] = useState(state.admin.email);

  if (state.admin.edit) {
    return (
      <div className="group">
        < Steps/>
        <div 
        className="group_label"
        >Участник(вы - администратор группы).</div>
        <div className="group_form">
  
          <div className="group_form_container">
            <label>Ваше имя(видно участникам):</label>
            <input
              className="group_input"
              placeholder="Василий"
              value={adminNameInput}
              onChange={e => setAdminName(e.target.value)}
            ></input>
          </div>
          {state.admin.error === true && (<div className="error_text">Ваше имя не может быть пустым!</div>)}
          
  
          <div className="group_form_container">
            <label>Ваш еmail(не видно ни кому):</label>
            <input
              className="group_input"
              placeholder="santa@gmail.com"
              value={adminEmailInput}
              onChange={e => setAdminEmail(e.target.value)}
            ></input>
          </div>
          {state.admin.error === true && (<div className="error_text">Email не может быть пустым!</div>)}
  
          <button
            className="group_button"
            onClick={() => dispatch({type : "GROUP-ADMIN", payload : {
              admin : {
                name : adminNameInput,
                email : adminEmailInput,
              }
            }})}
          >ОК</button>
        </div>
      </div>  
    );
  };
};

export default GroupAdmin;