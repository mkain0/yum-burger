import yumBurgerLogo from './assets/yum-burger-logo.svg';
import './App.css';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <>
      <Image src={yumBurgerLogo} className='logo' alt='Yum Burger logo' />
    </>
  );
}

export default App;
