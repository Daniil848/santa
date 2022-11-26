import { useContext, useState } from "react";
import { GroupContext } from "../contexts/reduser";

const GroupName = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [groupNameInput, setGroupName] = useState(state.group.name);

  // const handleKeyPress = (event) => {
  //   if(event.charCode === 13){
  //     saveGroup();
  //   } 
  // }

  // const saveGroup = () => {
    
  // }
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
          // onKeyPress={handleKeyPress}
        ></input>
        {state.group.error === true &&(<div className="error_text">Название группы не может быть пустым!</div>)}
        <button
          className="group_button"
          onClick={() => dispatch({type : "GROUP-NAME", payload : {
            group : {
              name: groupNameInput,
            }
          }})}
        >OK</button>
      </>
    );
  };
};

export default GroupName;