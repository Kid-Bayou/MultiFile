import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileList from './FileList';
import DeleteFile from './DeleteFile';
import UpdateFile from './UpdateFile';
import SuccessPage from './SuccessPage';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <img src={logo} className="logo" alt="Logo" />
        <h1>Multi File Uploader</h1>
        <Routes>
          <Route path="/" element={<FileList />} />
          <Route path="/deletefile" element={<DeleteFile />} />
          <Route path="/updatefile" element={<UpdateFile />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
