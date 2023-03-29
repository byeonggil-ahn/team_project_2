'use strict';
const tbody = document.querySelector('#tbody');

//로컬스토리지에 데이터가 있는지 없는지를 판단하고 있으면 테이블을 추가로 만들어 주기
//일단 다른 선언부 보다 먼저 판단하고 테이블을 만들어주게 해주자
let localData = JSON.parse(localStorage.getItem('product')) || {};

if(localStorage.getItem('product')) {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `
      <!-- 상품 -->
      <th scope="row">
        <div class="d-flex align-items-center">
          <img src="./image/main_gallery_11.jpg" class="img-fluid rounded-3" style="width: 120px;" alt="Product">
          <div class="flex-column ms-4">
            <p class="mb-2">${localData.pName}</p>
            <p class="mb-0">Rubi Red</p>
          </div>
        </div>
      </th>
      <!-- 향 분류 -->
      <td class="align-middle">
        <p class="mb-0" style="font-weight: 500;">${localData.pAroma}</p>
      </td>
      <!-- 수량 버튼 -->
      <td class="align-middle">
        <div class="d-flex flex-row justify-content-center">
          <span class="qt-minus px-2"><i class="fa-solid fa-minus"></i></span>
          <input min="0" name="quantity" value="${localData.pValue}" type="number" class="form-control form-control-sm" style="width: 50px;" />
          <span class="qt-plus px-2"><i class="fa-solid fa-plus"></i></span>
        </div>
      </td>
      <!-- 가격 -->
      <td class="align-middle">
        <p class="mb-0 form-price" style="font-weight: 500;">${localData.pPrice}</p>
      </td>
      <!-- 체크박스 -->
      <td class="align-middle">
        <input type="checkbox" class="form-check-label">
      </td>
  `;
  tbody.appendChild(trElement);
}
//수량을 직접 빈값으로 만드는행위 방어코드
const input = document.querySelector('input[name="quantity"]');


//수량 조절 부분
const qtMinus = document.querySelectorAll('.qt-minus'),
      qtPlus = document.querySelectorAll('.qt-plus'),
      formControl = document.querySelectorAll('.form-control');

//테이블 가격 표기
const formPrice = document.querySelectorAll('.form-price');

//주문내역 가격, 배송비, 최종가격
const price = document.querySelector('.price'),
      tax = document.querySelector('.tax'),
      totalPrice = document.querySelector('.total-price'),
      delCheackBox = document.querySelector('.delCheck');

//선택상품 삭제 버튼
const deleteBtn = document.querySelector('.delete-btn');

//쿠폰
const btnCoupon = document.querySelector('.btnCoupon');

//모든 상품의 총합 가격, priceResult
let priceResult = 0;
for(const price of formPrice) {
  priceResult += parseInt(price.textContent);
}

tax.innerHTML = 4000 + " 원";
  price.innerHTML = priceResult.toLocaleString() + " 원";
  let taxValue = parseInt(tax.textContent);
if (isNaN(taxValue)) {
  taxValue = 0;
}
totalPrice.innerHTML = (taxValue + parseInt(priceResult)).toLocaleString() + " 원";


function nonProductMsg() {
  if(tbody.children.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.setAttribute("colspan", "5");
    td.innerText = "등록된 상품이 없습니다.";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }  
}

nonProductMsg();

function changeVal() {
  let total = 0;
  formPrice.forEach((item, index)=>{
    total += parseInt(formPrice[index].textContent) * parseInt(formControl[index].value);
  });
  price.textContent = total.toLocaleString() + " 원";
  totalPrice.textContent = (parseInt(total) + parseInt(tax.textContent)).toLocaleString() + " 원";
}

function handleQtChange(inputElement, value) {
  let currentValue = parseInt(inputElement.value);
  let newValue = currentValue + value;
  if (newValue < 1) {
      newValue = 1;
  }
  inputElement.value = newValue;
  changeVal();
}

