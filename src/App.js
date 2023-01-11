import { Routes, Route } from 'react-router-dom';
import GroupAdmin from './components/admin/GroupAdmin';
import User from './components/user/User';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path="/group/:groupID" element={<User />}/>
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default App;
