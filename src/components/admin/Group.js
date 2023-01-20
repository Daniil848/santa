import { useSelector } from "react-redux";
import GroupName from "./GroupName";
import GroupDate from "./GroupDate";
import UserName from "./UserName";
import YourGift from "./YourGift";
import GroupDone from "./GroupDone";
import Snow from "../effects/Snow";
import PagesAdmin from "./GroupPages";


const Group = () => {
  const state = useSelector(state => state.adminReducer);
  const step = state.step;
  const groupActiveName = (state.group.edit) ? "group--animation1" : "";
  const groupActiveDate = (state.date.edit) ? "group--animation2" : "";
  const groupActiveAdmin = (state.admin.edit) ? "group--animation3" : "";
  const groupActiveGift = (state.gift.edit) ? "group--animation4" : "";
  const groupActiveDone = (state.group.edit === false && state.date.edit === false && state.admin.edit === false && state.gift.edit === false) ? "group--animation5" : "";

  return (
    <>
      <Snow/>
      <div className={`group ${groupActiveName} ${groupActiveDate} ${groupActiveAdmin} ${groupActiveGift} ${groupActiveDone}`}>
        <PagesAdmin />
        {step >= 1 && <GroupName />}
        {step >= 2 && <GroupDate />}
        {step >= 3 && <UserName />}
        {step >= 4 && <YourGift />}
        {step >= 5 && <GroupDone />}
      </div>
    </>
  );
};

export default Group;