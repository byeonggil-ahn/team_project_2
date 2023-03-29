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

const btn = document.querySelectorAll('.members button'),
    memberBox = document.querySelector('.member_box'),
    nonMemberBox = document.querySelector('.non_member_box'),
    box = document.querySelectorAll('form .box');



btn[0].addEventListener('click', () => {
    memberBox.classList.add('show');
    nonMemberBox.classList.remove('show');
    
    btn[0].classList.add('visible');
    btn[1].classList.remove('visible');
});

btn[1].addEventListener('click', () => {
    nonMemberBox.classList.add('show');
    memberBox.classList.remove('show');

    btn[1].classList.add('visible');
    btn[0].classList.remove('visible');
});


/*
if문을 추가하여 로그인 버튼을 눌렀을 때 현재 보여지는 화면이 회원창인지 비회원 창인지
구분하고, 해당되는 창에서만 코드가 구현되게 만들면 된다.

memberBox와 nonMemberBox로 각각 회원 비회원 로그인의 div를 선택.
currentBox로 현재 보여지는 화면이 회원인지 비회원인지 구분한 다음에
if문으로 currentBox가 member경우에 맴버 아이디, 비번관련 코드를,
non-member일 경우에 비회원 id와 비번 관련 코드를 실행되게 만듬
*/

document.querySelector("#send").addEventListener("click", function(event) {
    var memberBox = document.querySelector('.member_box');
    var nonMemberBox = document.querySelector('.non_member_box');
    var currentBox;

    if (memberBox.classList.contains('show')) {
        currentBox = 'member';
    } else if (nonMemberBox.classList.contains('show')) {
        currentBox = 'non-member';
    }

    if (currentBox === 'member') {
        // 회원폼
        var noId = document.querySelector("input[class=member_id]");
        var noPw = document.querySelector("input[class=member_pw]");
        var warningId_mem = noId.parentNode.querySelector(".warning_id");
        var warningPw_mem = noPw.parentNode.querySelector(".warning_pw");

        if (noId.value.trim() === "") {
            event.preventDefault();
            warningId_mem.style.display = "block";
            return false;
        } else {
            warningId_mem.style.display = "none";
        }

        if (noPw.value.trim() === "") {
            event.preventDefault();
            warningPw_mem.style.display = "block";
            return false;
        } else {
            warningPw_mem.style.display = "none";
        }
    } else if (currentBox === 'non-member') {
        // 비회원 폼
        var noMemberid = document.querySelector("input[class=non_member_id]");
        var noMemberpw = document.querySelector("input[class=non_member_pw]");
        var warningPw_noMem = noMemberpw.parentNode.querySelector(".warning_pw");
        var warningId_nonMem = noMemberid.parentNode.querySelector(".warning_id");

        if (noMemberid.value.trim() === "") {
            event.preventDefault();
            warningId_nonMem.style.display = "block";
            return false;
        } else {
            warningId_nonMem.style.display = "none";
        }

        if (noMemberpw.value.trim() === "") {
            event.preventDefault();
            warningPw_noMem.style.display = "block";
            return false;
        } else {
            warningPw_noMem.style.display = "none";
        }
    }
})
