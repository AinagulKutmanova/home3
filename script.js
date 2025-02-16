let count = 0;  
        document.getElementById("plusBtn").addEventListener("click", function() {
            if (count < 100) {  
                count++;
                document.getElementById("counter").innerText = count;
            }
            this.classList.add("green"); 
            document.getElementById("decrementBtn").classList.remove("red"); 
        });

        
        document.getElementById("minusBtn").addEventListener("click", function() {
            if (count > 0) {  
                count--;
                document.getElementById("counter").innerText = count;
            }
            this.classList.add("red");
            document.getElementById("plusBtn").classList.remove("green"); 
        });

        
        document.getElementById("zeroBtn").addEventListener("click", function() {
            count = 0;
            document.getElementById("counter").innerText = count;
            
            
            document.getElementById("plusBtn").classList.remove("green");
            document.getElementById("minusBtn").classList.remove("red");
        });
   

       