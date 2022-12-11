import { useSelector } from "react-redux";
import UserName from "./UserName";
import UserDone from "./UserDone";
import Snow from "./effects/Snow";

const User = () => {
  const state = useSelector(state => state.userReducer);
  const step = state.step;
  const activeUserName = (state.user.edit) ? "group--active1" : "";
  const activeUserDone = (state.user.edit === false) ? "group--active2" : "";

  return (
    <>
      <Snow />
      <div className={`group ${activeUserName} ${activeUserDone}`}>
        {step >= 1 &&<UserName />}
        {step >= 2 && <UserDone />}
      </div>
    </>
    
  );
};

export default User;