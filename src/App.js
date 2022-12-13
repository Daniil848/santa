import { Routes, Route } from 'react-router-dom';
import GroupAdmin from './components/GroupAdmin';
import User from './components/User';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path="/group/:groupID" element={<User />}/>
      </Routes>
    </>
  );
};

export default App;
