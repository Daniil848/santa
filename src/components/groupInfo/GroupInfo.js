import GroupInfoButton from "./GroupInfoButton";
import GroupInfoComponent from "./GroupInfoComponent";


const GroupInfo = () => {
  return (
    <div data-testid="group-info">
      <GroupInfoButton/>
      <GroupInfoComponent/>
    </div>
  );
};

export default GroupInfo;