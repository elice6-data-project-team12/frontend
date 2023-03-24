import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

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
      <div style={{ backgroundColor: '#FBF7F2', padding: 10 }}>
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
                style={{ width: '380px', height: '280px' }}
              />
              <button onClick={handleRemoveImage}>Remove Image</button>
            </div>
          ) : (
            <div style={{ color: 'white' }}>미 리 보 기</div>
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
      </div>
    </>
  );
};

export default ImageUpload;
