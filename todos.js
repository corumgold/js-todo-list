const todos = ['fart', 'farting', 'fartiest'];
let input = prompt("What would you like me to do?");

while (input !== 'quit' && input !== 'q') {
    input.toLowerCase();
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
    else if (input === 'delete'){
        const index = prompt('What is the index (number) of the item to delete?');
        const deleted = todos.splice(index, 1);
        console.log(`OK! Deleted ${deleted[0]} successfully!`)
    }

    input = prompt('What would you like me to do?')

} console.log('You quit the app')