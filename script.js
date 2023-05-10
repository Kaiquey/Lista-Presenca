document.addEventListener("DOMContentLoaded", function(event){
    const form = document.getElementById('form');
    const username = document.getElementById('name');
    const hour = document.getElementById('hour');
    
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        
       const usernameValue = username.value;
       const hourValue = hour.value;

       if(usernameValue === "" || hourValue === ""){
        Toastify({
            text: "Preencha todos os campos!!",
            duration: 3000,
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style:{
                background:"#D21312",
            },
                onClick: function(){}
        }).showToast();
        throw new Error('Preencha todos os campos!!')
       }
       setSuccessFor();
    });
    
    
    function setSuccessFor(){
        event.preventDefault();
        Toastify({
            text: "Presença registrada com sucesso!",
            duration: 3000,
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style:{
                background: "#96c93d",
            },
            onClick: function(){}
        }).showToast();

        const sendValueUser = document.querySelector('input[name=name]').value;
        const sendValueHour = document.querySelector('input[name=hour]').value.replace('T', ' ');
        fetch('https://api.sheetmonkey.io/form/7X1xjwoLD1pQdhf5PXpmEW', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Name : sendValueUser, Hora: sendValueHour})
        });
    }
    document.querySelector('form').addEventListener('submit',handleSubmit);
});