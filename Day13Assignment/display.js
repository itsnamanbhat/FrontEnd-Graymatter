
const formData = JSON.parse(localStorage.getItem('formData'));

for (const [key, value] of Object.entries(formData)){
    document.getElementById(`${key}`).innerHTML=value;
    
    }
