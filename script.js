
const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar', // Chart type
        data: {
            labels: ["Red", "Blue", "Yellow", "Teal"],
            datasets: [
                {
                    label: "Votes",
                    data: [12,19,3,10],
                    backgroundColor: ['rgba(186, 3, 71, 0.4)', 
                        'rgba(76, 0, 145, 0.4)', 
                        'rgba(250, 250, 5, 0.45)',
                        'rgba(0, 166, 145, 0.4)'],
                    bordercolor: ['rgba(186, 3, 71)', 
                        'rgba(76, 0, 145)',
                        'rgba(250, 250, 5)',
                        'rgba(0, 166, 145)'],
                }
            ]
         }
    }
)
