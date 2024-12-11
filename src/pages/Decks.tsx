import { useState } from 'react';
import DeckForm from '../components/DeckForm';

const Decks = () => {
  const [decks, setDecks] = useState<any[]>([]);

  const addDeck = (deck: any) => {
    setDecks([...decks, deck]);
  };

  return (
    <div>
      <h1>Manage Your Decks</h1>
      <DeckForm addDeck={addDeck} />
      <ul>
        {decks.map((deck, index) => (
          <li key={index}>{deck.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Decks;
