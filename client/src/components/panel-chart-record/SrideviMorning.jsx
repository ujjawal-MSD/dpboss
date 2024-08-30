import React, { useState, useEffect } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const SrideviMorning = () => {
    const [htmlData, setHtmlData] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await sendRequest('GET', '/SrideviMorning')
          .catch((error) => {
            console.error('Error:', error.message);
          });
        // console.log('Api Call');
        setHtmlData(response.SrideviMorning)
        console.log('got response');
      }
      fetchData();
    }, []);
  
    return (
    <div>{parse(htmlData)}</div>
    );
  }

export default SrideviMorning