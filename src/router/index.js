import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as pages from '../pages'
import TestContainer from '../containers/test'

export default function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TestContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}