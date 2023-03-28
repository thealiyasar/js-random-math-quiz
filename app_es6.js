    const firstNumber = document.getElementById("firstNumber");
		const lastNumber = document.getElementById("lastNumber");
		const operatorType = document.getElementById("operatorType");
		const resultInput = document.getElementById("resultInput");
		const answerButton = document.getElementById("answerButton");
		const trueScore = document.getElementById("trueScore");
		const falseScore = document.getElementById("falseScore"); 
    
		const randomNumberGenerator = (minNumber, maxNumber) => {
			const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
			return randomNumber;
		}
    
		const newQuestion = () => {
			const operation = ["+", "-", "*", "/"];
			operatorType.textContent = operation[randomNumberGenerator(0, 4)];
			firstNumber.textContent = randomNumberGenerator(1, 50);
			lastNumber.textContent = randomNumberGenerator(1, 50);


			if (operatorType.textContent == '/') {
				while (true) {
					lastNumber.textContent = randomNumberGenerator(1, 50);
					if (firstNumber.textContent % lastNumber.textContent == 0) {
						break;
					}
				}
			}
		}
    
		window.onload = () => {
			newQuestion();
		};
    
		answerButton.onclick = () => {
			if (!Number(resultInput.value)) {
				alert('Enter Number!!');
			} else {
				let trueAnswer;
				switch (operatorType.textContent) {
					case '+':
						trueAnswer = Number(firstNumber.textContent) + Number(lastNumber.textContent);
						break;
					case '-':
						trueAnswer = Number(firstNumber.textContent) - Number(lastNumber.textContent);
						break;
					case '*':
						trueAnswer = Number(firstNumber.textContent) * Number(lastNumber.textContent);
						break;
					case '/':
						trueAnswer = Number(firstNumber.textContent) / Number(lastNumber.textContent);
						break;
					default:
						break;
				}
				resultInput.value == Number(trueAnswer) ? trueScore.textContent++ : falseScore.textContent++;
				newQuestion();
				resultInput.value = null;
			}
		}
