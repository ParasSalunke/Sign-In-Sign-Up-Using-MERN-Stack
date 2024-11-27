// src/pages/Welcome.jsx
import { Card, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (clear session/localStorage if needed)
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-8 shadow-xl">
        <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
          Welcome!
        </Typography>
        <Typography className="text-center mb-6">
          Thank you for logging in.
        </Typography>
        <Button
          color="red"
          className="mt-4"
          onClick={handleLogout}
          fullWidth
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Welcome;