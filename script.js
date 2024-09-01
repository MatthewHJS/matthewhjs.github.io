document.getElementById('command-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let input = event.target.value.trim();
        let outputDiv = document.getElementById('output');

        let commandParagraph = document.createElement('p');
        commandParagraph.textContent = `user@website:~$ ${input}`;
        outputDiv.appendChild(commandParagraph);

        switch(input) {
            case 'help':
                appendOutput('Available commands: about, contact, projects, help');
                break;
            case 'about':
                appendOutput('This is Matthew Hjorneviksaunders, a cybersecurity enthusiast...');
                break;
            case 'projects':
                appendOutput('Project 1: [Description] \nProject 2: [Description]');
                break;
            case 'contact':
                appendOutput('Email: matthew@example.com \nLinkedIn: [Your LinkedIn Profile]');
                break;
            default:
                appendOutput(`${input}: command not found`);
        }

        outputDiv.scrollTop = outputDiv.scrollHeight;

        event.target.value = '';
    }
});

function appendOutput(text) {
    let outputDiv = document.getElementById('output');
    let outputParagraph = document.createElement('p');
    outputParagraph.textContent = text;  
    outputDiv.appendChild(outputParagraph);
}
