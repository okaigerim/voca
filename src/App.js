import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DayList from "./components/DayList";
import Header from "./components/Header";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"  element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path='*' element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
