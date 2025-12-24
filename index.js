// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('state-input')
    const button = document.getElementById('fetch-alerts')
    const alertsDisplay = document.getElementById('alerts-display')
    const errorDiv = document.getElementById('error-message')

    button.addEventListener('click', () => {
        const state = input.value
        
        fetch(weatherApi + state)
        .then(response => response.json())
        .then(data => {
            errorDiv.textContent = ''
            errorDiv.classList.add('hidden')

            alertsDisplay.textContent = ''
            const title = data.title
            const count = data.features.length
            const summary = document.createElement('h2')
            summary.textContent = `${title}: ${count}`
            alertsDisplay.appendChild(summary)
            
            data.features.forEach(alert => {
                const p = document.createElement('p')
                p.textContent = alert.properties.headline
                alertsDisplay.appendChild(p)
})
})
        .catch(error => {
            errorDiv.textContent = error.message
            errorDiv.classList.remove('hidden')
        })

  input.value = ''

})


})


// Your code here!