'use strict';

var gProjsData = [
    { id: 'numbers', desc: 'learning the sequence of numbers', lables: ['learning sequence of numbers', 'numbers', 'educational games'], gameUrl: 'bbb' },
    { id: 'ball-board', desc: 'catch balls', lables: ['ball-board', 'ball', 'fun games'], gameUrl: 'aaa' },
    { id: 'minesweeper', desc: 'open all cells, watch out of mines', lables: ['fun games', 'mines', 'mines sweeper'], gameUrl: ' https://carmitvk.github.io/sprint1/.' },
    { id: 'packman', desc: 'game of quick moves', lables: ['packman', 'fun games'], gameUrl: 'bbb' },
    { id: 'shopBooks', desc: 'manage a books shop', lables: ['shopBooks', 'fun games', 'books'], gameUrl: 'bbb' }
];

var gProjs;
createModals();

function createModals() {
    // var projs = loadFromStorage(KEY)
    // if (!projs || !projs.length) {
    var projs = [];

    for (var i = 0; i < gProjsData.length; i++) {
        var projData = gProjsData[i]
        projs.push(_createProj(projData));
    }
    // }
    gProjs = projs;
    // if will be added dynamiclly   _saveprojsToStorage();
}


function _createProj(projData) {

    var date = new Date();
    var modal =
    {
        id: projData.id,
        name: projData.id,
        title: projData.id + ' Game',
        desc: projData.desc,
        url: 'img/portfolio/' + projData.id + '.jpg',
        publishedAt: date,
        labels: projData.lales,
        gameUrl: projData.gameUrl
    };
    return modal;
}


function getProjs() {
    return gProjs;
}

function getProjById(id) {
    var idx = gProjs.findIndex(function (proj) {
        return !id.localeCompare(proj.id)
    })
    if (idx === -1) return false;
    return gProjs[idx];
}