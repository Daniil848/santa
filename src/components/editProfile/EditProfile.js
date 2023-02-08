import { useSelector } from "react-redux";
import GroupName from "../admin/GroupName";
import GroupDate from "../admin/GroupDate";
import UserName from "../admin/UserName";
import YourGift from "../admin/YourGift";
import EditProfilePage from "./EditProfilePage";

const EditProfile = () => {
  const state = useSelector(state => state.adminReducer);

  return (
    <div className="group">
      {state.group.editProfile === false &&
        state.date.editProfile === false && 
        state.user.editProfile === false && 
        state.gift.editProfile === false &&
      <EditProfilePage/>}
      {state.group.editProfile && <GroupName/>}
      {state.date.editProfile && <GroupDate/>}
      {state.user.editProfile && <UserName/>}
      {state.gift.editProfile && <YourGift/>}
    </div>
  );

};

export default EditProfile;