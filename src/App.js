import { Routes, Route } from 'react-router-dom';
import GroupAdmin from './components/GroupAdmin';
import GroupUser from './components/GroupUser';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path="/user" element={<GroupUser />}/>
      </Routes>
    </>
  );
};

export default App;
