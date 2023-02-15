import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GroupName from "../group/GroupName";
import GroupDate from "../group/GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";
import EditProfileComponent from "./EditProfileComponent";
import { USER_URL, GROUP_URL } from "../constants/URL";

const EditProfile = () => {
  const state = useSelector(state => state.adminReducer);
  const [group , setGroup] = useState();
  const [user , setUser] = useState();
  const { groupID } = useParams();
  const { userID } = useParams(); 
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
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(GROUP_URL + groupID);
      const data = await response.json();
      setGroup(data);
    };
    fetchData();
  },[groupID]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(USER_URL + userID);
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  },[userID]);

  return (
    <div className={
      `form
      ${formAnimationEditPage}
      ${formAnimationGroupName}
      ${formAnimationGroupDate}
      ${formAnimationUserName}
      ${formAnimationGift}`}
    >
      {group && user && <EditProfileComponent group={group} user={user}/>}
      {state.group.editProfile && <GroupName group={group}/>}
      {state.date.editProfile && <GroupDate group={group}/>}
      {state.user.editProfile && <UserName user={user}/>}
      {state.gift.editProfile && <YourGift user={user}/>}
    </div>
  );

};

export default EditProfile;