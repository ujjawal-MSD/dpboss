import { useEffect, useState } from 'react';
import { sendRequest } from '../utils/Axios';
import parse from 'html-react-parser';

const Home = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('POST', '/get-html',{url:"/"})
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.html)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
  <div>{parse(htmlData)}</div>
  );
}

export default Home;