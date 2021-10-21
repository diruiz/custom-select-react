import React, { useState } from "react";
import './App.css';

function App() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsListOpen(false);
    console.log(selectedOption);
};

  const toggle = () => { setIsListOpen(!isListOpen) };
  return (
    <div class="main">
        <h1>Custom select/dropdown</h1>
        <div class="select-container">
            <div class="select-header" onClick={toggle}> {selectedOption}</div>
            { isListOpen && (
              <ul class="select-style">
                <li class="select-item" onClick={onOptionClicked('item 1')} >item 1</li>
                <li class="select-item" onClick={onOptionClicked('item 2')} >item 2</li>
                <li class="select-item" onClick={onOptionClicked('item 3')} >item 3</li>
                <li class="select-item" onClick={onOptionClicked('item 4')} >item 4</li>
                <li class="select-item" onClick={onOptionClicked('item 5')} >item 5</li>
                <li class="select-item" onClick={onOptionClicked('item 6')} >item 6</li>
                <li class="select-item" onClick={onOptionClicked('item 7')} >item 7</li>
                <li class="select-item" onClick={onOptionClicked('item 8')} >item 8</li>
                <li class="select-item" onClick={onOptionClicked('item 9')} >item 9</li>
                <li class="select-item" onClick={onOptionClicked('item 10')} >item 10</li>
              </ul>
            )
          }
        </div>
    </div>
  );
}

export default App;
