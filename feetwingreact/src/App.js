import './App.css';
import Header from './components/header/header';
// import Hamburger from './components/hamburgerIcon/hamburger';
// import SideDrawer from './components/UI/sideDrawer/sideDrawer';
import Overlay from './components/UI/Overlay/overlay';
import Home from './components/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Features from './components/features/features';
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
function App() {
  return (
    <div className="App">
      <Header />
      
      <Overlay /> 
      <Home />
      <Features/>
    </div>
  );
}

export default App;
