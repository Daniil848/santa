import { useSelector } from "react-redux";
import PagesUser from "./PagesUser";
import UserName from "./UserName";
import UserGift from "./UserGift";
import UserDone from "./UserDone";
import Snow from "../effects/Snow";

const User = () => {
  const state = useSelector(state => state.userReducer);
  const step = state.step;
  const activeUserName = (state.user.edit) ? "group--animation1" : "";
  const activeUserGift = (state.gift.edit) ? "group--animation2" : "";
  const activeUserDone = (state.user.edit === false && state.gift.edit === false) ? "group--animation3" : "";

  return (
    <>
      <Snow />
      <div className={`group ${activeUserName} ${activeUserGift} ${activeUserDone}`}>
        <PagesUser />
        {step >= 1 &&<UserName />}
        {step >= 2 &&<UserGift />}
        {step >= 3 && <UserDone />}
      </div>
    </>
    
  );
};

export default User;