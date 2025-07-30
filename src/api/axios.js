// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api', 
// });

// export default instance;





import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // for Vite projects
});

export default instance;
