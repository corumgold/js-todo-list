const todos = ['fart', 'farting', 'fartiest'];
let input = prompt("What would you like me to do?");

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let todo of todos) {
            console.log('************');
            console.log(`${todos.indexOf(todo)}: ${todo}`);
            console.log('************');
        }
    }
    else if (input === 'new') {
        const item = prompt('What would you like to add?');
        todos.push(item);
        console.log(`You have added ${item} to your list`)
    }
    else if (input === 'delete') {
        let itemToDelete = prompt('What would you like to delete?');
    } else {
        let input = prompt('Please enter a valid command.');
    } input = prompt ('What would you like me to do?')

} console.log('You quit the app')