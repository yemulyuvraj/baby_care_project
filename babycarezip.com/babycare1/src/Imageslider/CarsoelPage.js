import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const CarouselPage = () => {
  // Array 
  const carouselItems = [
    {
      src: '/Images/P2.jpg', 
      alt: "Healthy Baby Nutrition", 
      title: "Optimal Nutrition for Your Baby", 
      description: "Discover the best nutrition plans tailored to your baby's growth and development."
    },
    {
      src: '/Images/Photo3.jpg', 
      alt: "Parental Guidance and Support",
      title: "Support for New Parents",
      description: "We offer expert advice and support for new parents, from understanding baby milestones to tackling daily challenges."
    },
    {
      src: '/Images/slideshow.webp', 
      alt: "Hygiene and Immunization",
      title: "Ensuring Health & Safety",
      description: "Learn how to maintain proper hygiene and keep your baby safe with timely vaccinations."
    }
  ];

  return (
    <div className="carousel-container" style={{ margin: '0 auto', maxWidth: '1200px', overflow: 'hidden' }}>
      <Carousel interval={3000} fade indicators>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            {/* Image */}
            <img
              style={{
                height: '90vh',
                objectFit: 'cover', // Ensure the image covers its container
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' // Add a shadow effect
              }}
              className="d-block w-100" // Make the image responsive
              src={item.src}
              alt={item.alt}
            />
            {/* Caption */}
            <Carousel.Caption
              style={{
                color: 'black', // Text color
                background: 'rgba(255, 255, 255, 0.8)', // Background color with transparency
                padding: '15px',
                borderRadius: '10px'
              }}
            >
              <h3 className="text-center">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
