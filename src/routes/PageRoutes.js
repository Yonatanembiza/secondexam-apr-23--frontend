import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';



const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>

            {/* Complete routes here... */}
         
        </Routes>
    )
}

export default PageRoutes