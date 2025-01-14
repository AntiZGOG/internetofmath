function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0'); // Tanggal
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;

    
    document.getElementById('clock').innerHTML = `${dateString} ${timeString}`;
}


setInterval(updateClock, 1000);


updateClock();