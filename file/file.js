(function(){
	
const cards=document.querySelectorAll(".cards-1");
const main=document.querySelector(".maindiv");
const allimg=document.querySelectorAll(".img1");
const start=document.querySelector(".start");
const menue=document.querySelector(".menue");
const timer=document.querySelector(".timer");
let a=new Audio("/Kalimba.mp3");
function game(){
//......................
let click_counter=0;
let match_counter=0;
//.......................
for(var i=0;main.childNodes.length!=15;i++){
	let rand=Math.floor(Math.random()*allimg.length);
	main.appendChild(cards[rand]);
}
//.........................
//..........................	
main.style.display="grid";
function check_match_and_display(e){
let imggetindex=[];
    //get index of cards in array and add getindex array
	for(let i=0;i<allimg.length;i++){
		if(allimg[i].style.display=="block"&&allimg[i].id!="id"){
			imggetindex.push(i);
		}
	}
	//get cards index
	if(allimg[imggetindex[0]].className==allimg[imggetindex[1]].className){
		match_counter++;
		click_counter=0;
		allimg[imggetindex[0]].id="id";
		allimg[imggetindex[1]].id="id";
		
		
		
	}else{
		allimg[imggetindex[0]].style.display="none";
		allimg[imggetindex[1]].style.display="none";
		click_counter=0;

	
	}
imggetindex=[];
}



cards.forEach(item=>{
	item.style.display="flex";
		item.addEventListener("click",e=>{
			if(e.target.childNodes[0].style.display!=="block"&&e.target.childNodes[0].id!=="id"){
		click_counter++;
	
		item.style.transition="2s";
		item.style.transform="rotatey(180deg)";
		e.target.childNodes[0].style.display="block";
	 if(click_counter==2){
			 check_match_and_display(e);	  
    	    if(match_counter==7){
				  a.muted=true;
			      window.history.go();
			      main.style.display="none";
			      menue.style.display="flex";
				            }
	 }
			}
	})

})

}

start.addEventListener("click",h)
function h(e){
		game();
		a.play()
	menue.style.display="none"
}



})();