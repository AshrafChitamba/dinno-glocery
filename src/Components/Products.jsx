import { FaStarHalfAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'
import product4 from '../assets/product-4.png'
import product5 from '../assets/product-5.png'
import product6 from '../assets/product-6.png'
import product7 from '../assets/product-7.png'
import product8 from '../assets/product-8.png'

const Products = () => {
  const data = [
    {
      data: [
        {
          image: product1,
          title: "fresh orange",
          price: "MK300.99/- - 10.99/-",
        },
        {
          image: product2,
          title: "Onion",
          price: "MK100.99/- - 300.99/-",
        },
        {
          image: product3,
          title: "beef",
          price: "MK4000.99/- - 5000.99/-",
        },
        {
          image: product4,
          title: "Cabbag",
          price: "MK400.99/- - 10.99/-",
        },
      ],
    },
    {
      data: [
        {
          image: product5,
          title: "Macademmia nut",
          price: "mk400.99/- - 500.99/-",
        },
        {
          image: product6,
          title: "Avovado pear",
          price: "mk440.99/- - 500.99/-",
        },
        {
          image: product7,
          title: "carrotz",
          price: "mk300.99/- - 400.99/-",
        },
        {
          image: product8,
          title: "Mandimu",
          price: "MK50.99/- - 100.99/-",
        },
      ],
    },
  ];
  const allProducts = data.map((group, index) => {
    return (
      <div className="px-lg-5" key={index}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 480,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 581,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {group.data.map((product, index) => {
            return (
              <div
                className="rounded-2 bg-white shadow-sm text-center pb-3 pt-5 m-2 feature_card"
                key={index}
              >
                <img
                  src={product.image}
                  alt='product'
                  height={120}
                  width={120}
                  className="rounded-circle"
                />
                <h4 className="fs-4">{product.title}</h4>
                <p className="m-0">{product.price}</p>
                <div>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <FaStarHalfAlt color="orange" />
                </div>
                <button className="btn btn-sm btn-outline-dark mt-2 px-4 fw-bold">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  });
  return (
    <div className="container-fluid px-0 py-3 bg-light" id="products">
      <section>
        <h2 className="fs-2 text-center mb-3">
          Our <span className="cliped_text px-4 py-2">products</span>
        </h2>
        <div className="container-fluid px-2 px-lg-5">
          <div className="px-lg-5 mx-lg-5">
            {allProducts} 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
