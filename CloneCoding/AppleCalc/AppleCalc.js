var n1 = document.querySelector("#screen");
var num = document.querySelectorAll(".num");
var AC = document.querySelector(".AC");
var dot = document.querySelector(".dot");
var calc = document.querySelectorAll(".calc");
var percent = document.querySelector(".percent");
var pnm = document.querySelector(".pnm");

//a (연산자) b = ~~ 이런식으로 사용할 예정. 
var a = null;
var b = null;
var operation = null;

// AC : 현재 모든 내용 삭제. 
AC.onclick = function() {
	n1.innerText = 0;
	a = null;
	b = null;
	operation = null;
	n1.style.fontSize = "90px";
}

// 백분위를 구해주는 키. 
percent.onclick = function() {
	n1.innerText = parseFloat(n1.innerText) / 100;
			if (n1.textContent.length > 7) {
				n1.style.fontSize = "60px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
			}
		else {
			n1.style.fontSize = "90px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
		}
}

// 양수를 음수로, 음수를 양수로 바꿔줌. 
pnm.onclick = function() {
	n1.innerText = -1 * parseFloat(n1.innerText);
}

// 숫자판 눌렀을 때 숫자 입력하는 것. 
for (let i = 0; i < 10; i++) {
	num[i].onclick = function() {
		if(n1.innerText === "0") {
			n1.innerText = num[i].innerText;
		}
		else if(n1.textContent.length < 10) {
			n1.innerText = n1.innerText + num[i].innerText
			// 숫자가 길어질수록 길이변환.
			if (n1.textContent.length > 7) {
				n1.style.fontSize = "60px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
			}
		}
	}
}

for (let i = 0; i < 5; i++) {
	calc[i].onclick = function() {
		switch(calc[i].innerText) {
			case "=":
				if (typeof(a) !== null) {
					b = parseFloat(n1.innerText);
					switch (operation) {
						case "+":
							n1.innerText = a + b;
							a = n1.innerText;
							b = null;
							opertion = null;
							break;
						case "-":
							n1.innerText = a - b;
							a = n1.innerText;
							b = null;
							opertion = null;
							break;
						case "×":
							n1.innerText = a * b;
							a = n1.innerText;
							b = null;
							opertion = null;
							break;
						case "/":
							n1.innerText = a / b;
							a = n1.innerText;
							b = null;
							opertion = null;
							break;
					}
				} 
				if (n1.textContent.length > 7) {
					n1.style.fontSize = "60px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
				}
		else {
			n1.style.fontSize = "90px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
		}
				break;
			case "+":
				a = parseFloat(n1.innerText);
				n1.innerText = "0";
				operation = "+";
				break;
			case "-":
				a = parseFloat(n1.innerText);
				n1.innerText = "0";
				operation = "-";
				break;
			case "×":
				a = parseFloat(n1.innerText);
				n1.innerText = "0";
				operation = "×";
				break;
			case "/":
				a = parseFloat(n1.innerText);
				n1.innerText = "0";
				operation = "/";
				break;
		}
		if (n1.textContent.length > 7) {
			n1.style.fontSize = "60px";
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
		}
		else {
			n1.style.fontSize = "90px";
				parseFloat(n1).innerText.toFixed(5);
				n1.innerText = parseFloat(n1.innerText).toFixed(5);
		}
	}
}

dot.onclick = function() {
	n1.innerText = n1.innerText + '.';
}