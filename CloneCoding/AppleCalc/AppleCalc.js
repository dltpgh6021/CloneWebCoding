var n1 = document.querySelector("#screen");
var key = document.querySelectorAll(".num");
var AC = document.querySelector(".AC");

// 숫자판 눌렀을 때 숫자 입력하는 것. 
for (let i = 0; i < 10; i++) {
	key[i].onclick = function() {
		n1.innerText = parseInt(n1.innerText) * 10 + parseInt(key[i].innerText);
		if (toString(n1.innerText).length > 7) 
			n1.setAttrubute("font-size", 60px);
	}
}

// AC : 현재 모든 내용 삭제. 
AC.onclick = function() {
	n1.innerText = 0;
}