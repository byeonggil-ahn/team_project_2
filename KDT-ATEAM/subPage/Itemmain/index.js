const categoryBtn = document.querySelector(".menu__btn__container");
const itemContainer = document.querySelector(".bottom_list_big_container");
const items = document.querySelectorAll('.bottom_list_small_container');

categoryBtn.addEventListener('click',(e)=>{
    const filter = e.target.dataset.category || e.target.parentNode.dataset.category;
    if(filter === null || filter === undefined){
        return;
    }

    //Remove selction prev & select the new one
    const active = document.querySelector('.menu_button.selected');
    console.log(active);
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    itemContainer.classList.add('anim-out');

    setTimeout(()=>{
    items.forEach((item)=> {
        if(filter === "*" || filter === item.dataset.type){
            item.classList.remove('item__invisible');
        }else{
            item.classList.add('item__invisible')
        }
    })
        itemContainer.classList.remove('anim-out');
    },300);
})

