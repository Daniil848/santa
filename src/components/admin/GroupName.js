import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupNameError, saveGroupName, createGroupName } from "../../store/actions/actions";

const GroupName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [groupNameInput, setGroupName] = useState(state.group.name);
  let groupDB = {
    group : {
      name : groupNameInput,
    },
    date : {
      budget : state.date.budget,
      registration : state.date.registration,
      choosing : state.date.choosing,
      exchange : state.date.exchange,
    },
  };
  const addName = () => {
    if (groupNameInput === "") {
      dispatch(groupNameError(true));
      return;
    }
    if (state.group.id !== null) {
      dispatch(saveGroupName({
        groupDB,
        groupID : state.group.id,
      }));
    } else { 
      dispatch(createGroupName({
        group : {
          name: groupNameInput,
        },
      }))
    }
    
  };

  if (state.group.edit) {
    return (  
      <>
        <label htmlFor="groupNameInput" className="group_label">Введите название группы:</label>
        <input
          id="groupNameInput "
          type="text"
          className="group_input"
          placeholder="Обмен подарками 2023"
          value={groupNameInput}
          onChange={e => setGroupName(e.target.value)}
        ></input>
        {state.group.error === true &&(<div className="error_text">Название группы не может быть пустым!</div>)}
        <button
          className="group_button"
          onClick={addName}
        >OK</button>
      </>
    );
  };
};

export default GroupName;