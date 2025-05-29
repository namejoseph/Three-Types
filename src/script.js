document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');
    const options = document.querySelectorAll('.option');
    const selectedType = document.getElementById('selectedType');

    // Handle submit button click
    submitBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        if (checkboxes.length > 0) {
            column2.classList.remove('hidden');
            column3.classList.add('hidden'); // Reset column 3
            
            // Get all selected values
            const selectedValues = Array.from(checkboxes).map(cb => cb.value);
            
            // Update column 2 options to only show selected options
            options.forEach(option => {
                if (selectedValues.includes(option.dataset.value)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
        } else {
            alert('Please select at least one option');
        }
    });

    // Handle option selection in column 2
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            selectedType.textContent = value.charAt(0).toUpperCase() + value.slice(1);
            column3.classList.remove('hidden');
        });
    });
});