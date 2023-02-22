let show1=document.getElementById('show_focus');
	show1.addEventListener('click',close_focuss);
function close_focuss(){
	let closee=document.getElementById('close_focus');
	if(closee.style.display=="none"){
		closee.style.display='block';
		show1.style.color="red"

	}else{
		closee.style.display='none';
		show1.style.color="black"
	}
}



let element=document.getElementById("element");
	element.addEventListener('blur',funFocus);

function funFocus(){
	let sum=0;
	let str=element.value;
	let arr=str.split('');
	for(let i=0; i<arr.length; i++){
		sum+= +arr[i];

	}
	let newelem=document.getElementById('result_focus');
	newelem.innerHTML=sum;
}

