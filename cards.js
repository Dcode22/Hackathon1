var start = document.querySelector('button');
var cardbody = document.getElementById('cardbody');
var heading = document.getElementById('heading');
console.log(heading.innerHTML);

start.addEventListener('click', card1);

	function card1(){
	cardbody.innerHTML = "<p>אמא</p> <br> <input id ='translation' type='text' placeholder = 'Type translation:'></input><button id='checkbutton' type= 'submit'>Check</button>";
	
	var input = document.getElementById('translation');
	var checkbutton = document.getElementById('checkbutton');
	checkbutton.addEventListener('click', function() {
		if (input.value == "mother"){
			cardbody.innerHTML = "<p>CORRECT! GOOD JOB!</p> <br> <button id = 'continue'>Continue</button>";
		}
		else { 
			alert("try again!");
			card1();

		}
	})

}
