import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, userGiftError } from "../../store/actions/actions";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const YourGift = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [ageInput, setAge] = useState(state.gift.age);
  const [wishesArea, setWishes] = useState(state.gift.wishes);
  const [gender, setGender] = useState(state.gift.gender);
  const { groupID } = useParams();
  let userDB = {
    user : {
      name : state.user.name,
      email : state.user.email,
    },
    gift : {
      age : ageInput,
      gender : gender,
      wishes : wishesArea,
    },
    groupID : Number(groupID ? groupID : state.group.id),
    admin : props.admin,
  };
  const addGift = () => {
    if (ageInput === "" || gender === "") {
      dispatch(userGiftError(true));
      return;
    }
    dispatch(saveUser({
      userDB,
      gift : {
        age : ageInput,
        gender : gender,
        wishes : wishesArea,
      },
      userID : state.user.id,
    }));
  };

  if (state.gift.edit || state.gift.editProfile) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Мой подарок:</Typography>

        <TextField
          label="Ваш возраст"
          id="groupNameInput"
          type="text"
          value={ageInput}
          onChange={e => setAge(e.target.value)}
          error={state.gift.error === true}
          variant="outlined"
          size="small"
          sx={{ width : 1, my : 1.5 }}
        ></TextField>
      
        {state.gift.error === true && (<div className="error_text">Укажите возраст!</div>)}
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={2}
          sx={{ width : 1, mt : 1.5, }}
        >
          <FormControl error={state.gift.error === true}>
            <FormLabel id="demo-radio-buttons-group-label">Ваш пол</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                label="Мужсокй"
                value="Мужсокй" 
                control={<Radio
                  id="boy"
                  size="small"
                  value={gender}
                  onChange={e => setGender(e.target.id)}
                  checked={gender === "boy"}
                />}
              />
              <FormControlLabel
                label="Женский"
                value="Женский"
                control={<Radio
                  id="girl"
                  size="small"
                  value={gender} 
                  onChange={e => setGender(e.target.id)} 
                  checked={gender === "girl"}
                />}
              />
              <FormControlLabel
                label="Не важно"
                value="Не важно"
                control={<Radio
                  id="neverMind"
                  size="small"
                  value={gender}
                  onChange={e => setGender(e.target.id)}
                  checked={gender === "neverMind"}
                />}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        {state.gift.error === true && (<div className="error_text">Выберите пол!</div>)}

        <TextField
          placeholder="Пожелания к подарку(не обязательно)"
          value={wishesArea}
          onChange={e => setWishes(e.target.value)}
          variant="outlined"
          sx={{ width : 1, my : 1.5, borderRadius : 5,}}
          multiline
          minRows={3}
        />

        <Button
          onClick={addGift}
          variant="contained"
          sx={{ boxShadow: 3, width : 1, height: 40, mt : 1.5, }}
        >OK</Button>
      </>
    );
  };
};

export default YourGift;