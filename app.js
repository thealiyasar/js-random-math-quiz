var firstNumber = document.getElementById("firstNumber");
        var lastNumber = document.getElementById("lastNumber");
        var operatorType = document.getElementById("operatorType");
        var resultInput = document.getElementById("resultInput");
        var answerButton = document.getElementById("answerButton");
        var trueScore = document.getElementById("trueScore");
        var falseScore = document.getElementById("falseScore"); 
        
        function randomNumberGenerator(minNumber, maxNumber) {
            var randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
            return randomNumber;
        } 
        
        function newQuestion() {
            var operation = ["+", "-", "*", "/"];
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
        
        window.onload = function () {
            newQuestion();
        }; 
        
        answerButton.onclick = function () {
            if (!Number(resultInput.value)) {
                alert('Enter Number');
            } else {
                var trueAnswer;
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
