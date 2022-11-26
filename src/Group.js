import { GroupContext } from "./contexts/reduser";
import { useContext, useEffect } from "react";
import GroupName from "./components/GroupName";
import GroupDate from "./components/GroupDate";
import GroupAdmin from "./components/GroupAdmin";
import YourGift from "./components/YourGift";
import GroupDone from "./components/GroupDone";
import Snow from "./components/effects/Snow";
import Pages from "./components/Pages";

const Group = () => {

  const [state, dispatch] = useContext(GroupContext);
  const step = state.step;
  const groupActiveName = (state.group.edit) ? "group--active1" : "";
  const groupActiveDate = (state.date.edit) ? "group--active2" : "";
  const groupActiveAdmin = (state.admin.edit) ? "group--active3" : "";
  const groupActiveGift = (state.gift.edit) ? "group--active4" : "";
  const groupActiveDone = (state.group.edit === false && state.date.edit === false && state.admin.edit === false && state.gift.edit === false) ? "group--active5" : "";

  return (
    <>
      <Snow/>
      <div className={`group ${groupActiveName} ${groupActiveDate} ${groupActiveAdmin} ${groupActiveGift} ${groupActiveDone}`}>
        <Pages/>
        {step >= 1 && <GroupName />}
        {step >= 2 && <GroupDate />}
        {step >= 3 && <GroupAdmin />}
        {step >= 4 && <YourGift />}
        {step >= 5 && <GroupDone />}
      </div>
    </> 
  );
};

export default Group;
