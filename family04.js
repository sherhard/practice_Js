let elemName=document.getElementById('elem_name');
	elemName.addEventListener('focus',elemName1);
	elemName.addEventListener('blur',elemName2);

function elemName1(){
	elemName.placeholder='';
}

function elemName2(){
	let input_name=document.getElementsByClassName('name');

	if(elemName!==0){
		let str=elemName.value;
		let arr=str.split(' ');
		for(let i=0; i<arr.length; i++){
			input_name[i].value=arr[i];
		}
	}
	if(elemName==0){
		elemName.placeholder='';
		for(let i=0; i<input_name.length; i++){
			input_name[i].value="";
		}
	}
}