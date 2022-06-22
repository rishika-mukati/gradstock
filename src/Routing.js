import React from 'react'
import Home from './pages/Home';
import Subject from './pages/Subject';
import Books from './pages/Books';
import TutorList from './pages/TutorList';
import Blog from './pages/Blog';
import SchoolList from './pages/SchoolList';
import About from './pages/About';
import HowitWorks from './pages/HowitWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofService from './pages/TermsofService';
import TrustAndQuality from './pages/TrustAndQuality';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleBlog from './pages/SingleBlog';
import TutorProfile from './pages/TutorProfile';

function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/school-list" element={<SchoolList />} />
                <Route path="/subject" element={<Subject />} />
                <Route path="/books" element={<Books />} />
                <Route path="/tutor-list" element={<TutorList />} />
                <Route path="/tutor-profile" element={<TutorProfile />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/singleblog" element={<SingleBlog />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms-and-service" element={<TermsofService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/how-it-works" element={<HowitWorks />} />
                <Route path="/trust-and-quality" element={<TrustAndQuality />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routing
