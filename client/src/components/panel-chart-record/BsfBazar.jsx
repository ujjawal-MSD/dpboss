import React, {useState, useEffect} from 'react'
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const BsfBazar = () => {
    const [htmlData, setHtmlData] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await sendRequest('GET', '/BSFBazar')
          .catch((error) => {
            console.error('Error:', error.message);
          }); 
        // console.log('Api Call');
        setHtmlData(response.BSFBazar)
        console.log('got response');
      }
      fetchData();
    }, []);
  
    return (
    <div>{parse(htmlData)}</div>
    );
  }

export default BsfBazar