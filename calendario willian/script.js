const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let currentDate = new Date();

function renderCalendar(date) {
    const monthYear = document.getElementById('monthYear');
    const dates = document.getElementById('dates');
    
    dates.innerHTML = ''; // Limpa as datas existentes

    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = `${monthNames[month]} ${year}`;
    
    // Primeiro dia do mês
    const firstDay = new Date(year, month, 1).getDay();
    
    // Último dia do mês
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    // Adiciona dias em branco para o início do mês
    for (let i = 0; i < firstDay; i++) {
        const blankDiv = document.createElement('div');
        dates.appendChild(blankDiv);
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= lastDay; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dates.appendChild(dayDiv);
    }
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Inicializa o calendário com o mês atual
renderCalendar(currentDate);