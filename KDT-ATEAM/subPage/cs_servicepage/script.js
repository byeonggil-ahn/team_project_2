const searchInput = document.getElementById('searchInput'),
    accordianItem = document.querySelectorAll('.accordion-header'),
    searchButton = document.querySelector('.search-icon');

//입력값을 저장 해둘 변수
let searchValue = '';

function handlerSearchInput(event) {
    searchValue = event.target.value;
}

searchInput.addEventListener('click', function(event) {
    //입력된 단어
    let searchWord = event.target.value.toLowerCase();

    //아코디언 해더를 순회하면서 검색어와 일치하는 해더를 찾아서 표시한다.
    for(let i=0; i<accordianItem.length; i++) {
        let headerText = accordianItem[i].textContent;

        if(headerText.includes(searchWord)) {
            accordianItem[i].style.display = 'block';
        } else {
            accordianItem[i].style.display = 'none';
        }
    }
});

// 엔터를 입력하면 검색어를 찾아서 해더를 표시한다.
searchInput.addEventListener('keyup', function(event) {
    // Enter키 입력을 확인
    if (event.key === 'Enter') {
        //입력된 단어
        let searchWord = searchInput.value.toLowerCase();

        //아코디언 해더를 순회하면서 검색어와 일치하는 해더를 찾아서 표시한다.
        for(let i=0; i<accordianItem.length; i++) {
            let headerText = accordianItem[i].textContent;

            if(headerText.includes(searchWord)) {
                accordianItem[i].style.display = 'block';
            } else {
                accordianItem[i].style.display = 'none';
            }
        }
    }
});



//Catch category btn

const categoryBtn = document.querySelector('.button_box');
const dropContainer = document.querySelector('.accordion_container');
const dropItems = document.querySelectorAll('.accordion');

categoryBtn.addEventListener('click', (e) => {
  const filter =
    e.target.dataset.category || e.target.parentNode.dataset.category;
  if (filter === null || filter === undefined) {
    return;
  }

  //Remove selction prev & select the new one

  const active = document.querySelector('.realbutton.selected');
  active.classList.remove('selected');
  const target = e.target;
  console.log(target);
  target.classList.add('selected');

    dropItems.forEach((item) => {
      if (filter === item.dataset.type) {
        item.classList.remove('item__invisible');
      } else {
        item.classList.add('item__invisible');
      }
    });
});
