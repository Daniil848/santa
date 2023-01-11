import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { groupAdminNameError, saveAdminName, createAdminName } from "../../store/actions/actions";

const GroupAdminName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [adminNameInput, setAdminName] = useState(state.admin.name);
  const [adminEmailInput, setAdminEmail] = useState(state.admin.email);
  const update = (state.group.id !== null)
  let groupDB = {
    group : {
      name : state.group.name,
    },
    date : {
      budget : state.date.budget,
      registration : state.date.registration,
      choosing : state.date.choosing,
      exchange : state.date.exchange,
    },
    admin : {
      name : adminNameInput,
      email : adminNameInput,
    },
    gift : {
      age : state.gift.age,
      gender : state.gift.gender,
      wishes : state.gift.wishes,
    }
  };
  const addAdminName = () => {
    if (adminNameInput === "" || adminEmailInput === "") {
      dispatch(groupAdminNameError(true));
      return;
    }
    if (update) {
      dispatch(saveAdminName({
        groupDB,
        groupID : state.group.id,
      }));
    } else {
      dispatch(createAdminName({
        admin : {
          name : adminNameInput,
          email : adminEmailInput,
        },
      }));
    }
  }

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
          onClick={addAdminName}
        >ОК</button>
      </>
    );
  };
};

export default GroupAdminName;