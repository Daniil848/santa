import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, userGiftError } from "../../store/actions/actions";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import GlobalButton from "../constants/GlobalButton";

const YourGift = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const { groupID } = useParams();
  const { userID } = useParams();
  const [ageInput, setAge] = useState(userID ? props.user.gift.age : state.gift.age);
  const [wishesArea, setWishes] = useState(userID ? props.user.gift.gender : state.gift.gender);
  const [gender, setGender] = useState(userID ? props.user.gift.wishes : state.gift.wishes);
  let userDB = {
    data : {
      name : userID ? props.user.data.name : state.user.name,
      email : userID ? props.user.data.email : state.user.email,
    },
    gift : {
      age : ageInput,
      gender : gender,
      wishes : wishesArea,
    },
    groupID : groupID ? groupID : state.group.id,
    admin : userID ? props.user.admin : props.admin,
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
      userID : userID ? userID : state.user.id,
    }));
  };
  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5
    },
    textField : {
      width : 1,
      my : 1.5,
    },
    stack : {
      width : 1,
      mt : 1.5,
    },
  };

  if (state.gift.edit || state.gift.editProfile) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {styles.typography}
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
          sx={styles.textField}
        ></TextField>
      
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={2}
          sx={styles.stack}
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

        <TextField
          placeholder="Пожелания к подарку(не обязательно)"
          value={wishesArea}
          onChange={e => setWishes(e.target.value)}
          variant="outlined"
          sx={styles.textField}
          multiline
          minRows={3}
        />

        <GlobalButton click={addGift}/>
      </>
    );
  };
};

export default YourGift;