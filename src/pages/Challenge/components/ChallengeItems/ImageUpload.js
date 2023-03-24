import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InputLabel, TextField, Button } from '@mui/material';
// import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ImageUpload = ({ onChange }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileElementRef = useRef(null);

  const handleImageChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        onChange(selectedFile);
        console.log('selectedFile: ', selectedFile.name);
        setPreviewImage(reader.result);
      };
    }
  };

  const handleRemoveImage = () => {
    if (fileElementRef.current) {
      fileElementRef.current.value = '';
    }
    setPreviewImage(null);
  };
  return (
    <>
      <div style={{ backgroundColor: 'lightgrey', padding: 10 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
          }}
        >
          {previewImage ? (
            <div>
              <img
                src={previewImage}
                alt="Preview of selected image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              <button onClick={handleRemoveImage}>Remove Image</button>
            </div>
          ) : (
            <div style={{ color: 'white' }}>No Image Selected</div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          id="upload-file"
          name="image-file"
          onChange={handleImageChange}
          ref={fileElementRef}
        />
        <Button>이미지등록</Button>
      </div>
    </>
  );
};

const UploadImageBox = styled.div`
  width: 360px;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4efe5;
  border: 5px solid red;
`;

const UploadFile = styled.input`
  display: none;
  border: 5px solid green;
`;

const PreviewImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 5px solid blue;
  &:hover div {
    filter: blur(8px);
  }
  &:hover label {
    opacity: 1;
  }
`;

const ReImageUploadLabel = styled.label`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  opacity: 0;
  cursor: pointer;
  font-size: 20px;
  background: no-repeat 50% 50% / contain;
`;

const PreviewImage = styled.div`
  background-position: center center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border: 5px solid green;
`;

export default ImageUpload;
