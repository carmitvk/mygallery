'use strict';

var gProjsData = [
    { id: 'numbers', desc: 'learning the sequence of numbers', lables: [ 'learning sequence of numbers','numbers', 'educational games'] },
    { id: 'ball-board', desc: 'catch balls', lables: ['ball-board', 'ball', 'fun games'] },
    { id: 'minesweeper', desc: 'open all cells, watch out of mines', lables: ['fun games', 'mines', 'mines sweeper'] }
];

var gProjs;
createModals();
console.log(gProjs);

function createModals() {
    // var projs = loadFromStorage(KEY)
    // if (!projs || !projs.length) {
    var projs = [];

    for (var i = 0; i < gProjsData.length; i++) {
        var projData = gProjsData[i]
        projs.push(_createProj(projData.id, projData.desc, projData.labels));
    }
    // }
    gProjs = projs;
    // if will be added dynamiclly   _saveprojsToStorage();
}


function _createProj(id, desc, lales) {

    var date = new Date();
    var modal =
    {
        id: id,
        name: id,
        title: id + 'Game',
        desc: desc,
        url: 'img/portfolio/' + id + '.jpg',
        publishedAt: date,
        labels: lales
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