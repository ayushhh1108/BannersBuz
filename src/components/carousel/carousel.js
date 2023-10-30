import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from "../../assets/BB_US_CA_AU_NZ_Oct_10-12_Banner_1920x380_Stands_Displays.webp";

function IntervalCarousel() {
    return (
        <div className='mb-5 Carousel-box'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item interval={10000}>
                    <img src={CarouselImg} width='100%' />
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img src={CarouselImg} width='100%' />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default IntervalCarousel;