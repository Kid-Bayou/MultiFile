import { useNavigate } from "react-router-dom";

const UpdateFile: React.FC = () => {

  const navigate = useNavigate();
  
  const handleUpdate = () => {
    navigate("/successpage")
  }

    return (
      <>
          <h2>Update File</h2>
          <form onSubmit={handleUpdate}>
            <label>Description:</label>
            <textarea />
            <button>Update</button>
          </form>
      </>
    );
  };
  
  
  export default UpdateFile;
  