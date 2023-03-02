let uppercas=document.getElementById('uppercase');
	uppercas.addEventListener('blur',uppercase);

function uswords(str){
	let arr=str.split(' ');
	for(let i=0; i<arr.length; i++){
		arr[i]=arr[i].split('');
		arr[i][0]=arr[i][0].toUpperCase();
		arr[i]=arr[i].join('');
	}
	str=arr.join(' ');
	return str;

}
function uppercase(){
	uppercas.value=uswords(uppercas.value);
}