import { useNavigate } from "react-router-dom";

const AddFile: React.FC = () => {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/successpage");
    }
  
    return (
      <>
          <h2>Add File</h2>
          <button onClick={handleAdd}>Add</button>
      </>
    );
  };
  
  
  export default AddFile;
  