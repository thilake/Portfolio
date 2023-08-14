// word_control.js
document.addEventListener('DOMContentLoaded', function () {
    const messageTextarea = document.getElementById('message');
    const remainingWordsSpan = document.getElementById('remaining-words');
    const wordLimitPrompt = document.getElementById('word-limit-prompt');

    messageTextarea.addEventListener('input', function () {
        const wordCount = countWords(messageTextarea.value);
        const remainingWords = 300 - wordCount;
        remainingWordsSpan.textContent = remainingWords;
        
        if (remainingWords <0) {
            wordLimitPrompt.style.display = 'block';
            
            messageTextarea.value = messageTextarea.value.substring(0, 300); // Truncate text
            //messageTextarea.disabled = true; // Disable textarea

        } else {
            wordLimitPrompt.style.display = 'none';
            //messageTextarea.disabled = false; // Enable textarea
        }
    });
    messageTextarea.addEventListener('paste', function (e) {
        e.preventDefault(); // Prevent pasting
    });

    function countWords(text) {
        const words = text.trim().split(/\s+/);
        return words.length;
    }
});

