
import Error from '../components/Error';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import DetailLogement from '../pages/DetailLogement';
import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
            <Route path="/logements/:logementId" element={<DetailLogement />} />
        </Routes>

    )
}

export default Router

