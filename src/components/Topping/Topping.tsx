import { Form, Image } from 'react-bootstrap';

type ToppingProps = {
  name: string;
  price: number;
  image: string;
};

function Topping(props: ToppingProps) {
  return (
    <>
      <p>{props.name}</p>
      <Image src={`${props.image}`} alt={`${props.name} image`} />
      <p>{props.price}$</p>
      <Form.Check aria-label={`${props.name} option`} />
    </>
  );
}

export default Topping;
