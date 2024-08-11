import CardEditor from './CardEditor';
import { useState } from 'react';

const Play = () => {
    const [card, setCard] = useState(null);

    const getRandomCard = () => {
        let num = Math.floor(Math.random() * 100) + 1;
        setCard({
            name: `Random Card #${num}`,
            type: 'Trap',
            effect: "A random effect",
            icon: 'https://picsum.photos/200/300?random=' + num
        });
    };

    const handleCardSubmit = (newCard) => {
        setCard(newCard);
    };

    return (
        <div>
            <h1 className="text-3xl block p-10 text-gray-900 rounded dark:border-gray-700 text-center ">Play Here</h1>
            <CardEditor card={card} onSubmit={handleCardSubmit} />
            <button className="mt-10 p-5 rounded-lg bg-blue-500 hover:bg-blue-700 text-white" onClick={getRandomCard}>Get a Random Card</button>
        </div>
    );
}

export default Play;

