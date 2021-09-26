import logo from './logo.svg';
import './App.css';
import './FrontDesign/sideBar.css'
import Chart from './FrontDesign/Chart'
import TrackPage from './FrontDesign/TrackPage';
import TrackTable from './FrontDesign/TrackTable';
import SideBar from './FrontDesign/SideBar';
import Home from './FrontDesign/Home';
import ManagmentPage from './FrontDesign/MangamentPage'
function App() {
  return (
    <div className="App">
        <Home />
        {/* <TrackPage /> */}
        <ManagmentPage />
        {/* <LogOutPage /> */}
    </div>
  );
}

export default App;
