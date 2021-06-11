const todos = ['fart', 'farting', 'fartiest']
let input = prompt("What would you like me to do?")

// while (input !== 'quit') {
    if (input == 'new') {
        let item = prompt('What would you like to add?');
        todos.push(item);
        console.log(`You have added ${item} to your list`)
    } else if (input == 'list') {
        for (let todo of todos){
            console.log(`${todo}`);
        }
    } else if (input == 'delete') {
        let itemToDelete = prompt('What would you like to delete?');

    }
// }


console.log('You quit the app')