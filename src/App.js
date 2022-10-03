import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Pokemon from './pages/pokemon/Pokemon';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='pokemon' element={<Pokemon />}>
                    <Route path=':pokemonId' element={<Pokemon />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
