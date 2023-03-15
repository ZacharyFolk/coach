import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/user';

export default function Form() {
  const location = useLocation();
  const [invalidUser, setInvalidUser] = useState('');
  const [busy, setBusy] = useState(true);

  const verifyToken = async () => {
    try {
      const { token, id } = queryString.parse(location.search);
      const { data } = await axios(
        `${baseUrl}/verify-token?token=${token}&id=${id}`
      );

      if (!data.success) return setInvalidUser(data.error);
      setBusy(false);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setInvalidUser(data.error);
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  if (invalidUser)
    return (
      <div>
        <h1>{invalidUser}</h1>
      </div>
    );
  if (busy)
    return (
      <div>
        <h1>Wait for a moment, verification in progress.</h1>
      </div>
    );
  return (
    <div className='form-container'>
      <h1>Reset Your Password</h1>
      <form action=''>
        <input type='password' placeholder='********' />
        <input type='password' placeholder='********' />
        <input type='submit' value='Reset Password' />
      </form>
    </div>
  );
}
