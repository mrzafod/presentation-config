import { useCallback } from 'react';
import { Button } from '../Button/Button';
import { PaginationContainer, PaginationPageCurrent, PaginationPageTotal } from './Pagination.style';

export type PaginationProps = {
  pageNumber?: number;
  maxPages?: number;
  onChange: (pageNumber: number) => void;
};

function Pagination(props: PaginationProps) {
  const { maxPages = 0, pageNumber = 0, onChange } = props;

  const onClickIncrement = useCallback(
    (increment: -1 | 1) => {
      let nextPageNumber = pageNumber + increment;
      if (nextPageNumber > maxPages) nextPageNumber = 0;
      if (nextPageNumber < 0) nextPageNumber = maxPages;
      onChange?.(nextPageNumber);
    },
    [maxPages, pageNumber, onChange]
  );

  return (
    <PaginationContainer>
      <Button $round onClick={() => onClickIncrement(-1)}>«</Button>
      <PaginationPageCurrent>{pageNumber + 1}</PaginationPageCurrent>
      <span>/</span>
      <PaginationPageTotal>{maxPages + 1}</PaginationPageTotal>
      <Button $round onClick={() => onClickIncrement(+1)}>»</Button>
    </PaginationContainer>
  );
}

export default Pagination;
