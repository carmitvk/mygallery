


function initCa(){
    renderProjs()
}

function renderProjs() {
    var projs = getProjs();
    var strHTMLs = projs.map(function (proj) {
        var OneRow =
        `<div class="col-md-4 col-sm-6 portfolio-item my-proj" onclick="openModal('${proj.id}')">
          <a class="portfolio-link" data-toggle="modal" > 
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.url}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-dark">${proj.title}</p>
          </div>
      </div>`

        return OneRow;
    }).join('')
    document.querySelector('.my-rows').innerHTML = strHTMLs;  
}

function openModal(projId){
    var proj = getProjById(projId);
    document.querySelector('.portfolio-modal h2').textContent = proj.name;
    document.querySelector('.portfolio-modal .item-intro').textContent = proj.title;
    document.querySelector('.portfolio-modal .img-fluid').src = proj.url;
    document.querySelector('.portfolio-modal .my-desc').textContent = proj.desc;
    document.querySelector('.my-date').textContent = proj.publishedAt;
    document.querySelector('.my-lables').textContent = proj.lables;
    
    $('#open-game-id').click(function () {
        window.open(proj.gameUrl);
        })

    $('#my-modal-id').modal('show');
}

function onOpenCV(){
    console.log('HIII');
    window.open("cv/cv.pdf");
}

