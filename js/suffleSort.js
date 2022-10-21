window.onload=function(){
    document.getElementById("shuffleBtn").onclick = shuffleCards;
    document.getElementById("sortBtn").onclick = sortCards;
    
    var list = document.getElementById("allNodesCards")
    var nodes = list.children;

    // Function to suffle node cards
    function shuffleCards(){
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffleCardsFun(nodes);
        for(let i =0;i < nodes.length; i++){
         list.appendChild(nodes[i]);
        }
    } 

    // Funtion to sort asecnding 
    function sortCards (){
        let nodes = [...list.children];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              let temp;
              if (nodes[i].innerHTML > nodes[j].innerText) {
                temp = nodes[i];
                nodes[i] = nodes[j];
                nodes[j] = temp;
              }
            }
          }
        for(let i =0; i<nodes.length; i++){
         list.appendChild(nodes[i]);
        }

    }
   
    function shuffleCardsFun(items){
        let cached = items.slice(0); let temp; let i = cached.length; let rand;
        while(--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }

  
    } 