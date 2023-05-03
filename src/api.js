import axios from 'axios';

const searchImages = async (term) => {
  const raisin = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 7g-WYXJYapqLTv3SxumgihnM6MUW3Bgldr-qcCXpm2Y'
    },
    params: {
      query: term,
    }
  });

  console.log(raisin.data.results)

  return raisin.data.results;
};

export default searchImages;
