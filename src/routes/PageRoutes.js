import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import NotFound from '../components/NotFound';
import Books from '../components/Books'
import AddBook from '../components/AddBook';
import Author from '../components/Author';
import BookDetails from '../components/BookDetails';
import SelectedBook from '../components/SelectedBook';
import Book from '../components/Book';



const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>         
            {/* Complete routes here... */}
            <Route path="/books" element={<Books />}/>
            <Route path="/addbook" element={<AddBook />}/>
            <Route path="/authors" element={<Author />}/>
            <Route path="/selectedbooks" element={<SelectedBook />}/>
            <Route path="/books/:id" element={<BookDetails />}/>
            <Route path="*"  element={<NotFound />}></Route>         
        </Routes>
    )
}

export default PageRoutes