input.addEventListener('change', function() {
  if(input.value === '') {
    alert('빈값은 입력할 수 없습니다.\n상품을 삭제하시려면 옆에 상품체크와 삭제버튼을 이용해주세요.')
    input.value = input.min;
  }
})

for (let i = 0; i < formControl.length; i++) {
  if(qtMinus[i] && qtPlus[i]) {
    qtMinus[i].addEventListener('click', () => {
      handleQtChange(formControl[i], -1);
    });
    qtPlus[i].addEventListener('click', () => {
      handleQtChange(formControl[i], 1);
    });
  }
}

formControl.forEach((_,i)=>{
  formControl[i].addEventListener("change", changeVal);
});

let productCheck = document.querySelector('.form-check-label');
deleteBtn.addEventListener("click", function() {
  if(productCheck.checked) {
    if(confirm("선택하신 상품을 장바구니에서 삭제하시겠습니까?")) {
      const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
      let removedPrice = 0;
  
      Array.from(checkedBoxes).forEach(function (checkedBox) {
        const tr = checkedBox.closest("tr");
        const formPriceRe = tr.querySelector(".form-price");
        removedPrice += parseInt(formPriceRe.textContent);
        tr.remove();
        nonProductMsg();
      });
  
      priceResult -= removedPrice;
      price.textContent = priceResult.toLocaleString() + " 원";
      totalPrice.textContent = (parseInt(tax.textContent) + priceResult).toLocaleString() + " 원";
      
      if(priceResult === 0) {
        totalPrice.textContent = "0 원";
        tax.textContent = "0"
      } else {
        totalPrice.textContent = (parseInt(tax.textContent) + priceResult).toLocaleString() + " 원";
      }
    }
  } else {
    alert('선택하신 상품이 없습니다.');
  }
  
});

let deliCouponUsed = false;
let priceCouponUsed = false;
let couponCode = "";
let couponApplied = false;
btnCoupon.addEventListener("click", function() {
    let inputCuppon = document.querySelector('.cuppon');
    couponCode = inputCuppon.value;
  
    //쿠폰 코드를 입력하지 않고 누른 경우
    if(couponCode.trim() === "") {
      alert("쿠폰을 입력해주세요.");
      return;
    }
  
    // 유효한 쿠폰인지 확인하기
    let couponData = localStorage.getItem("product");
    if (couponData === null) {
      alert("쿠폰을 사용할 상품이 없습니다.");
      return;
    }
  
    if (couponCode === "0000") {
      if(priceCouponUsed) {
        alert("이미 다른 쿠폰을 사용하셨습니다. 배송비 쿠폰은 사용하실 수 없습니다.");
        return;
      }
      if(deliCouponUsed) {
        alert("이미 사용된 쿠폰입니다.");
        return;
      }
      alert("배송비 쿠폰이 적용되었습니다.");
      deliCouponUsed = true;
      couponApplied = true;
      tax.innerHTML = 0 + " 원";
      totalPrice.textContent = (Number(price.innerHTML.replace(/[^0-9]/g, "")) + Number(tax.innerHTML.replace(/[^0-9]/g, ""))).toLocaleString() + " 원";
    }
    else if (couponCode === "1111") {
      if(deliCouponUsed) {
        alert("이미 다른 쿠폰을 사용하셨습니다. 상품 할인 쿠폰은 사용하실 수 없습니다.");
        return;
      }
      if(priceCouponUsed) {
        alert("이미 사용된 쿠폰입니다.");
        return;
      }
      alert("상품 할인 쿠폰이 적용되었습니다.");
      priceCouponUsed = true;
      couponApplied = true;
      price.textContent = (parseInt(price.innerHTML.replace(/,/g, "")) * .9).toLocaleString() + " 원";
      totalPrice.textContent = (Number(price.innerHTML.replace(/[^0-9]/g, "")) + Number(tax.innerHTML.replace(/[^0-9]/g, ""))).toLocaleString() + " 원";
    } else {
      alert("유효하지 않은 쿠폰입니다.");
      return;
    }
});