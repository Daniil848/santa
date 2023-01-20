import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const GroupDone = () => {
  const state = useSelector(state => state.adminReducer);

  if (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) {
    return (
      <>
        <label className="group_label">Ваша группа "{state.group.name}" готова!!!</label> 
        <label className="group_label">Регистрация участников до:<br></br> {state.date.registration}</label>
        <label className="group_label">Бюджет на подарок состовялет: {state.date.budget}₽</label>
        <label className="group_label">Ссылка на вашу группу:</label> 
        <Link
          className="user_link" 
          to={`/group/${state.group.id}`}>
        http://localhost:3000/group/{state.group.id}</Link>
        <label className="group_label">(Отправьте ее друзьям что-бы обмениваться подарками)</label>
      </>
    );
  };
};

export default GroupDone;