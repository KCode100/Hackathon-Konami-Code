import React, {FC} from 'react';
import './App.css';
import Profile, { HairColor } from './components/Profile';

const App: FC = () => {
  return (
    <h1 className="App">
      <Profile name='Kivi Corn' age={29} email='kivi.webdev@gmail.com' isMarried={true} hairColor={HairColor.Pink} shul='Avreichim' />
    </h1>
  );
}

export default App;
