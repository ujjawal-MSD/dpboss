import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const JodiPadmavati = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', 'JodiPadmavati')
      console.log('Response:', response);
      setHtmlData(response.JodiPadmavati);
      console.log('htmlData:', response.JodiPadmavati);
    }
    fetchData();
  }, []);

  return (
  <div>{parse(htmlData)}</div>
  );
}

export default JodiPadmavati;