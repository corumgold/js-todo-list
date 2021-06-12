const todos = ['fart', 'farting', 'fartiest'];
let input = prompt("What would you like me to do?");

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        // for (let todo of todos) {
        //     console.log(`${todos.indexOf(todo)}: ${todo}`);
        // }
        console.log('************');
    }
    else if (input === 'new') {
        const item = prompt('What would you like to add?');
        todos.push(item);
        console.log(`You have added ${item} to your list`)
    }

    input = prompt('What would you like me to do?')

} console.log('You quit the app')