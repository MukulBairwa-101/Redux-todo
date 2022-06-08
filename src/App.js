import AddTodo from './Components/AddTodo';
import {TbBulb} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./Redux/Actions";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const invertMode = useSelector((state) => state.darkModeReducer);
  const toggleMode =()=>{
    dispatch(toggleDarkMode());
  }
  return (
    <div className="App" style={{
      backgroundColor: invertMode ? '#02203c':'#fff',
      height: '100vh '
    }}>
      <div className="switch-wrapper">

      <TbBulb className={!invertMode ? 'pointer mode-switch switchdark' :'pointer mode-switch switchlight'} onClick={() => toggleMode()}/>
      </div>
      <AddTodo invertMode={invertMode} />
    </div>
  );
}


export default App;
