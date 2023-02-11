import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupNameError, saveGroupName, createGroupName } from "../../store/actions/actions";
import GlobalButton from "../navigation/GlobalButton";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

  if (state.group.edit || state.group.editProfile) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Введите название группы:</Typography>

        <TextField
          label="Обмен подарками 2023"
          id="groupNameInput"
          type="text"
          value={groupNameInput}
          onChange={e => setGroupName(e.target.value)}
          error={state.group.error === true}
          variant="outlined"
          size="small"
          sx={{ width : 1, my : 1.5, }}
        ></TextField>

        <GlobalButton click={addName}/>
      </>
    );
  };
};

export default GroupName;