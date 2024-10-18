import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const Padmavati = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET',  '/Padmavati');
      console.log('Response:', response);
      setHtmlData(response.Padmavati);
      console.log('htmlData:', response.Padmavati);
    }
    fetchData();
  }, []);

  return (
    <div>{parse(htmlData)}</div>
  );
}

export default Padmavati;