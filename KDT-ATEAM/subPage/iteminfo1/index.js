'use strict';

const reviewButtons = document.querySelectorAll('.review_Ul_box_li');
const reviewChilds = document.querySelectorAll('.reviewchild');

// 항상 첫 번째 내용은 표시
reviewChilds[0].style.display = 'block';

for (let i = 0; i < reviewButtons.length; i++) {
    reviewButtons[i].addEventListener('click', () => {
        // 모든 내용을 숨김
        for (let j = 0; j < reviewChilds.length; j++) {
            reviewChilds[j].style.display = 'none';
        }
        // 해당 버튼과 연결된 내용을 표시
        reviewChilds[i].style.display = 'block';
    });
}

const productArr = new Object();

const productName = document.querySelector('.product-title').textContent;
const productValue = document.querySelector('#productValue');
const productAroma = document.querySelector('#aroma').textContent;
//productValue.value -> 이게 상품 갯수를 나타내는 변수

//상품가격
const price = document.querySelector('.new-price-value');
const pp = document.querySelector('.last-price').textContent;
let newPp = Number(pp).toLocaleString();
// document.querySelector('.last-price span').innerHTML = newPp + " 원";
// price.innerHTML = (pp * .9).toLocaleString() + " 원"

//장바구니에 담기
const cart = document.querySelector('#btn_cart');
cart.addEventListener('click', function() {
    alert('상품을 장바구니에 담았습니다.');
    //누른 상품명, 수량을 로컬스토리지에 담아둬야 한다.
    productArr.pName = productName;
    productArr.pValue = productValue.value;
    productArr.pAroma = productAroma;
    productArr.pPrice = (pp);
    //이 구간부터 상품arr를 json으로 변환하여 로컬스토리지에 저장하는 코드
    /*
    1. productArr를 json으로 변환하여 저장
    2. 변환한 새로운 array를 로컬스토리지에 저장
    */
    let newProduct = JSON.stringify(productArr);
    localStorage.setItem('product', newProduct);
})
