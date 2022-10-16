import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from 'pages/UserPage';
import MainPage from 'pages/MainPage';
import PostingPage from 'pages/PostingPage';
import { GlobalStyle } from 'util/GlobalStyle';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/스윙스" element={<UserPage />} />
        <Route path="/스윙스/create" element={<PostingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
