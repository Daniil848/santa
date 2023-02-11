import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const GroupDone = () => {
  const state = useSelector(state => state.adminReducer);

  if (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Ссылка на вашу группу:</Typography>

        <a
          href={`/group/${state.group.id}`}>
        http://localhost:3000/group/{state.group.id}</a>

        <Typography
          variant="caption"
          textAlign="center"
          sx = {{ fontWeight : 500, fontSize: 15, my : 1.5}}
        >(Отправьте ее друзьям что-бы обмениваться подарками)</Typography>
        
        <Typography
          variant="caption"
          textAlign="center"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Ссылка на редактирование вашего профиля:</Typography>
        <a
          href={`/group/${state.group.id}/user/${state.user.id}`}>
        http://localhost:3000/group/{state.group.id}/user/{state.user.id}</a>
      </>
    );
  };
};

export default GroupDone;