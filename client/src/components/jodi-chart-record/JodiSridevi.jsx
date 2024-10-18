import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const JodiSridevi = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/JodiSridevi');
      console.log('Response:', response);
      setHtmlData(response.JodiSridevi);
      console.log('htmlData:', response.JodiSridevi);
    }
    fetchData();
  }, []);

  return (
    <div>{parse(htmlData)}</div>
  );
}

export default JodiSridevi;