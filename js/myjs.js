
let myNavitem=document.querySelector(".myNav-item-d")

let openmenu=document.querySelectorAll(".menubig")

let openmenumy=document.querySelector(".open-menu-help")
let btns=document.querySelectorAll(".itemright")




let divitemlimy=document.querySelectorAll(".divitemli")


let itemmenuverticalmy=document.querySelectorAll(".itemmenuvertical")

let clickitembackmy=document.querySelector(".clickitemback")
openmenu.forEach(function(item){
	
item.addEventListener("mouseover",function(){

openmenumy.classList.remove("open-menu")
console.log("over")	
	
})	
	
})



openmenu.forEach(function(item){
	
item.addEventListener("mouseover",function(){
	openmenumy.classList.remove("open-menu")
})	
	
})

openmenu.forEach(function(items){

items.addEventListener("mouseout",function(){
openmenumy.classList.add("open-menu")	
	
})	
	
})



btns.forEach(function(item){
item.addEventListener("mouseover",function(){
item.classList.add("pink")
console.log("ff")	
	
	
}



)	
	
})


btns.forEach(function(item){
item.addEventListener("mouseout",function(){
item.classList.remove("pink")

	
	
}



)	
	
})


const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

    var swiper = new Swiper(".mySwiper", {
		
	 autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
	
	
	
	    var swiper = new Swiper(".MYSwiper", {

			 autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
	 
	  
    });
	
	


  if ($(window).width() <= 768) { 
  
  
    var swiper = new Swiper(".MYSwiper", {
		
		     slidesPerView: 4
		
		
	})
	
  
  }
  
  $(window).resize(function() {
  var width = $(window).width();
 // console.log(width)
   if ($(window).width() <= 768) { 
  
  
    var swiper = new Swiper(".MYSwiper", {
		
		     slidesPerView: 4
		
		
	})
	
  
  }
  
     if ($(window).width() <= 570) { 
  
  
    var swiper = new Swiper(".MYSwiper", {
		
		     slidesPerView: 3
		
		
	})
	
  
  }
  
  
     if ($(window).width() <= 420) { 
  
  
    var swiper = new Swiper(".MYSwiper", {
		
		     slidesPerView: 2
		
		
	})
	
  
  }
  
	
     if ($(window).width() >= 768) { 
  
  
    var swiper = new Swiper(".MYSwiper", {
		
		     slidesPerView: 6
		
		
	})
	
  
  }
  
  
  

})
/*
itemlimy.forEach(function(item){
  //window.location.reload();
item.classList.add("baran")
item.addEventListener("click",function(){
//item.classList.remove("baran")
divitemlimy.forEach(function(item){
	
if(item.classList.contains("ziemenuDaste-activ")){
	
		item.classList.remove("ziemenuDaste-activ")
		item.classList.add("ziemenuDaste")
		
		
}

if(item.classList.contains("baran")){
	
	let rr="yess"
	


	
}


	
})	
	
	
	
	
let a=item.nextElementSibling;	
	
	//console.log(a)
	if(item.classList.contains("itemli-help")){
		
	a.classList.remove("ziemenuDaste")
	a.classList.add("ziemenuDaste-activ")		
		
	
		
	}

})



	
})

itemmenuverticalmy.forEach(function(item){
	
item.addEventListener("click",function(){
	
let b=item.nextElementSibling;		

b.classList.remove("itemmenuverticaldiv")

b.classList.add("itemmenuvertical-active")

})	
	
})

clickitembackmy.addEventListener("click",function(){
	
	
	
	
})*/

let itemlimy=document.querySelectorAll(".itemli")
let navnewlimy=document.querySelectorAll(".navnewli")
itemlimy.forEach(function(item){

item.addEventListener("click",function(){
	
	
let a=item.getAttribute("target")
navnewlimy.forEach(function(divitem){
	
	
	if(divitem.classList.contains("open")){
		
	divitem.classList.remove("navnewliactive")	
	divitem.classList.remove("opacity-0")	
	}
	
 //console.log(divitem.id	==a)
 if(divitem.id!=a){divitem.classList.add("opacity-0")
	
 	divitem.classList.remove("navnewliactive")	
 
 }
if(divitem.id==a){
	divitem.classList.add("open")
	divitem.classList.remove("d-none")
divitem.classList.remove("opacity-0")	
divitem.classList.add("navnewliactive")	
}


if(divitem.id=="pills-home"){
	
	divitem.classList.remove("navnewliactive")		
	
}
})

})
	
})
	
let ulmobitemmy=document.querySelectorAll(".ulmob-item")	

ulmobitemmy.forEach(function(item){
	
item.addEventListener("click",function(){
	
let a=item.nextElementSibling;		
	
	
if(a.classList.contains("ulmob-zir")){
	
a.classList.remove("ulmob-zir")	
a.classList.add("ulmob-zir-active")		
}	
	
	
})	
	
	
	
	
})


let morefootermy=document.querySelector(".morefooter")
let textfootermy=document.querySelector(".textfooter")
morefootermy.addEventListener("click",function(){
	
textfootermy.classList.toggle("divfootera")	
if(textfootermy.classList.contains("divfootera")){morefootermy.innerHTML="مشاهده کمتر"}

else{morefootermy.innerHTML="مشاهده بیشتز"}

	
	
})