document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        { id: 1, user: 'John Doe', action: 'Logged In', date: '2024-07-21' },
        { id: 2, user: 'Jane Smith', action: 'Updated Profile', date: '2024-07-21' },
        { id: 3, user: 'Alice Johnson', action: 'Logged Out', date: '2024-07-20' },
        // Add more activities as needed
    ];

    const activitiesBody = document.getElementById('activities-body');

    activities.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.id}</td>
            <td>${activity.user}</td>
            <td>${activity.action}</td>
            <td>${activity.date}</td>
        `;
        activitiesBody.appendChild(row);
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        // Simulate logout
        alert('Logging out...');
        // Redirect to login page or handle logout logic here
        window.location.href = '/login.html';
    });
});
