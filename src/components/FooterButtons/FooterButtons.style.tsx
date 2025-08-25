import styled from 'styled-components';

export const FooterButtonsContainer = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: props.theme.spacing.md,
  height: '100%',
}));
