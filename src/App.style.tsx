import styled from 'styled-components';

// container (flex)
// -----------------------------
// slide view   |    nav column
// -----------------------------
// aside buttons

export const AppContainer = styled.main({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  position: 'relative',
  width: '100%',
  height: '100vh',
  paddingBottom: 80,
  overflow: 'hidden',
});

export const AppControlPanel = styled.aside((props) => ({
  display: 'block',
  position: 'fixed',
  width: '100%',
  height: 80,
  bottom: 0,
  borderTop: `1px solid ${props.theme.colors.border}`,
}));

export const AppSlideView = styled.div((props) => ({
  flexGrow: 1,
  height: '100%',
  background: props.theme.colors.secondary,
  display: 'flex',
  flexDirection: 'column',
}));

export const AppSlideViewContainer = styled.div({
  flexGrow: 1,
  overflow: 'hidden',
})

export const AppSlideViewControls = styled.div({
  flexShrink: 1,
})

export const AppSlideNav = styled.nav((props) => ({
  flexShrink: 1,
  height: '100%',
  width: 240,
  minWidth: 240,
  borderLeft: `1px solid ${props.theme.colors.border}`,
  background: props.theme.colors.secondary,
}));
