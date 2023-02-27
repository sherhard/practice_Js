


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

