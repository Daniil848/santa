import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import GlobalLink from "../globalComponents/GlobalLink";

const UserDone = () => {
  const state = useSelector(state => state.santa);
  const { groupID } = useParams();
  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5
    }
  }
  console.log(state.user.id)
  if (state.user.edit === false && state.gift.edit === false) {
    return (
      <div className="form_content">
        <Typography
          variant="caption"
          sx = {styles.typography}
        >Готово!!!</Typography>

        <Typography
          variant="caption"
          sx = {styles.typography}
        >Ссылка на ваш профиль:</Typography>

        <GlobalLink value={`http://localhost:3000/group/${groupID}/user/${state.user.id}`}></GlobalLink>
        
        <Button
          href={`#/group/${groupID}/user/${state.user.id}`}
          target="_blank"
          rel="noreferrer"
          className="link"
          variant="contained"
        >Перейти в профиль</Button>
      </div>
    );
  }

};

export default UserDone;