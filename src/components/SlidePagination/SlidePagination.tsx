import { Button } from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import {
  SlidePaginationContainer,
  SlidePaginationFiller,
} from './SlidePagination.style';

export type SlidePaginationProps = {
  pageNumber: number;
  maxPages: number;
  onSlideNumberChange: (pageNumber: number) => void;
};

function SlidePagination(props: SlidePaginationProps) {
  return (
    <SlidePaginationContainer>
      <SlidePaginationFiller />
      <Pagination
        pageNumber={props.pageNumber}
        maxPages={props.maxPages}
        onChange={props.onSlideNumberChange}
      />
      <SlidePaginationFiller />
      <Button $round>?</Button>
    </SlidePaginationContainer>
  );
}

export default SlidePagination;
