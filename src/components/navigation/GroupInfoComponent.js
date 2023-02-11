import { useSelector } from "react-redux";
import { Typography, Stack} from "@mui/material";

const GroupInfoComponent = () => {
  const state = useSelector(state => state.adminReducer);
  const formAnimationGroupInfo = (state.groupInfo) ? "form--animation1" : "";
  const styles = {
    fontWeight : 500,
    fontSize: 16,
    my : 1,
  }

  if (state.groupInfo) {
    return (
      <div className={`form ${formAnimationGroupInfo}`}>
        <Typography
        variant="caption"
        sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Группа:</Typography>
        <Stack sx={{width : 1}}>
          {state.group.name !== "" && <Typography
            variant="caption"
            sx = {styles}
          >Название: {state.group.name}</Typography>}
          {state.date.budget !== "" && <Typography
            variant="caption"
            sx = {styles}
          >Бюджет: {state.date.budget}₽</Typography>}
          {state.date.exchange !== "" && <Typography
            variant="caption"
            sx = {styles}
          >Обмен подарками: {state.date.exchange}</Typography>}
        </Stack>
        <Typography
        variant="caption"
        sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Ваши данные:</Typography>
        <Stack sx={{width : 1}}>
          {state.user.name !== "" && <Typography
            variant="caption"
            sx = {styles}
          >Имя: {state.user.name}</Typography>}
          {state.user.email !== "" && <Typography
            variant="caption"
            sx = {styles}
          >Почта: {state.user.email}</Typography>}
          {state.gift.wiches === "" && <Typography
            variant="caption"
            sx = {{ fontWeight : 500, fontSize: 16, my : 1}}
          >Пожеланияя к подарку: {state.gift.wiches}</Typography>}
        </Stack>
      </div>
    );
  };
};

export default GroupInfoComponent;