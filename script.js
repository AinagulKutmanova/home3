let balance = 10000;
let intervalId = null;

        function akchaChygaruu() {
            if (balance >= 1000) {
                balance -= 1000;
                document.getElementById("balance").innerText = `${balance} сом`;
            } else {
                stop();
                   
 {
                stop();
                alert("Баланста акча жок!");
            }
                
            }
        }

        function start() {
            if (!intervalId) {
                intervalId = setInterval(akchaChygaruu, 2000);
            }
        }

        function stop() {
            clearInterval(intervalId);
            intervalId = null;
            alert(`Сизде ${balance} сом калды`);
        }


//2-тапшырма


let timeLeft = 10;
        let timerInterval;

        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").innerText = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById("message").innerText = "Убакыт бутту";
                }
            }, 1000);
        }

        function submitAnswer() {
            if (timeLeft > 0) {
                clearInterval(timerInterval);
                document.getElementById("message").innerText = "Жооп бердим";
            }
        }

        
        startTimer();