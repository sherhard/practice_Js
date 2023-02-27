let num03=document.getElementById('num03');

	num03.addEventListener('blur',numNumber);


function numNumber(){
	let sum=0;
	let str=num03.value;
	let arr=str.split(',')
	for(let i=0; i<arr.length; i++){
		sum+=+arr[i];

	}
	let resuly03=document.getElementById('result03')

	resuly03.innerHTML=sum/arr.length;
}