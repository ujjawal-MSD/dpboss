import { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';
import parse from 'html-react-parser';

const SitaDay = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/SitaDay')
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.SitaDay)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
  <div>{parse(htmlData)}</div>
  );
}

export default SitaDay;