function ImageShow( {imageInfo} ) {
  return (
  <div>
    <img src={imageInfo.urls.small} alt={imageInfo.alt_description} />
  </div>)
}

export default ImageShow;
