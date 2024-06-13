import React from "react";
import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    fetch("all_video_downloader.apk").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "all_video_downloader.apk";
        alink.click();
      });
    });
  }, []);

  return <div></div>;
};

export default Download;
