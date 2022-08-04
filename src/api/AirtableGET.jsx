import axios from 'axios';

const APIPOST = 'https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos';

const postData = async () => {
  axios
    .get(APIPOST, {
      headers: {
        Authorization: 'Bearer key83wTk6Qka7Kibs',
      },
    })
    .then((res) => console.log(res.data.records[0]))
    .catch((error) => console.log(error));
};

export { postData };
