const createImage = imageUrl => {
  const image = document.createElement('img');
  image.alt = 'something cool';
  if (typeof imageUrl === 'string') {
    image.src = imageUrl;
    image.style = {
      width: 480,
      height: 480
    };
  } else {
    // image.srcset = imageUrl.srcset;
    image.src = imageUrl.src;
  }
  return image;
};

export default createImage;
