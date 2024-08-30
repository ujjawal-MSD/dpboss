import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const Padmavati = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET');
      console.log('Response:', response);
      setHtmlData(response.Padmavati);
      console.log('htmlData:', response.Padmavati);
    }
    fetchData();
  }, []);

  return (
    // <div dangerouslySetInnerHTML={{ __html: htmlData }} />

    <>
    <h1>Welcome to WOLF244</h1>
    </>
  );
}

export default Padmavati;