import styled from 'styled-components';

export const PaginationContainer = styled.div((props) => ({
  display: 'flex',
  padding: props.theme.spacing.md,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const PaginationFiller = styled.div({
  flexGrow: 1,
});

export const PaginationPage = styled.span({
  fontSize: '1.4rem',
  padding: '0 0.8em',
});

export const PaginationPageCurrent = styled(PaginationPage)((props) => ({
  color: props.theme.colors.primary,
}));

export const PaginationPageTotal = styled(PaginationPage)((props) => ({
  color: props.theme.colors.text,
}));
