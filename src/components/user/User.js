import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import UserPages from "./UserPages";
import UserDone from "./UserDone";
import UserName from "./UserName";
import YourGift from "./YourGift";
import GroupInfo from "../groupInfo/GroupInfo";
import { userStepSwitch } from "../../store/actions/actions";

const User = () => {
  const state = useSelector(state => state.adminReducer);
  const dispatch = useDispatch();
  const step = state.userStep;
  const formAnimationUserName = (state.user.edit) ? "form--animation1" : "";
  const formAnimationGift = (state.gift.edit) ? "form--animation2" : "";
  const formAnimationDone = (state.user.edit === false && state.gift.edit === false) ? "form--animation3" : "";
  useEffect(() => {
    dispatch(userStepSwitch());
  },[]);
  
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