
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Comp/Users';
import CreateUser from './Comp/CreateUser';
import UpdateUser from './Comp/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/createUser" element={<CreateUser />}></Route>
          <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
