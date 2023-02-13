import { useDispatch, useSelector  } from "react-redux";
import { 
  editProfileGroupName,
  editProfileGroupDate,
  editProfileUserName,
  editProfileUserGift,
} from "../../store/actions/actions";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {Button} from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const EditProfileComponent = (props) => {
  const state = useSelector(state => state.adminReducer);
  const dispatch = useDispatch();
  const styles = {
    typography : {
      fontWeight : 500, fontSize: 18, my : 1.5
    },
    button : {
      minWidth: 0, width : 35, height : 35, borderRadius : "50%", boxSizing: "border-box"
    }
  }

  if (state.group.editProfile === false &&
    state.date.editProfile === false && 
    state.user.editProfile === false && 
    state.gift.editProfile === false) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {styles.typography}
        >Группа:</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Название: {props.groupName}</Typography>
          {props.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupName())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Бюджет: {props.budget}₽</Typography>
          {props.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupDate())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Дата: {props.registration}</Typography>
          {props.admin === true && <Button
            variant="contained"
            onClick={() => dispatch(editProfileGroupDate())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>}
        </Stack>

        <Typography
          variant="caption"
          sx = {styles.typography}
        >Ваши данные:</Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Имя: {props.userName}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserName())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Почта: {props.email}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserName())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{width : 1,}}
        >
          <Typography
          variant="caption"
          sx = {styles.typography}
          >Возраст: {props.age}</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(editProfileUserGift())}
            sx={styles.button}
          ><EditRoundedIcon fontSize="small"/></Button>
        </Stack> 
      </>
    );
  }; 
};

export default EditProfileComponent;