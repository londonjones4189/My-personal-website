import React, { useState, useEffect } from 'react';
import { truths, lies } from './truthslies';
import './fonts.css'; 

function getRandomElements(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function Ttl() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [answer, setAnswer] = useState(null);

  const setupGame = () => {
    const selectedTruths = getRandomElements(truths, 2).map(obj => ({
      text: obj.truth,
      type: 'truth',
    }));
    const selectedLie = getRandomElements(lies, 1).map(obj => ({
      text: obj.lie,
      type: 'lie',
    }));
    const allOptions = [...selectedTruths, ...selectedLie].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setSelected(null);
    setAnswer(null);
  };

  useEffect(() => {
    setupGame();
  }, []);

  const handleClick = (option) => {
    if (selected) return;
    setSelected(option.text);
    if (option.type === 'lie') {
      setAnswer('🎉 You win! That was the lie.');
    } else {
      setAnswer(`❌ You lose! "${option.text}" is actually true.`);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto text-center">
      <h3 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">Two Truths and a Lie</h3>
      <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center">Click on the lie to win</h2>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <button
          key={index}
          onClick={() => handleClick(option)}
          disabled={selected !== null}
          className={`
            px-4 py-2 border rounded-lg transition
            text-white
            ${selected === option.text
              ? '!bg-[#D4A5A5] !border-[#D4A5A5]'
              : '!bg-[#2E7C67] !border-[#2E7C67] !hover:bg-[#276353]'}
          `}
        >
          {option.text}
        </button>        
        ))}
      </div>
      {answer && <p className="mt-4 text-lg font-medium">{answer}</p>}
      <button
        onClick={setupGame}
        className="mt-4 px-4 py-2 !bg-[#D4A5A5] !text-white rounded-lg"
      >
        Restart
      </button>
    </div>
  );
}

export default Ttl;
