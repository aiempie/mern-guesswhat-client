const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const ApiUrl = (api) => {
  return `${backendUrl}/api/v1${api}`;
};

export default ApiUrl;
