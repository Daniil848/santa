import {  useSelector } from "react-redux";

const UserDone = () => {
  const state = useSelector(state => state.userReducer);

  if (state.user.edit === false && state.gift.edit === false) {
    return (
      <div className="group_label">
        Готово!!!
      </div>
    );
  }
};

export default UserDone;