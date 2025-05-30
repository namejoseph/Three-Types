document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');
    const options = document.querySelectorAll('.option');
    const selectedType = document.getElementById('selectedType');

    // Function to generate random Lorem Ipsum
    function generateLoremIpsum() {
        const loremWords = [
            'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 
            'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 
            'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 
            'aliqua', 'enim', 'minim', 'veniam', 'quis', 'nostrud', 
            'exercitation', 'ullamco', 'laboris', 'nisi', 'commodo', 
            'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit',
            'voluptate', 'velit', 'esse', 'cillum', 'eu', 'fugiat', 
            'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 
            'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 
            'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
        ];
        
        // Adjust these values to control text length
        const sentenceLength = Math.floor(Math.random() * 8) + 5; // 5-12 words per sentence
        const sentences = Math.floor(Math.random() * 2) + 2; // 2-3 sentences total
        const maxChars = 200; // Maximum characters allowed
        
        let text = '';

        for (let i = 0; i < sentences; i++) {
            let sentence = [];
            for (let j = 0; j < sentenceLength; j++) {
                const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
                sentence.push(j === 0 ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1) : randomWord);
            }
            text += sentence.join(' ') + '. ';
        }

        // Trim text if it exceeds maxChars
        if (text.length > maxChars) {
            text = text.substring(0, maxChars).split('.')[0] + '.';
        }

        return text;
    }

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
            
            // Update content with new Lorem Ipsum
            const dashboardContent = column3.querySelector('p');
            if (dashboardContent) {
                dashboardContent.textContent = generateLoremIpsum();
            }
            
            column3.classList.remove('hidden');
        });
    });
});
