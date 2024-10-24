document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://randomuser.me/api/?results=${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
           const response=JSON.parse(this.responseText);
           // console.log(response)
            let output='';
            response.value.forEach(function (g){
                output+='<li>${g.gender}</li>'
            })
        }

        document.querySelector('.jokes').innerHTML = output;
    }

    xhr.send();

    e.preventDefault();
}