import './ImageList.css'

import ImageShow from './ImageShow'

function ImageList({ imageProp }) {
  const showImages = imageProp.map((oneImage) => {
    // oneImage is an object
    return <ImageShow imageInfo = {oneImage}/>
  });

  return <div className="grid-container">
    {showImages}
  </div>
}

export default ImageList;
