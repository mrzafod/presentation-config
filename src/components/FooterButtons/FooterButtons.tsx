import { Button } from '../Button/Button';
import { FooterButtonsContainer } from './FooterButtons.style';

export type FootorButtonsProps = {
  onSave?: () => void;
  onDiscard?: () => void;
};

function FooterButtons(props?: FootorButtonsProps) {
  return (
    <FooterButtonsContainer>
      <Button onClick={() => props?.onDiscard?.()}>Discard</Button>
      <Button primary onClick={() => props?.onSave?.()}>
        Save ➜
      </Button>
    </FooterButtonsContainer>
  );
}

export default FooterButtons;
