import HeroSlider, {Slide} from "hero-slider";
import '../styles/carousel.scss';

const img1 = '../images/1.jpg';
const img2 = '../images/2.jpg';
const img3 = '../images/3.jpg';

export default function Carousel() {
  return (
    <div className="carousel-all">
    <HeroSlider
      height={"78vh"}
      autoplay={{
        autoplayDuration:5000
      }}
      animations={{
        slidingAnimation:'fade'
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        slidingAnimation: 'fade',
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Slide
        background={{
          backgroundAnimation: 'zoom',
          backgroundImageSrc: img1
        }}
      />

      <Slide
        background={{
          backgroundAnimation: 'zoom',
          backgroundImageSrc: img2
        }}
      />

      <Slide
        background={{
          backgroundAnimation: 'zoom',
          backgroundImageSrc: img3
        }}
      />

    </HeroSlider>
    </div>
  );
}