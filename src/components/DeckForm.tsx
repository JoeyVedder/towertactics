import { useState } from 'react';

const DeckForm = ({ addDeck }: {addDeck: (deck: any) => void }) => {
    const [name, setName] = useState('');
    const [cards, setCards] = useState<string[]>([]);

    const handleAddDeck = () => {
        addDeck({name, cards});
        setName('');
        setCards([]);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Deck Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleAddDeck}>Save Deck</button>
        </div>
    );
};

export default DeckForm;