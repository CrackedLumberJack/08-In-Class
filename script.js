
function isEven(num){
    return(num % 2 == 0)
}

document.getElementById("btnShow").onclick = function() {
    let numRows = document.getElementById("txtNumber").value;
    const tbl = document.createElement("table");

    for(let i = 0; i <= numRows; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = i;
        tr.appendChild(td1);
        td2 = document.createElement("td");
        td2.textContent = isEven(i) ? "Even" : "Odd";
        tr.appendChild(td2);
        tbl.appendChild(tr);

    }


    document.getElementById("results").appendChild(tbl);
}