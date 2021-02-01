


function initCa(){
    renderProjs()
}

function renderProjs() {
    var projs = getProjs();
    var strHTMLs = projs.map(function (proj) {
        var OneRow =
        `<div class="row" onclick="openModal('${proj.id}')">
        <div class="col-md-4 col-sm-6 portfolio-item">
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
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
      </div>`

        return OneRow;
    }).join('')
    document.querySelector('.my-row').innerHTML = strHTMLs;






    
}

function openModal(projId){

    var proj = getProjById(projId)

    // document.querySelector('.portfolio-modal id').textContent = proj.id
    document.querySelector('.portfolio-modal h2').textContent = proj.name;
    document.querySelector('.portfolio-modal .item-intro').textContent = proj.title;
    document.querySelector('.portfolio-modal .img-fluid').src = proj.url;
    document.querySelector('.portfolio-modal .my-desc').textContent = proj.desc;
    document.querySelector('.my-date').textContent = proj.publishedAt;
    document.querySelector('.my-lables').textContent = proj.lables;
    // $('.portfolio-modal').show();
    $('#my-modal-id').modal('show');
}

