import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupDateError, saveGroupDate} from "../../store/actions/actions";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';

const GroupDate = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.adminReducer);
  const [budgetInput, setBudget] = useState(state.date.budget);
  const [registrationInput, setRegistration] = useState(dayjs());
  const [choosingInput, setChoosing] = useState(dayjs());
  const [exchangeInput, setExchange] = useState(dayjs());
  let groupDB = {
    group : {
      name : state.group.name,
    },
    date : {
      budget : budgetInput,
      registration : dayjs(registrationInput).format("DD/MM/YYYY"),
      choosing : dayjs(choosingInput).format("DD/MM/YYYY"),
      exchange : dayjs(choosingInput).format("DD/MM/YYYY"),
    },
  };
  const addDate = () => {
    if (budgetInput === "" || registrationInput === "" || choosingInput === "" || exchangeInput === "") {
      dispatch(groupDateError(true));
      return;
    }
    dispatch(saveGroupDate({
      groupDB,
      date : {
        budget : budgetInput,
        registration : dayjs(registrationInput).format("DD/MM/YYYY"),
        choosing : dayjs(choosingInput).format("DD/MM/YYYY"),
        exchange : dayjs(choosingInput).format("DD/MM/YYYY"),
      },
      groupID : state.group.id,
    }));
  };

  if (state.date.edit || state.date.editProfile) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Выберите бюджет и дату:</Typography>

        <TextField
          label="Бюджет"
          id="budgetInput"
          type="text"
          value={budgetInput}
          onChange={e => setBudget(e.target.value)}
          error={state.date.error === true}
          variant="outlined"
          size="small"
          sx={{ width : 1, my : 1.5, }}
          InputProps={{
            startAdornment: <InputAdornment position="start">₽</InputAdornment>,
          }}
        ></TextField>
        {state.date.error === true && (<div className="error_text">Бюджет не может быть пустым!</div>)}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack sx={{ width : 1 }}>
            <DatePicker
              label="Регистрация участников до"
              inputFormat="DD/MM/YYYY"
              value={registrationInput}
              onChange={(newValue) => {
                setRegistration(newValue);
              }}
              renderInput={(params) => <TextField 
                {...params}
                error={state.date.error === true}
                variant="outlined"
                size="small"
                sx={{ width : 1, my : 1.5, }}
              />}
            />

            {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}

            <DatePicker
              label="Выбор получателей подарков до"
              inputFormat="DD/MM/YYYY"
              value={choosingInput}
              onChange={(newValue) => {
                setChoosing(newValue);
              }}
              error={state.date.error === true}
              renderInput={(params) => <TextField 
                {...params}
                error={state.date.error === true}
                variant="outlined"
                size="small"
                sx={{ width : 1, my : 1.5, }}
              />}
            />

            {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}

            <DatePicker
              label="Обмен подарками"
              inputFormat="DD/MM/YYYY"
              value={exchangeInput}
              onChange={(newValue) => {
                setExchange(newValue);
              }}
              renderInput={(params) => <TextField 
                {...params}
                error={state.date.error === true}
                variant="outlined"
                size="small"
                sx={{ width : 1, my : 1.5, }}
              />}
            />

            {state.date.error === true && (<div className="error_text">Дата не может быть не назначена!</div>)}
          </Stack>
        </LocalizationProvider>
        
        <Button
          onClick={addDate}
          variant="contained"
          sx={{ boxShadow: 3, width : 1, height: 40, mt : 1.5 }}
        >OK</Button>
      </>
    );
  };
};

export default GroupDate;