//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const big = document.querySelector ('.left_img .mainImg img')
const thum = document.querySelectorAll ('.left_img .subImg > a')
console.log(big,thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
        
    })
})

//주문영역 상품 옵션 선택
const brands = document.querySelector ('#brand') 
const galaxy = document.querySelector ('#galaxy')
const iphone = document.querySelector ('#iphone')
console.log(brands,galaxy,iphone)
iphone.style.display='none' // 아이폰 숨기기(초기값)
galaxy.disabled = true // 비활성화 (초기값)

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){//아이폰
        brands_dis(iphone,false)
    }
    else if (brands.options[1].selected == true){//갤럭시
        brands_dis(galaxy,false)
    }
    else {
        brands_dis(galaxy,true)
        galaxy.options[0].selected = true
    }
})
function brands_dis(target,boolean){
    iphone.style.display='none'
    galaxy.style.display='none'
    target.style.display='block'
    target.disabled = boolean
}

//기종 선택  결과 값 출력 p id="result"
const galaxy_op = document.querySelectorAll ('#galaxy option')
const iphone_op = document.querySelectorAll ('#iphone option')
const result = document.querySelector('.price_sector .left #result')
console.log(galaxy_op, iphone_op, result)

// 갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    result.appendChild(galaxy_op[galaxy_index])
})

// 아이폰 기종 출력

//수량 증가 대비 가격 출력
const order_ea = document.querySelector('#order_ea')
const span = document.querySelector('.right em span')
const can = document.querySelector ('#can')
let total
let price = 17000

console.log(order_ea.value)
console.log(span)
order_ea.addEventListener('change',()=>{
    if(order_ea.value>0){
        let total = price * order_ea.value
    span.innerHTML = total.toLocaleString('ko-kr')
    }
    else {
        window.alert('최소수량입니다')
        order_ea.value = 1
    }
})
can.addEventListener('click',()=>{
    order_ea.value = 1
    span.innerHTML = price.toLocaleString('ko-kr')
})