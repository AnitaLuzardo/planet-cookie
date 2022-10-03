import axios from "axios";

const loginApi = async (body) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      body
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default loginApi;
