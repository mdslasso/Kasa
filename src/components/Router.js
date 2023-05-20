
import Error from '../components/Error';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
        </Routes>

    )
}

export default Router

