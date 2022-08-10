import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Blog from './components/blog/Blog';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header'
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Price from './components/pricing/Price';
import Team from './components/team/Team';








function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/courses' element={<CourseHome />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/pricing' element={<Price />}></Route>
          <Route path='/journal' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
