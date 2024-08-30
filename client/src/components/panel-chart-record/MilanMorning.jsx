import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const MilanMorning = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/MilanMorning');
      setHtmlData(response.MilanMorning);
    }
    fetchData();
  }, []);

  return (
    <div>{parse(htmlData)}</div>
  );
}

export default MilanMorning;
