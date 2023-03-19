import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const GroupDone = () => {
  const state = useSelector(state => state.santa);
  const styles = {
    typography : {
      fontWeight : 500,
      fontSize: 18,
      my : 1.5,
    }
  }

  if (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) {
    return (
      <div className="form_content">
        <Typography
          variant="caption"
          sx = {styles.typography}
        >Ссылка на вашу группу:</Typography>

        <a
          href={`/group/${state.group.id}`}
          target="_blank"
          rel="noreferrer">
        http://localhost:3000/group/{state.group.id}</a>

        <Typography
          variant="caption"
          textAlign="center"
          sx={styles.typography}
        >(Отправьте ее друзьям что-бы обмениваться подарками)</Typography>
        
        <Typography
          variant="caption"
          textAlign="center"
          sx={styles.typography}
        >Ссылка на ваш профиль:</Typography>
        <a
          href={`/group/${state.group.id}/user/${state.user.id}`}
          target="_blank"
          rel="noreferrer">
        http://localhost:3000/group/{state.group.id}/user/{state.user.id}</a>
      </div>
    );
  };
};

export default GroupDone;