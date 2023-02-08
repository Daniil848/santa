import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDone = () => {
  const state = useSelector(state => state.adminReducer);
  const { groupID } = useParams();
  console.log(groupID)

  if (state.user.edit === false && state.gift.edit === false) {
    return (
      <>
        <div className="group_label">
          Готово!!!
        </div>
        <a
        className="main_info"
        href={`/group/${groupID}/user/${state.user.id}`}>
        http://localhost:3000/group/{groupID}/user/{state.user.id}</a>
      </>
    );
  }

};

export default UserDone;