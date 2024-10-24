import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendRequest } from "../utils/Axios";
import NotFoundPage from "../components/NotFoundPage";

const HtmlRenderer = ({ html }) => {
  useEffect(() => {
    const loadScripts = () => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const scripts = tempDiv.querySelectorAll("script");

      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
          newScript.async = true;
        } else {
          newScript.text = script.textContent; // Handle inline scripts
        }

        newScript.onload = () => {
          console.log(`Loaded script: ${newScript.src || "inline script"}`);
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
  const [htmlData, setHtmlData] = useState("");
  const [isHave, setIsHave] = useState(true);

  const cleanedName = window.location.pathname.replace("/", "");

  useEffect(() => {
    const fetchHtmlData = async () => {
      try {
        const response = await sendRequest("POST", `/get-html`, {
          url: cleanedName,
        });
        setHtmlData(response.html);
        console.log("HTML data fetched successfully");
      } catch (error) {
        console.error("Error:", error.message);
        setIsHave(false);
      }
    };

    fetchHtmlData();
  }, [cleanedName]);

  return (
    <div>
      {isHave ? <HtmlRenderer html={htmlData} /> : <NotFoundPage />}
    </div>
  );
};

export default Common;
