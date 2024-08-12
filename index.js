document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5500/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
       
        const result = await response.json();

        if (result.success) {
            window.location.href = '/quiz.html'; 
            alert("Login Successfull")
        } else {
            console.error("Login failed");
            alert('Invalid credentials. Please try again.');
        }
       
    } catch (error) {
        console.log('Error during login:', error);
        alert('Error during login. Please try again.');
    }
});
