import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "../../assets/product-2.jpeg";
import star from '../../assets/star.svg'
import halfstar from '../../assets/half-start.svg'
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='text-center'>
            <Link to='/photo-magnets'>
                <Card className='card-box'>
                    <Card.Img variant="top" src={Product} />
                    <Card.Body>
                        <div className='mb-2'>Card Title</div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={halfstar} alt='star' />
                            <span className='ms-1'>(4.5/5)</span>
                        </div>
                        <Card.Text>
                            <span className='test-dec'>3' x 2' Starts at </span>$6.99
                        </Card.Text>
                        <Button variant="primary" className='primary-button-css'>Customize</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default ProductCard;