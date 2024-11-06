import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-red-500 p-3 border border-red-500 rounded">Go to Home</Link>
    </div>
  );
}

export default ErrorPage;