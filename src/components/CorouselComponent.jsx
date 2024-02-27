import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RestaurantCard from "./RestaurentCard";
import styles from "./CorouselComponent.module.css";
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
    <div className={styles.corousel}>
      <Carousel>
        {slideGroups.map((restaurents, index) => {
          return (
            <div className={styles.items} key={index}>
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
