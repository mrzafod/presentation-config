import styled from 'styled-components';

export const SlideNoteContainer = styled.form((props) => ({
  width: '100%',
  background: props.theme.colors.background,
  borderTop: `1px solid ${props.theme.colors.border}`,
}));

export const SlideNoteTextarea = styled.textarea((props) => ({
  width: '100%',
  borderRadius: 0,
  background: props.theme.colors.background,
  border: 'none',
  padding: `0.5rem ${props.theme.spacing.md}`,
  resize: 'none',
  margin: 0,
  outline: 0,
  color: props.theme.colors.text,
}));
