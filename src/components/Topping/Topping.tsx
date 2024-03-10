import { Form, Image } from 'react-bootstrap';
import './Topping.css';

type ToppingProps = {
  name: string;
  price: number;
  image: string;
};

function Topping(props: Readonly<ToppingProps>) {
  return (
    <>
      <Image src={`${props.image}`} alt={`${props.name} image`} thumbnail className='img-rounder' />
      <Form.Check label={`${props.name} $ ${props.price}`} aria-label={`${props.name} option`} />
    </>
  );
}

export default Topping;
