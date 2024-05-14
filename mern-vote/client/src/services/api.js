// import axios from 'axios';

// const host = 'http://localhost:4000/api';

// export const setToken = token => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

// // export const call = async (method, path, data) => {
// //   const response = await axios[method](`${host}/${path}`, data);
// //   return response.data;
// // };
// // eslint-disable-next-line 
// export const call = async (method, path, data) => {
//   try {
//     const response = await axios[method](`${host}/${path}`, data);
//     return response.data;
//   } catch (error) {
//     // Check if error.response exists and contains data and error properties
//     if (error.response && error.response.data && error.response.data.error) {
//       // If error response has data and error properties, throw that error
//       throw new Error(error.response.data.error);
//     } else {
//       // If not, throw a default error
//       throw new Error("An error occurred while making the request.");
//     }
//   }
// };





// export default { setToken, call };


import axios from 'axios';

const host = 'http://localhost:4000/api';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  console.log(method,path,data);
  try {
    const response = await axios[method](`${host}/${path}`, data);
    return response.data;

    //console.log(response)
  } catch (error) {
    
    if (error.response && error.response.data && error.response.data.error) {
      console.log("error in api:js:59")
      console.log(`${host}/${path}`);
      console.log();(error.response.data.error);
    } else {
      throw new Error("An error occurred while making the request.");
    }
  }
};

export default { setToken, call };
