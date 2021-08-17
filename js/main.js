'use strict';

function onInit() {
  getVids(renderVids);
  getWikiInfo(renderWikiInfo, 'Bill Withers');
}

function renderVids(vids) {
  let strHtml = '';

  vids.map((vid, idx) => {
    strHtml += `

        <div onclick="onVideoSelect('${vid.id.videoId}','${vid.snippet.title})" class="video">
          <div class="video-content">
            <img src="${vid.snippet.thumbnails.default.url}" alt="" />
            <h3>${vid.snippet.title}</h3>
          </div>
        </div>
    
    `;
  });

  document.querySelector('.videos-select-container').innerHTML = strHtml;
}

function renderWikiInfo(info) {
  let strHtml = `
   <h3>${info.title}</h3>
          <p>
           ${info.snippet}
          </p>
          `;
  document.querySelector('.wiki-info').innerHTML = strHtml;
}

function onSearch(word) {
  getVids(renderVids, word);
  getWikiInfo(renderWikiInfo, word);
}

function onVideoSelect(videoId, searchWord) {
  document.querySelector(
    'iframe'
  ).src = `https://www.youtube.com/embed/${videoId}`;
  getWikiInfo(renderWikiInfo, searchWord);
}
