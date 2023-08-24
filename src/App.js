
import {Routes, Route}  from "react-router-dom";
import './App.css';
import Homepage from './pages/Home/Homepage';
import ArticleInfo from './pages/ArticleInfo/ArticleInfo';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage/>}/>
        <Route index path="/blog/:id" element={<ArticleInfo/>}/>
      </Routes>
      

      
      
    </div>
  );
}

export default App;
