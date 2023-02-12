import Group from './components/group/Group';
import User from './components/user/User';
import EditProfile from './components/editProfile/EditProfile';
import Snow from './components/effects/Snow';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Snow/>
      <Routes>
        <Route index element={<Group />}/>
        <Route path="/group/:groupID" element={<User />}/>
        <Route path="/group/:groupID/user/:userID" element={<EditProfile />}/>
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;