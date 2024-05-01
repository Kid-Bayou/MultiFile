import { useNavigate } from "react-router-dom";

const SuccessPage: React.FC = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/")
  }
  
    return (
      <>
          <h2>Transaction was a success</h2>
          <button onClick={handleHome}>Back to Home</button>
      </>
    );
  };
  
  
  export default SuccessPage;
  