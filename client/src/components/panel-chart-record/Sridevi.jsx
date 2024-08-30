import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const Sridevi = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', 'Sridevi');
      console.log('Response:', response);
      setHtmlData(response.Sridevi);
      console.log('htmlData:', response.Sridevi);
    }
    fetchData();
  }, []);

  return (
  <div>{parse(htmlData)}</div>
  );
}

export default Sridevi;