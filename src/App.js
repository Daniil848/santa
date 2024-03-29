import Group from './components/group/Group';
import User from './components/user/User';
import Snow from './components/effects/Snow';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from './components/editProfile/EditProfile';

const App = () => {
  return (
    <>
      <Snow/>
      <Routes>
        <Route index element={<Group />}/>
        <Route path="/group/:groupID" element={<User />}/>
        <Route path="/group/:groupID/user/:userID" element={<EditProfile />}/>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;