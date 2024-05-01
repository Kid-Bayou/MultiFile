import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileList from './FileList';
import DeleteFile from './DeleteFile';
import UpdateFile from './UpdateFile';
import SuccessPage from './SuccessPage';
import AddFile from './AddFile';
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
          <Route path="/deletefile/:id" element={<DeleteFile />} />
          <Route path="/updatefile/:id" element={<UpdateFile />} />
          <Route path="/successpage" element={<SuccessPage />} />
          <Route path="/addfile" element={<AddFile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
