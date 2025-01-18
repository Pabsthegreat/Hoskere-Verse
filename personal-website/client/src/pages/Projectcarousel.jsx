import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Projectcarousel.css';

const Projectcarousel = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id}>
                        <img src={project.image} alt={project.name} style={{ width: '100%', borderRadius: '10px' }} />
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default Projectcarousel;
