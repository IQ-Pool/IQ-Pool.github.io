import './App.css';
import { ReactComponent as Background} from './assests/Universe.svg';
import { ReactComponent as Earth} from './assests/Earth.svg';
import { ReactComponent as IQ_Pool_Logo} from './assests/IQ_Pool_Logo.svg';
import { ReactComponent as Mathematics} from './assests/Mathematics.svg';
import { ReactComponent as Atom} from './assests/Atom.svg';
import { ReactComponent as Satellite} from './assests/Satellite.svg';
import { ReactComponent as Friction} from './assests/Friction.svg';
import { ReactComponent as Microscope} from './assests/Microscope.svg';
import { ReactComponent as Chemistry} from './assests/Chemistry.svg';
function App() {
  return (
    <div className="Container1" > 
    <Background className="background" />
    <div className="Container2">
      <IQ_Pool_Logo className="logo" />
    </div>
    <div className="Container3" >
      <Earth className="earth"/>
    </div>
    <Mathematics className="math" />
    <Atom className="atom" />
    <Satellite className="satellite" />
    <Friction className="friction" />
    <Microscope className="microscope" />
    <Chemistry className="chemistry" />
    </div>
  );
}

export default App;
