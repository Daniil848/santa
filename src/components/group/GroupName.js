import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { groupNameError, saveGroupName, createGroupName } from "../../store/actions/actions";
import GlobalButton from "../constants/GlobalButton";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const GroupName = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const { groupID } = useParams();
  const [groupNameInput, setGroupName] = useState(groupID ? props.group.name : state.group.name); 
  let groupDB = {
    name : groupNameInput,
    date : {
      budget : groupID ? props.group.date.budget : state.date.budget,
      registration : groupID ? props.group.date.registration : state.date.registration,
      choosing : groupID ? props.group.date.choosing : state.date.choosing,
      exchange : groupID ? props.group.date.exchange : state.date.exchange,
    },
  };
  const addName = () => {
    if (groupNameInput === "") {
      dispatch(groupNameError(true));
      return;
    }
    if (state.group.id !== null || groupID) {
      dispatch(saveGroupName({
        groupDB,
        groupID : groupID ? groupID : state.group.id,
      }));
    } else { 
      dispatch(createGroupName({
        group : {
          name: groupNameInput,
        },
      }));
    };
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