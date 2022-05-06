import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import PublishPitchDeck from './publishPitchDeck';
import ListPitchDecks from './listPitchDecks';
import PitchDeck from './pitchDeck';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publish-pitch-deck' element={<PublishPitchDeck />} />
        <Route path='/list-pitch-decks' element={<ListPitchDecks />} />
        <Route path='/pitch-deck/:id' element={<PitchDeck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
