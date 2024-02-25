import React, { useState, useEffect } from 'react';
import sharp from 'sharp';

const ImageResizer = ({ imagePath, newWidth, newHeight }) => {
  const [resizedImage, setResizedImage] = useState(null);

  useEffect(() => {
    // Resmi yeniden boyutlandırma işlemi
    const resizeImage = async () => {
      try {
        const resizedBuffer = await sharp(imagePath)
          .resize(newWidth, newHeight)
          .toBuffer();

        // Yeniden boyutlandırılmış resmi state'e kaydet
        setResizedImage(resizedBuffer);
      } catch (error) {
        console.error('Resim yeniden boyutlandırma hatası:', error);
      }
    };

    resizeImage();
  }, [imagePath, newWidth, newHeight]);

  return (
    <div>
      <h2>Yeniden Boyutlandırılmış Resim</h2>
      {resizedImage && (
        <img
          src={`/assets/Card.jpeg;base64,${resizedImage.toString('base64')}`}
          alt="Yeniden Boyutlandırılmış Resim"
        />
      )}
    </div>
  );
};

export default ImageResizer;
