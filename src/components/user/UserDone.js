import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const UserDone = () => {
  const state = useSelector(state => state.adminReducer);
  const { groupID } = useParams();
  console.log(groupID)

  if (state.user.edit === false && state.gift.edit === false) {
    return (
      <>
        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5}}
        >Готово!!!</Typography>

        <Typography
          variant="caption"
          sx = {{ fontWeight : 500, fontSize: 18, my : 1.5, textAlign : "center"}}
        >Ссылка на редактирование вашего профиля:</Typography>

        <a
        className="main_info"
        href={`/group/${groupID}/user/${state.user.id}`}>
        http://localhost:3000/group/{groupID}/user/{state.user.id}</a>
      </>
    );
  }

};

export default UserDone;