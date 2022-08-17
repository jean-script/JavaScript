function executar(){
    var nume = document.getElementById("num").value;
    var resul = document.getElementById("res"); 
    resul.innerHTML=`
    <table>
        <tr>    
            <th>tabuada do ${nume}</th>
        </tr>
        <tr>
            <td>${nume}X1=${nume*1}</td>
        </tr>
        <tr>
            <td>${nume}x2=${nume*2}</td>
        </tr>
        <tr>
            <td>${nume}X3=${nume*3}</td>
        </tr>
        <tr>
            <td>${nume}X4=${nume*4}</td>
        </tr>
        <tr>
            <td>${nume}X5=${nume*5}</td>
        </tr>
        <tr>
            <td>${nume}X6=${nume*6}</td>
        </tr>
        <tr>
            <td>${nume}X7=${nume*7}</td>
        </tr>
        <tr>
            <td>${nume}X8=${nume*8}</td>
        </tr>
        <tr>
            <td>${nume}X9=${nume*9}</td>
        </tr>
        <tr>
            <td>${nume}X10=${nume*10}</td>
        </tr>
    </table>`
}
