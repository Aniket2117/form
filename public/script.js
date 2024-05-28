document.getElementById('detailsForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, age, gender }),
    });

    if (response.ok) {
        alert('Your Details submitted successfully!');
        location.reload();
    } else {
        alert('Failed to submit your details.');
    }
});
