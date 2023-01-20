import { Routes, Route } from 'react-router-dom';
import Group from './components/admin/Group';
import User from './components/user/User';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Group />}/>
        <Route path="/group/:groupID" element={<User />}/>
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
