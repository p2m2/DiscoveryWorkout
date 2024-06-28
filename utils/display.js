function isOK(message){
    const iconElement = document.getElementById('status-icon');
    const messageElement = document.getElementById('status-message');
    iconElement.className = 'icon fas fa-check-circle';
    iconElement.style.color = 'green';
    messageElement.textContent = message;
    messageElement.style.color = 'green';
}

function isKO(error){
    const iconElement = document.getElementById('status-icon');
    const messageElement = document.getElementById('status-message');
    iconElement.className = 'icon fas fa-times-circle';
    iconElement.style.color = 'red';
    messageElement.textContent = error;
    messageElement.style.color = 'red';
}