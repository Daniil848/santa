import { useSelector } from "react-redux";
import UserPages from "./UserPages";
import UserDone from "./UserDone";
import UserName from "../admin/UserName";
import YourGift from "../admin/YourGift";

const User = () => {
  const state = useSelector(state => state.adminReducer);
  const step = state.userStep;
  const groupActiveUser = (state.user.edit) ? "group--animation3" : "";
  const groupActiveGift = (state.gift.edit) ? "group--animation4" : "";
  const groupActiveDone = (state.user.edit === false && state.gift.edit === false) ? "group--animation5" : "";

  return (
    <>
      <div className={`group ${groupActiveUser} ${groupActiveGift} ${groupActiveDone}`}>
        <UserPages />
        {step >= 1 && <UserName admin={false}/>}
        {step >= 2 && <YourGift admin={false}/>}
        {step >= 3 && <UserDone />}
      </div>
    </>
  );
};

export default User;