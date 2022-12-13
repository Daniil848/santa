import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGroupName } from "../store/actions/actions";

const GroupName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [groupNameInput, setGroupName] = useState(state.group.name);

  if (state.group.edit) {
    return (  
      <>
        <div className="group_label">Введите название группы:</div>
        <input
          name="groupNameInput"
          type="text"
          className="group_input"
          placeholder="Обмен подарками 2023"
          value={groupNameInput}
          onChange={e => setGroupName(e.target.value)}
        ></input>
        {state.group.error === true &&(<div className="error_text">Название группы не может быть пустым!</div>)}
        <button
          className="group_button"
          onClick={() => dispatch(addGroupName({group : {name: groupNameInput,}}))}
        >OK</button>
      </>
    );
  };
};

export default GroupName;