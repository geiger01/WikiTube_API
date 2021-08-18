'use strict';
const API_KEY = 'AIzaSyBBMyNo3xb6bCD-JBRvaubzgpmxcf4d5BY';

function getVids(func, searchWord = '') {
  const prm = axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchWord}`
  );

  prm.then((res) => {
    console.log(res);
    func(res.data.items);
  });

  prm.catch((err) => {
    console.log(err);
  });
}

function getWikiInfo(func, searchWord = '') {
  const prm = axios.get(
    `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchWord}&format=json`
  );

  prm.then((res) => {
    func(res.data.query.search[0]);
  });

  prm.catch((err) => {
    console.log(err);
  });
}
