import { GroupContext } from "../contexts/reduser";
import { useContext } from "react";
import GroupUserName from "./GroupUserName";
import UserDone from "./UserDone";
import Snow from "./effects/Snow";

const GroupUser = () => {
  const [state] = useContext(GroupContext);
  const step = state.step;
  const activeUserName = (state.user.edit) ? "group--active1" : "";
  const activeUserDone = (state.user.edit === false) ? "group--active2" : "";

  return (
    <>
      <Snow />
      <div className={`group ${activeUserName} ${activeUserDone}`}>
        {step >= 1 &&< GroupUserName />}
        {step >= 2 && <UserDone />}
      </div>
    </>
    
  );
};

export default GroupUser;