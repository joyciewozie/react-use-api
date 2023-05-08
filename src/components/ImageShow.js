function ImageShow( {imageInfo} ) {
  return <img src={imageInfo.urls.small} alt={imageInfo.alt_description} />

}

export default ImageShow;
