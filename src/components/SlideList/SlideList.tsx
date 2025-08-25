import { useEffect } from 'react';
import {
  SlideListContainer,
  SlideListImage,
  SlideListItem,
  SlideListNumber,
} from './SlideList.style';

// Lets extend the interface later, providing more capabilities
interface ISlide {
  id: string;
  imageUrl: string;
}

export type SlideListProps = {
  slides: ISlide[];
  slideNumber: number;
  // Later it is beter to use slide.id
  onSlideChange: (slideNumber: number) => void;
};

function SlideList({ onSlideChange, slides, slideNumber }: SlideListProps) {
  // Scroll to current slide
  useEffect(() => {
    requestAnimationFrame(() => {
      const element = document.getElementById(`slide-${slideNumber}`);
      if (!element) return;
      const winHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const { top, height } = element.getBoundingClientRect();

      if (top < 0 || top + height > winHeight - 80)
        element.scrollIntoView({ behavior: 'smooth' });
    });
  }, [slideNumber]);

  return (
    <SlideListContainer>
      {slides.map((slide, idx) => (
        <SlideListItem
          key={slide.id}
          id={`slide-${idx}`}
          isActive={idx === slideNumber}
          onClick={() => onSlideChange(idx)}
        >
          <SlideListNumber>{idx + 1}</SlideListNumber>
          <SlideListImage
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          />
        </SlideListItem>
      ))}
    </SlideListContainer>
  );
}

export default SlideList;
