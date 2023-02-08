import { useSelector } from "react-redux";

const GroupDone = () => {
  const state = useSelector(state => state.adminReducer);

  if (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) {
    return (
      <>
        <p className="group_info">Ваша группа <span className="main_info">"{state.group.name}"</span> готова!!!</p>
        <p className="group_info">Регистрация участников до:<br></br> <span className="main_info">{state.date.registration}</span></p>
        <p className="group_info">Бюджет на подарок составялет: <span className="main_info">{state.date.budget}₽</span></p>
        <p className="group_info">Ссылка на вашу группу:</p>
        <a
          className="main_info"
          href={`/group/${state.group.id}`}>
        http://localhost:3000/group/{state.group.id}</a>
        <p className="group_info">(Отправьте ее друзьям что-бы обмениваться подарками)</p>
        <p className="group_info">Ссылка на редактирование вашего профиля:</p>
        <a
          className="main_info"
          href={`/group/${state.group.id}/user/${state.user.id}`}>
        http://localhost:3000/group/{state.group.id}/user/{state.user.id}</a>
      </>
    );
  };
};

export default GroupDone;