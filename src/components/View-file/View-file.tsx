import "./View-file.css"
import { useState } from "react"


import { Box, Button, Typography } from '@mui/material';
import React from "react";

interface UploadedFile {
  name: string;
  url: string;
}

const FileUploadComponent: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const newFiles = filesArray.map(file => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
    }
  };

  return (
    <Box>
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Upload Files
        </Button>
      </label>

      <Box mt={4}>
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1">
                {file.name}
              </Typography>
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                View Document
              </a>
            </Box>
          ))
        ) : (
          <Typography>No files uploaded yet.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default FileUploadComponent;