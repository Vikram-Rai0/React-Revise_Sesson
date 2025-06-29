import React, { useState } from 'react';
import axios from "axios";

const FileHandeling = () => {
    const [files, setFiles] = useState(null);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [msg, setMsg] = useState(null);
    const [uploading, setUploading] = useState(false);

    function handleUpload() {
        if (!files || files.length === 0) {
            setMsg("Please select file(s) first.");
            return;
        }

        const fd = new FormData();
        for (let i = 0; i < files.length; i++) {
            fd.append('files', files[i]);
        }

        setMsg("Uploading...");
        setProgress({ started: true, pc: 0 });
        setUploading(true);

        axios.post('http://httpbin.org/post', fd, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(prev => ({ ...prev, pc: percentCompleted }));
            },
            headers: {
                "Content-Type": 'multipart/form-data',
                "Custom-Header": "value",
            }
        })
            .then(res => {
                setMsg("Upload successful");
                console.log(res.data);
            })
            .catch(err => {
                setMsg("Upload failed");
                console.error(err);
            })
            .finally(() => {
                setUploading(false);
            });
    }

    function handleFileChange(e) {
        setFiles(e.target.files);
        setMsg(null);
        setProgress({ started: false, pc: 0 });
    }

    return (
        <div>
            <h1>Uploading Files</h1>
            <input type="file" multiple onChange={handleFileChange} />

            {/* Display selected file names */}
            {files && (
                <ul>
                    {Array.from(files).map((file, idx) => (
                        <li key={idx}>{file.name}</li>
                    ))}
                </ul>
            )}

            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
            </button>

            {progress.started && (
                <progress max="100" value={progress.pc}></progress>
            )}

            {msg && <div>{msg}</div>}
        </div>
    );
};

export default FileHandeling;
