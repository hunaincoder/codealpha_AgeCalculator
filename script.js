document.getElementById('ageCalculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAge();
});

function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob.getTime())) {
        document.getElementById('result').textContent = 'Please enter a valid date of birth';
        return;
    }

    const today = new Date();
    if (dob > today) {
        document.getElementById('result').textContent = 'Date of birth cannot be in the future';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}

