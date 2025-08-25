import styled from 'styled-components';

export const SlideListContainer = styled.ul({
  height: '100%',
  overflowY: 'scroll',
});

export const SlideListNumber = styled.span({
  marginRight: '1em',
  fontSize: '1.2rem',
  textOverflow: 'clip',
  textAlign: 'right',
  flexShrink: 1,
  maxWidth: 60,
});

export const SlideListImage = styled.div((props) => ({
  flexGrow: 1,
  height: '100%',
  borderRadius: 4,
  border: `1px solid ${props.theme.colors.background}`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  '&:hover': {
    border: `1px solid ${props.theme.colors.primary}`,
  },
}));

export const SlideListItem = styled.li<{ isActive?: boolean }>((props) => ({
  padding: props.theme.spacing.md,
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  background: props.isActive ? 'rgba(20, 106, 255, 0.12)' : 'none',
  cursor: 'grab',
  height: '20%', // 5 items visible
  userSelect: 'none',

  [`& > ${SlideListNumber}`]: {
    color: props.isActive ? props.theme.colors.primary : 'inherit',
  },
}));
