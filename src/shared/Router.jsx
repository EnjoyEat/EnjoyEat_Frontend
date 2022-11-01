import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "pages/UserPage";
import MainPage from "pages/MainPage";
import PostingPage from "pages/PostingPage";
import { GlobalStyle } from "util/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<UserPage />} />
        <Route path="/:id/create" element={<PostingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
