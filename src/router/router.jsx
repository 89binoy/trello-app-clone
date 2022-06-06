import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardDetails from '../pages/BoardDetails';
import Boards from '../pages/Boards';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Boards />} />
                <Route path = '/:boardId' element = {<BoardDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router