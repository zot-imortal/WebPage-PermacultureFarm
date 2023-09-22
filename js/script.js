var button__close = document.querySelector('.icon-menu');
var counter=0;


button__close.onclick=function (){ 
    
    counter++;
    
        if( counter % 2 ==1){
            document.querySelector('.menu__body').style.left = "0%"
            button__close.style.backgroundImage="url(img/krestic.png)"
            document.querySelector('.menu__body').hidden = false;
        }   
        else{
           
            document.querySelector('.menu__body').style.left = "-100%";
            button__close.style.backgroundImage="url(img/menuIcon.png)"  
           
        }
    }

    var changeIcon = document.querySelectorAll(".nextImage");
    var changeText = document.querySelectorAll(".item__healthcare__text");
    var changeTitle = document.querySelectorAll(".item__healthcare__title");
    
//            console.log(firstText);
//            var a=0;
// function nextCard(params) {
//             var a=0
//   for (let index = 0; index <= changeIcon.length; index++) {
//     a++;
//     changeText[index].textContent =  changeText[ a].textContent;
//     changeTitle[index].textContent=  changeTitle[ a].textContent;
//     changeIcon[index].src =  changeIcon[ a].src;
  
//   }
  
   
// }

// nextCard();
// alert("1")
// var InfCard ={
//     src:["main_content/bee.png","main_content/recycle.png","main_content/son-batareia.png"  ],
//     text:["Learn and work  bee","recycling factory and ecological technology","Renewable power is defying the difficulties caused by the pandemic, showing robust growth while other fuels struggle"],
//     title:["bee","recycling ","renewable energy"],
// }
// for (let index = 0; index < 3; index++) {
//     changeText[index].textContent =  InfCard.text[index];
//     changeTitle[index].textContent =   InfCard.title[index];
//     changeIcon[index].src =  InfCard.src[index];  
// }