import { useNavigate } from "react-router-dom";

const DeleteFile: React.FC = () => {

  const navigate = useNavigate();

    
  const handleDone = () => {
    navigate("/successpage")
  }
  
  return (
    <>
        <h2>Delete File</h2>
        <h3>Are you sure you want to delete this file?</h3>
        <button style={something} onClick={handleDone}>Yes</button>
        <button onClick={handleDone}>No</button>
    </>
  );
};

const something: React.CSSProperties = {
  margin: '20px'
};


export default DeleteFile;
