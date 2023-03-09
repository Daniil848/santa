import { useSelector } from "react-redux";
import GroupName from "./GroupName";
import GroupDate from "./GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";
import GroupDone from "./GroupDone";
import GroupPages from "./GroupPages";
import GroupInfo from "../groupInfo/GroupInfo";

const Group = () => {
  const state = useSelector(state => state.santa);
  const step = state.step;
  const userStep = state.userStep;
  const formAnimationGroupName = (state.group.edit) ? "form--animation1" : "";
  const formAnimationGroupDate = (state.date.edit) ? "form--animation2" : "";
  const formAnimationUserName = (state.user.edit) ? "form--animation3" : "";
  const formAnimationGift = (state.gift.edit) ? "form--animation4" : "";
  const formAnimationDone = (
    state.group.edit === false &&
    state.date.edit === false &&
    state.user.edit === false && 
    state.gift.edit === false
  ) ? "form--animation5" : "";

  return (
    <div data-testid="group">
      <GroupInfo />
      <div className={
        `form
        ${formAnimationGroupName}
        ${formAnimationGroupDate}
        ${formAnimationUserName}
        ${formAnimationGift}
        ${formAnimationDone}`
      }>
        <GroupPages />
        {step >= 1 && <GroupName />}
        {step >= 2 && <GroupDate />}
        {userStep >= 1 && <UserName admin={true}/>}
        {userStep >= 2 && <YourGift admin={true}/>}
        {userStep >= 3 && <GroupDone />}
      </div>
    </div>
  );
};

export default Group;