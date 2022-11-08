import { GroupContext } from "./contexts/reduser";
import { useContext } from "react";
import GroupName from "./components/GroupName";
import GroupDate from "./components/GroupDate";
import GroupAdmin from "./components/GroupAdmin";
import YourGift from "./components/YourGift";
import GroupDone from "./components/GroupDone";

const Group = () => {
  const [state, dispatch] = useContext(GroupContext);

  const step = state.step;

  return (
    <>
      {step >= 1 && <GroupName />}
      {step >= 2 && <GroupDate />}
      {step >= 3 && <GroupAdmin />}
      {step >= 4 && <YourGift />}
      {step >= 5 && <GroupDone />}
    </>
  );
};

export default Group;