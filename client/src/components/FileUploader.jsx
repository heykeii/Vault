import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setProgress(0); // Reset progress when a new file is picked
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setIsUploading(true);

    try {
      const result = await uploadData({
        // This dynamically maps to the user's private folder in S3
        path: ({ identityId }) => `private/${identityId}/${file.name}`,
        data: file,
        options: {
          // Monitor the upload progress in real-time
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const pct = Math.round((transferredBytes / totalBytes) * 100);
              setProgress(pct);
            }
          },
        },
      }).result;

      console.log('Succeeded: ', result);
      alert('File uploaded to your Vault!');
      setFile(null); // Clear after success
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed. Check the console for details.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff', maxWidth: '600px', margin: '20px' }}>
      <h3 style={{ color: '#333' }}>Upload to Vault</h3>
      <input type="file" onChange={handleFileChange} disabled={isUploading} />
      
      {file && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleUpload} disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Start Upload'}
          </button>
        </div>
      )}

      {isUploading && (
        <div style={{ marginTop: '15px' }}>
          <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '4px' }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '10px', 
              backgroundColor: '#4caf50', 
              borderRadius: '4px',
              transition: 'width 0.3s'
            }} />
          </div>
          <p>{progress}% completed</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
