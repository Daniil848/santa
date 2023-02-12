import { useSelector } from "react-redux";
import GroupName from "../admin/GroupName";
import GroupDate from "../admin/GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";
import EditProfileComponent from "./EditProfileComponent";

const EditProfile = () => {
  const state = useSelector(state => state.adminReducer);
  const formAnimationGroupName = (state.group.editProfile) ? "form--animation1" : "";
  const formAnimationGroupDate = (state.date.editProfile) ? "form--animation2" : "";
  const formAnimationUserName = (state.user.editProfile) ? "form--animation3" : "";
  const formAnimationGift = (state.gift.editProfile) ? "form--animation4" : "";
  const formAnimationEditPage = (
    state.group.editProfile === false &&
    state.date.editProfile === false && 
    state.user.editProfile === false && 
    state.gift.editProfile === false
  ) ? "form--animation5" : "";

  return (
    <div className={
      `form
      ${formAnimationEditPage}
      ${formAnimationGroupName}
      ${formAnimationGroupDate}
      ${formAnimationUserName}
      ${formAnimationGift}`}
    >
      <EditProfileComponent/>
      {state.group.editProfile && <GroupName/>}
      {state.date.editProfile && <GroupDate/>}
      {state.user.editProfile && <UserName/>}
      {state.gift.editProfile && <YourGift/>}
    </div>
  );

};

export default EditProfile;