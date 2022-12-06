import Carousel from "react-elastic-carousel";
import { goodThingsList } from "../../utils/goodThingsList";
import { GoodCard } from "../goodThingsCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
/*Manage all the carousel container from Good Things section */
export const CarouselBox = () => {
  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {goodThingsList.map((el, i) => (
            <GoodCard
              image={el.image}
              altImg={el.altImg}
              topic={el.topic}
              text={el.text}
              key={`GCard-${i}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
