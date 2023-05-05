import './ImageList.css'

import ImageShow from './ImageShow'

function ImageList({ imageProp }) {
  const showImages = imageProp.map((oneImage) => {
    // oneImage is an object
    return <ImageShow imageInfo = {oneImage}/>
  });

  return <div className="grid-container">
    <div className="image" >{showImages}</div>
  </div>
}

export default ImageList;
