const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-icon');
const accordianItem = document.querySelectorAll('.accordion-header');

//입력값을 저장 해둘 변수
let searchValue = '';

function handlerSearchInput(event) {
    searchValue = event.target.value;
}

// 검색 버튼을 클릭하면 검색어를 찾아서 해더를 표시한다.
searchButton.addEventListener('click', function() {
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


/*
아코디언이 여러개 있는 경우 각각 아코디언에서 버튼을 클릭할 때 해당 아코디언은 활성화되고
다른 아코디언은 비활성화 되게 코드 작성.
*/
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // data-bs-target 속성에서 해당 아코디언 컴포넌트의 ID 값을 가져옴
    const targetId = button.dataset.bsTarget;

    // 해당 아코디언 collapse 를 선택
    const targetCollapse = document.querySelector(targetId);

    // 모든 아코디언 collapse를 선택
    const allCollapses = document.querySelectorAll('.accordion-collapse');

    // 모든 아코디언 컴포넌트의 버튼 요소를 선택합니다.
    const allButtons = document.querySelectorAll('.accordion-button');

    // 선택된 아코디언과 그 외의 컴포넌트 collapse에 대해 toggle 메소드를 사용하여 활성화 및 비활성화를 토글링
    targetCollapse.classList.toggle('show');
    allCollapses.forEach(collapse => {
      if (collapse !== targetCollapse) {
        collapse.classList.remove('show');
      }
    });

    // 선택된 아코디언 컴포넌트와 그 외의 컴포넌트의 버튼 요소에 대해 'collapsed' 클래스를 토글링
    button.classList.toggle('collapsed');
    allButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove('collapsed');
      }
    });
  });
});
