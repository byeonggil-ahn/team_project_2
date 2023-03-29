//show search bar when clicked
const searchBtn = document.querySelector('.search_btn');
const input = document.querySelector('.search_bar');
searchBtn.addEventListener('click', ()=>{
    input.classList.toggle('visible');
    input.focus();
})

//searchbar_value
const search = document.querySelector('.search_form');
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        onSearch();
    }
})

function onSearch(){
    const text = input.value;
    if(text === ''){
        alert('검색어를 입력해주세요');
        input.focus();
        return;
    }

    console.log(text);
    alert(`검색 기능은 추후 추가 예정 검색한 값은 ${text}입니다`)

    /**
     * to - do
     * input value값과 비교하여 검색 로직
    */

    input.value = '';
    input.focus();

}

// scroll top when clicked
const pageUpBtn = document.querySelector('.up');
const home = document.querySelector('#header');
pageUpBtn.addEventListener('click', ()=>{
    home.scrollIntoView({behavior: "smooth"})
})