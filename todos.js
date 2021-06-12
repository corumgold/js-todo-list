const todos = ['fart', 'farting', 'fartiest']
let input = prompt("What would you like me to do?")

// while (input !== 'quit') {
    if (input == 'new') {
        let item = prompt('What would you like to add?');
        todos.push(item);
        console.log(`You have added ${item} to your list`)
    } else if (input == 'list') {
        for (let todo of todos){
            console.log(`${todos.indexOf(todo)}: ${todo}`);
        }
    } else if (input == 'delete') {
        let itemToDelete = prompt('What would you like to delete?');
    } else {
        let input = prompt('Please enter a valid command.')
    }
// }


console.log('You quit the app')