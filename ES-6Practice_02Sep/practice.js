
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => {
        const usersDiv = document.getElementById('users');
        
        
        users.forEach(user => {
           
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                <hr>
            `;
            
            usersDiv.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error fetching users:', error)); 
