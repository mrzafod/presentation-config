import styled from 'styled-components';

export const SlideViewerContainer = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: props.theme.spacing.lg,
}));

export const SlideViewImage = styled.img({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '1em',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.14)',
});
