import './App.css';
import Header from './components/header/header';
import Hamburger from './components/hamburgerIcon/hamburger';
import SideDrawer from './components/UI/sideDrawer/sideDrawer';
import Overlay from './components/UI/Overlay/overlay';
import Home from './components/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Hamburger />
      <SideDrawer >
        {/* there will be content here */}
      </SideDrawer>
      <Overlay /> 
      <Home />
    </div>
  );
}

export default App;
