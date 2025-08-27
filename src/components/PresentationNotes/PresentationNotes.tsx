import { useDeferredValue, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import SlideNote from './SlideNote';

export type PresentationNotesProps = {
  slideId: string;
};

function PresentationNotes({ slideId }: PresentationNotesProps) {
  const [notes, saveNotes] = useLocalStorage<Record<string, string>>(
    'notes',
    {}
  );
  const [note, setNote] = useState<string>(notes?.[slideId] || '');
  const deferredNote = useDeferredValue(note);

  useEffect(() => {
    if (notes?.[slideId] !== deferredNote) {
      saveNotes((prev) => ({ ...prev, [slideId]: deferredNote }));
    }
  }, [deferredNote, slideId, notes, saveNotes]);

  return <SlideNote slideNote={note} onNoteChange={setNote} />;
}

export default PresentationNotes;
