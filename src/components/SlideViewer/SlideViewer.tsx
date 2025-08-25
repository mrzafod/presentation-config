import { SlideViewerContainer, SlideViewImage } from './SlideViewer.style';

export type SlideViewProps = {
  imageUrl: string;
};

function SlideView(props: SlideViewProps) {
  return (
    <SlideViewerContainer>
      <SlideViewImage src={props.imageUrl} />
    </SlideViewerContainer>
  );
}

export default SlideView;
