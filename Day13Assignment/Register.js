const submitForm=(e)=>{
    const firstName=document.getElementById("fname").value;
    const lastName=document.getElementById("lname").value;
    const userName=document.getElementById("uname").value;
    const password=document.getElementById("pwd").value;
    const confPassword=document.getElementById("cpwd").value;
    const mobile=document.getElementById("mobile").value;
    const email=document.getElementById("email").value;
    const dateofbirth=document.getElementById("dob").value;
    const address=document.getElementById("address").value;

    var form = document.getElementById('main_form');
    var selectedGender = form.querySelector('input[name="gender"]:checked').value; //maybe .value

    const checkboxes = document.querySelectorAll('fieldset input[type="checkbox"]:checked');
            const selectedSkills = [];
            checkboxes.forEach((checkbox) => {
                selectedSkills.push(checkbox.name);
            });
    const courseSelected= selectedSkills.join(', ')
           e.preventDefault();
            console.log(firstName,lastName,userName,password,confPassword,mobile,email,dateofbirth,address,selectedGender,courseSelected);
            const formData = {
                firstName,
                lastName,
                userName,
                password,
                confPassword,
                mobile,
                email,
                dateofbirth,
                address,
                selectedGender,
                courseSelected
            };
            
            localStorage.setItem('formData', JSON.stringify(formData));
            window.location.href = 'Display.html';
}