import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

export type ButtonProps = {
  disabled?: boolean;
  primary?: boolean;
  round?: boolean;
};

export const Button = styled.button.attrs<ButtonProps>((props) => ({
  disabled: props.disabled,
}))(({ theme, primary, round }) => {
  const styles: CSSObject = {
    display: 'inline-block',
    padding: '0 1.4rem',
    borderRadius: '1.3rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    letterSpacing: -1,
    fontWeight: 'bold',
    minWidth: '3.2rem',
    lineHeight: '3rem',
    textAlign: 'center',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    transition:
      'background-color 0.4s ease, color 0.4s ease, opacity 0.4s ease',

    [`&:hover`]: {
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
    },

    [`&:disabled`]: {
      backgroundColor: '#aaa',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  };

  if (primary) {
    styles.backgroundColor = theme.colors.primary;
    styles.color = theme.colors.background;
  }

  if (round) {
    styles.padding = 0;
    styles.width = '3rem';
    styles.height = '3rem';
    styles.minWidth = '3rem';
    styles.lineHeight = '1rem';
    styles.borderRadius = '3rem';
    styles.border = `1px solid ${theme.colors.border}`;
  }

  return styles;
});
