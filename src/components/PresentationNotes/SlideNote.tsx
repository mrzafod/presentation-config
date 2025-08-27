import { SlideNoteContainer, SlideNoteTextarea } from './SlideNote.style';

export type SlideNoteProps = {
  slideNote: string;
  onNoteChange: (note: string) => void;
};

function SlideNote({ slideNote, onNoteChange }: SlideNoteProps) {
  return (
    <SlideNoteContainer>
      <SlideNoteTextarea
        id='slide-note'
        name='slide-note'
        placeholder='No speaker notes for the slide. Click to add a note'
        value={slideNote}
        onChange={(e) => {
          onNoteChange(e.target.value);
        }}
      />
    </SlideNoteContainer>
  );
}

export default SlideNote;
