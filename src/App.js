import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import CourseEntry from './Components/CourseEntry';
import CourseView from './Components/CourseView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<CourseEntry/>}/>
  <Route path="/view" exact element={<CourseView/>}/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
