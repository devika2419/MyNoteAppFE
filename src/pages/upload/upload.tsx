import * as React from "react";
import "./upload.css";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/navbar";
import DisplayName from "../../components/DisplayName/DisplayName";
import api from "../api/posts";
import { useRef, useState, useEffect } from "react";

interface UploadedFile {
  name: string;
  url: string;
}

export default function UploadPage() {


  const [name, setName] = useState("");
  const [userFiles, setUserFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;  // Ensure there's a token before making requests

      try {
        const response = await api.get('/get-details');
        setName(response.data.name);

        const filesResponse = await api.get('/get-files');
        if (filesResponse.data.success) {
          const files = filesResponse.data.files.map((fileObj: string) => ({
            name: extractNameFromUrl(fileObj),
            url: fileObj,
          }));
          setUserFiles(files);
        } else {
          setUserFiles([]);
        }
      } catch (error) {
        console.error("Error fetching user details or files:", error);
      }
    };

    fetchData();
  }, [token]);

  const extractNameFromUrl = (url: string) => {
    const parts = url.split('/');
    const filename = parts.pop();
    return filename ? filename.split('-').slice(1).join('-') : '';
  };

  const handleFileSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await api.post('/upload', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          const filesResponse = await api.get('/get-files');
          const files = filesResponse.data.files.map((fileObj: string) => ({
            name: extractNameFromUrl(fileObj),
            url: fileObj,
          }));
          setUserFiles(files);
        } else {
          console.error("Failed to upload file:", response.data.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };


  const triggerFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleOpen = (file: UploadedFile) => {
    window.open(file.url);
  };


  return (
    <Box className="main-upload-page">
      <Navbar />
      <Box className="display-component">
        <DisplayName name={name} />
      </Box>

      <Box className="upload-main">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelection}
          style={{ display: "none" }}
        />
        <Button
          className="upload-btn"
          variant="outlined"
          onClick={triggerFileInputClick}
        >
          <Typography style={{ margin: "2%", fontFamily: "Quicksand !important" }}>
            Select File
          </Typography>
        </Button>

        <Box className="files-container">
          {userFiles.map((file) => (
            <Box
              key={file.url}
              onClick={() => handleOpen(file)}
              style={{ cursor: 'pointer', marginBottom: '10px' }}
              className="file-boxes"
            >
              
              <Typography>{file.name}</Typography>
             
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
