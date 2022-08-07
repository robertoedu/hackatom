import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/app6wyVEK4ZQbbAzm',
})

api.interceptors.request.use(async config => {
  const Bearer = 'key83wTk6Qka7Kibs';

  if(Bearer) {
    api.defaults.headers.authorization = `Bearer ${Bearer}`;
  }

  return config;
});

export default api ;











// const postData = async (resp) => {
//   axios
//     .get(API, {
//       headers: {
//         Authorization: 'Bearer key83wTk6Qka7Kibs',
//       },
//     })
//     .then((res) => console.log(res.data.records[0]))
//     .catch((error) => console.log(error));
// };

// export { postData };
