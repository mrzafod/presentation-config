import styled from 'styled-components';

export const SlidePaginationContainer = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${props.theme.spacing.md}`,
}));

export const SlidePaginationFiller = styled.div({
  flexGrow: 1,
});
