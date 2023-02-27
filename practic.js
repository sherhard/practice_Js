


let num=document.getElementsByClassName('num');
		let btn=document.getElementById('button');
			btn.addEventListener('click',func);

		function func(){
			let sum=0;
			for(let i=0; i<num.length; i++){
				sum+=+num[i].value;
			}
			let newElem=document.getElementById('result');

			newElem.value=sum;
		}