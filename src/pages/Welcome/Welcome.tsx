import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import yumBurgerLogo from '../../assets/yum-burger-logo.svg';
import './Welcome.css';

function Welcome() {
  return (
    <Link to='/order'>
      <Image src={yumBurgerLogo} className='logo' alt='Yum Burger logo' />
    </Link>
  );
}

export default Welcome;
