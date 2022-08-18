import React, {useState} from 'react';

function UserImage() {
  const [photo, setPhoto] = useState({});
  
  const handlePhoto = (e) => {
    const file = e.target.files[0], reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => setPhoto(reader.result);
  }

  return (
    <div>
      <div style={{backgroundImage: `url(${photo})`}}></div>
      <label htmlFor="photo"></label>
      <input accept='image/*' type="file" name="photo" id="photo" onChange={(e) => handlePhoto(e)} />
    </div>
  )
}

export default UserImage;