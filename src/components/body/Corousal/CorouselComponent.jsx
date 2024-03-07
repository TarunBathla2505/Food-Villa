import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CorouselCard from "./CorouselCard";

const CorouselComponent = ({ corouselRestaurentData }) => {
  const elementsPerSlide = 6;
  const slideGroups = [];
  const corouselData = corouselRestaurentData.slice(
    0,
    corouselRestaurentData.length -
      (corouselRestaurentData.length % elementsPerSlide)
  );

  for (let i = 0; i < corouselData.length; i += elementsPerSlide) {
    slideGroups.push(corouselData.slice(i, i + elementsPerSlide));
  }
  return (
    <div className="flex">
      <Carousel>
        {slideGroups.map((restaurents, index) => {
          return (
            <div className="flex" key={index}>
              {restaurents.map((restaurent) => {
                return (
                  <CorouselCard restaurent={restaurent} key={restaurent.id} />
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CorouselComponent;
