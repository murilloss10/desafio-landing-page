const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if ((name != "" ) || (email != "")){
        let data = {
            name,
            email
        };
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData);

        let content = document.getElementById('content');
        content.innerHTML = "";

        let container = document.getElementById('card-container');
        let pronto = `<p id="p-card-title">Email cadastrado com sucesso.</p>`;

        document.getElementById('reload-gif').removeAttribute('hidden');

        setTimeout(() => {
            document.getElementById('reload-gif').setAttribute('hidden', 'hidden');
            container.innerHTML = pronto;
        }, 1200);

    } else {
        alert('Por favor, preencha todos os campos.');
    }
    
    

});