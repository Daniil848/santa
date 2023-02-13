import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GroupName from "../group/GroupName";
import GroupDate from "../group/GroupDate";
import UserName from "../user/UserName";
import YourGift from "../user/YourGift";
import EditProfileComponent from "./EditProfileComponent";

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
      const response = await fetch(`http://localhost:3002/group/${groupID}`);
      const data = await response.json();
      setGroup(data);
    };
    fetchData();
  },[groupID]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3002/user/${userID}`);
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
      {group && user && <EditProfileComponent
        groupName={group.name} 
        budget={group.date.budget} 
        registration={group.date.registration} 
        choosing={group.date.choosing} 
        exchange={group.date.exchange}
        userName={user.data.name}
        email={user.data.email}
        age={user.gift.age}
        gender={user.gift.gender}
        wiches={user.gift.wiches}
        admin={user.admin}
      />}
      {state.group.editProfile && <GroupName 
        budget={group.date.budget} 
        registration={group.date.registration} 
        choosing={group.date.choosing} 
        exchange={group.date.exchange}
      />}
      {state.date.editProfile && <GroupDate
        name={group.name}
      />}
      {state.user.editProfile && <UserName
        age={user.gift.age}
        gender={user.gift.gender}
        wiches={user.gift.wiches}
      />}
      {state.gift.editProfile && <YourGift
        userName={user.data.name}
        email={user.data.email}
      />}
    </div>
  );

};

export default EditProfile;