import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from '../utils/Axios';

const HtmlRenderer = ({ html }) => {
  useEffect(() => {
    const loadScripts = () => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const scripts = tempDiv.querySelectorAll('script');

      scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
          newScript.async = true;
        } else {
          newScript.text = script.textContent; // Handle inline scripts
        }

        newScript.onload = () => {
          console.log(`Loaded script: ${newScript.src || 'inline script'}`);
        };

        newScript.onerror = () => {
          console.error(`Error loading script: ${newScript.src}`);
        };

        document.body.appendChild(newScript);
      });
    };

    loadScripts();
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// Common Component
const Common = () => {
  const { panelName } = useParams(); 
  const [htmlData, setHtmlData] = useState('');

  const cleanPanelName = (name) => {
    return name
      .replace('.php', '') 
      .split('-') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(''); 
  };

  const cleanedName = cleanPanelName(panelName); 


  useEffect(() => {
    const fetchHtmlData = async () => {
      try {
        const response = await sendRequest('GET', `/${cleanedName}`);
        setHtmlData(response[cleanedName]); 
        console.log('HTML data fetched successfully');
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchHtmlData();
  }, [cleanedName]); 

  return (
    <div>
      <HtmlRenderer html={htmlData} />
    </div>
  );
};

export default Common;
