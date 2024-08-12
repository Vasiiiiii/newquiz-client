document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5500/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, phonenumber, email, password })
        });
       
        const result = await response.json();

        if (result.success) {
            window.location.href = '/index.html'; 
            alert('registration Successfull')
        } else {
            console.error("Registration failed");
            alert('Registration failed. Please try again.');
        }
       
    } catch (error) {
        console.log('Error during registration:', error);
        alert('Error during registration. Please try again.');
    }
});
