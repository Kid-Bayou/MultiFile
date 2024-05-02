import { useNavigate } from "react-router-dom";

const AddFile: React.FC = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/successpage");
  };

  return (
    <>
      <div className="add-file-container">
        <h2>Add File</h2>
        <form onSubmit={handleAdd} className="add-file-form">
          <div className="add-file-textarea">
            <label>Description:</label>
            <textarea />
          </div>
          <div className="add-file-textarea">
          <label>Select File:</label>
          <input type="file" />
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default AddFile;
