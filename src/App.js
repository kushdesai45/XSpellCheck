import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example',
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const words = text.toLocaleLowerCase().split(' ');

    const firstWrongWord = words.find((word) => customDictionary[word]);

    if (firstWrongWord) {
      setSuggestion(`Did you mean: ${customDictionary[firstWrongWord]}?`);
    } else {
      setSuggestion(''); 
    }
  }, [text]);

  return (
    <div className="spell-check-container">
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Type here to check spelling..."
        rows={6}
        cols={40}
      ></textarea>
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
