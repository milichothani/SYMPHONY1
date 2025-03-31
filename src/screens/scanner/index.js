const handleFileChange = (event) => {
    setFile(event.target.files[0]);
};

const handleUpload = async () => {
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await axios.post("http://localhost:5000/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setSongs(response.data.songs);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};

return (
    <div className="screen-container">
        <h2>Image Scanner</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload & Get Songs</button>

        {songs.length > 0 && (
            <div>
                <h3>Recommended Songs:</h3>
                <ul>
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);
