import { useEffect, useState } from 'react';
import { useDebounceCallback } from '../../hooks/useDebounceCallback';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SlideNoteContainer, SlideNoteTextarea } from './SlideNote.style';

export type SlideNoteProps = {
  slideId: string;
};

function SlideNote({ slideId }: SlideNoteProps) {
  const [notes, saveNotes] = useLocalStorage<Record<string, string>>(
    'notes',
    {}
  );
  const [note, setNote] = useState<string>(notes?.[slideId] || '');
  useEffect(() => setNote(notes?.[slideId] || ''), [slideId, notes, setNote]);

  // Lets reduce calls to LocalStorage
  const commitToLocalStorage = useDebounceCallback(
    () => saveNotes({ ...notes, [slideId]: note }),
    1e3
  );

  return (
    <SlideNoteContainer>
      <SlideNoteTextarea
        id='slide-note'
        name='slide-note'
        placeholder='No speaker notes for the slide. Click to add a note'
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          commitToLocalStorage();
        }}
      />
    </SlideNoteContainer>
  );
}

export default SlideNote;
