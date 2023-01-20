import { useSelector } from "react-redux";
import PagesUser from "./PagesUser";
import UserDone from "./UserDone";
import Snow from "../effects/Snow";
import UserName from "../admin/UserName";
import YourGift from "../admin/YourGift";

const User = () => {

  return (
    <>
      <Snow />
      <div className={`group`}>
        <PagesUser />
        <UserName />
        <YourGift />
        <UserDone />
      </div>
    </>
    
  );
};

export default User;