let many=document.getElementById('many_world');
	many.addEventListener('blur',manyWorld);

function manyWorld(){
	let num=0;
	let str=many.value;
	let arr=str.split(' ');
	for(let i=0; i<arr.length; i++){
		num+=1;
	}
	let result=document.getElementById('many_world_result');
	result.innerHTML=num;
}