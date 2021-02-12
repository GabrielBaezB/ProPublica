let tbody = document.querySelector("#body");

function traerDatos() {

    fetch('js/pro-congress-113-senate.json')

        .then(res => {
            return res.json();
        })
        .then(data => {
            let res = data["results"];
            let len = data["results"].length;

            for (let i = 0; i < len; i++) {
                membersLen = res[i].members.length;

                for (let j = 0; j < membersLen; j++) {
                    var element = res[i].members[j];
                    if (element.middle_name == null) {
                        middle_name = " ";
                    } else {
                        middle_name = element.middle_name;
                    }
                    fullName = element.first_name + " " + middle_name + "  " + element.last_name;
                    
                    tbody.innerHTML +=
                        `<tr>  
                        <td>${"<a href=" + element.url + ">" + fullName + "</a>"} </td>    
                        <td>${element.party}</td>    
                        <td>${element.state}    </td>                   
                        <td>${element.seniority}</td> 
                        <td>${element.votes_with_party_pct + "%"}</td>           
                    </tr>`
                }
            }
        })

}
window.onload = traerDatos;




