import { useCallback, useState } from 'react';
import {
  AppContainer,
  AppControlPanel,
  AppSlideNav,
  AppSlideView,
  AppSlideViewContainer,
  AppSlideViewControls,
} from './App.style';
import FooterButtons from './components/FooterButtons/FooterButtons';
import PresentationNotes from './components/PresentationNotes/PresentationNotes';
import SlideList from './components/SlideList/SlideList';
import SlidePagination from './components/SlidePagination/SlidePagination';
import SlideView from './components/SlideViewer/SlideViewer';
import { usePresentationData } from './hooks/usePresentationData';

function App() {
  const data = usePresentationData();
  const maxPages = data.slides.length - 1;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const onSlideNumberChange = useCallback(
    (nextPageNumber: number) => setPageNumber(nextPageNumber),
    [setPageNumber]
  );

  const onSave = useCallback(() => {}, []);
  const onDiscard = useCallback(() => {}, []);

  const { id, imageUrl } = data.slides[pageNumber] || {};

  return (
    <AppContainer>
      <AppSlideView>
        <AppSlideViewContainer>
          <SlideView imageUrl={imageUrl} />
        </AppSlideViewContainer>
        <AppSlideViewControls>
          <SlidePagination {...{ pageNumber, maxPages, onSlideNumberChange }} />
          <PresentationNotes key={id} slideId={id} />
        </AppSlideViewControls>
      </AppSlideView>
      <AppSlideNav>
        <SlideList
          slides={data.slides}
          slideNumber={pageNumber}
          onSlideChange={onSlideNumberChange}
        />
      </AppSlideNav>
      <AppControlPanel>
        <FooterButtons {...{ onSave, onDiscard }} />
      </AppControlPanel>
    </AppContainer>
  );
}

export default App;
