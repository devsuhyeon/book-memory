import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import MyBooks from './pages/MyBooks';
import Review from './pages/Review';
import AddReview from './pages/AddReview';
import EditReview from './pages/EditReview';
import BookDetails from './pages/BookDetails';
import SearchBooks from './pages/SearchBooks';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader text="My Books" />
        <Routes>
          <Route path="/" element={<MyBooks />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review/edit" element={<EditReview />} />
          <Route path="/review/add" element={<AddReview />} />
          <Route path="/book/details" element={<BookDetails />} />
          <Route path="/book/search" element={<SearchBooks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
