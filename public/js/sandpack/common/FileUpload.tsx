import React from "react";
interface FileUploadProps {
  accept: string;
  onLoad: (buffer: Uint8Array) => void;
}

/**
 * File input component that reads a binary file and returns a Uint8Array buffer.
 */
function FileUpload({ accept, onLoad }: FileUploadProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const buffer = new Uint8Array(reader.result as ArrayBuffer);
      onLoad(buffer);
    };
    reader.readAsArrayBuffer(file);
  }

  return <input type="file" accept={accept} onChange={handleChange} />;
}

export default FileUpload;
