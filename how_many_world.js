let many_world=document.getElementById('how_many_world');
	many_world.addEventListener('blur',simbol);

function simbol(){
	let num=0; 
	let str=many_world.value;
	let arr=str.split(' ');
	for(let i=0; i<arr.length; i++){
		let many=arr[i].split('');
		num+=many+1;
	}
	let result_many=document.getElementById('world_result');
		result_many.innerHTML=num;
}