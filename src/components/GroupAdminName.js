import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { adminName } from "../store/actions/actions";

const GroupAdminName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [adminNameInput, setAdminName] = useState(state.admin.name);
  const [adminEmailInput, setAdminEmail] = useState(state.admin.email);

  if (state.admin.edit) {
    return (
      <>
        <div className="group_label">Участник(вы - администратор группы).</div>
        <div className="group_form_container">
          <label>Ваше имя(видно участникам):</label>
          <input
            className="group_input"
            placeholder="Василий"
            value={adminNameInput}
            onChange={e => setAdminName(e.target.value)}
          ></input>
        
          {state.admin.error === true && (<div className="error_text">Ваше имя не может быть пустым!</div>)}
        
          <label>Ваш еmail(не видно ни кому):</label>
          <input
            className="group_input"
            placeholder="santa@gmail.com"
            value={adminEmailInput}
            onChange={e => setAdminEmail(e.target.value)}
          ></input>
          {state.admin.error === true && (<div className="error_text">Email не может быть пустым!</div>)}
        </div>
        
        <button
          className="group_button"
          onClick={() => dispatch(adminName({
            admin : {
              name : adminNameInput,
              email : adminEmailInput,
            }
          }))}
        >ОК</button>
      </>
    );
  };
};

export default GroupAdminName;