import { GroupContext } from "./contexts/reduser";
import { useContext } from "react";
import GroupName from "./components/GroupName";
import GroupDate from "./components/GroupDate";
import GroupAdmin from "./components/GroupAdmin";
import YourGift from "./components/YourGift";

const Group = () => {
  const [groupState, dispatch] = useContext(GroupContext);

  const step = groupState.step;

  return (
    <>
      {step === 1 && <GroupName />}
      {step === 2 && <GroupDate />}
      {step === 3 && <GroupAdmin />}
      {step === 4 && <YourGift />}
    </>
  );
};

export default Group;