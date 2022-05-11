import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './home';
import ListPitchDecks from './listPitchDecks';
import NotFound from './notFound';
import PitchDeck from './pitchDeck';
import PublishPitchDeck from './publishPitchDeck';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/publish-pitch-deck' element={<PublishPitchDeck />} />
          <Route path='/list-pitch-decks' element={<ListPitchDecks />} />
          <Route path='/pitch-deck/:id' element={<PitchDeck />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer
          position='top-center'
          closeOnClick
          closeButton={false}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
