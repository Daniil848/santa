import { useSelector } from "react-redux";
import GroupName from "./GroupName";
import GroupDate from "./GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";
import GroupDone from "./GroupDone";
import GroupPages from "./GroupPages";

const Group = () => {
  const state = useSelector(state => state.adminReducer);
  const step = state.step;
  const groupActiveName = (state.group.edit) ? "group--animation1" : "";
  const groupActiveDate = (state.date.edit) ? "group--animation2" : "";
  const groupActiveUser = (state.user.edit) ? "group--animation3" : "";
  const groupActiveGift = (state.gift.edit) ? "group--animation4" : "";
  const groupActiveDone = (state.group.edit === false && state.date.edit === false && state.user.edit === false && state.gift.edit === false) ? "group--animation5" : "";

  return (
    <>
      <div className={`group ${groupActiveName} ${groupActiveDate} ${groupActiveUser} ${groupActiveGift} ${groupActiveDone}`}>
        <GroupPages/>
        {step >= 1 && <GroupName />}
        {step >= 2 && <GroupDate />}
        {step >= 3 && <UserName admin={true}/>}
        {step >= 4 && <YourGift admin={true}/>}
        {step >= 5 && <GroupDone />}
      </div>
    </>
  );
};

export default Group;