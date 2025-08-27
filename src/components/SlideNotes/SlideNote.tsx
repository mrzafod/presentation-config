import { useDeferredValue, useEffect, useRef, useState } from 'react';
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
  const [note, setNote] = useState<string>('');
  const deferredNote = useDeferredValue(note);

  const hasChangedByInputRef = useRef(false);

  useEffect(() => {
    setNote(notes?.[slideId] || '');
    hasChangedByInputRef.current = false;
  }, [slideId, notes]);

  useEffect(() => {
    if (hasChangedByInputRef.current && notes?.[slideId] !== deferredNote) {
      saveNotes((prev) => ({ ...prev, [slideId]: deferredNote }));
      hasChangedByInputRef.current = false;
    }
  }, [deferredNote, slideId, notes, saveNotes]);

  return (
    <SlideNoteContainer>
      <SlideNoteTextarea
        id='slide-note'
        name='slide-note'
        placeholder='No speaker notes for the slide. Click to add a note'
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          hasChangedByInputRef.current = true;
        }}
      />
    </SlideNoteContainer>
  );
}

export default SlideNote;
