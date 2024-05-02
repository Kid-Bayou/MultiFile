import { useNavigate } from "react-router-dom";

const UpdateFile: React.FC = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/successpage");
  };

  return (
    <>
      <div className="update-file-container">
        <h2>Update File</h2>
        <form onSubmit={handleUpdate} className="update-file-form">
          <div className="update-file-textarea">
            <label>Description:</label>
            <textarea />
          </div>
          <div className="update-file-textarea">
            <label>Select File:</label>
            <input type="file" />
          </div>

          <button>Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateFile;
