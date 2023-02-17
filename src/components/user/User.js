import { useSelector } from "react-redux";
import UserPages from "./UserPages";
import UserDone from "./UserDone";
import UserName from "./UserName";
import YourGift from "./YourGift";
import GroupInfo from "../groupInfo/GroupInfo";

const User = () => {
  const state = useSelector(state => state.adminReducer);
  const step = state.userStep;
  const formAnimationUserName = (state.user.edit) ? "form--animation1" : "";
  const formAnimationGift = (state.gift.edit) ? "form--animation2" : "";
  const formAnimationDone = (state.user.edit === false && state.gift.edit === false) ? "form--animation3" : "";

  return (
    <>
      <GroupInfo/>
      <div className={`form ${formAnimationUserName} ${formAnimationGift} ${formAnimationDone}`}>
        <UserPages />
        {step >= 1 && <UserName admin={false}/>}
        {step >= 2 && <YourGift admin={false}/>}
        {step >= 3 && <UserDone />}
      </div>
      
    </>
  );
};

export default User;