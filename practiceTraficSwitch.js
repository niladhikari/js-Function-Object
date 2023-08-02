const color = 'yellow';
if(color === 'red'){
    console.log('Your in danger');
}
else if (color === 'yellow'){
    console.log('you mast stop hare');
}
else if (color === 'green'){
    console.log('You cross the road');
}
else {
    console.log('You stay your home');
}

// switch 
const colors = 'white';
switch(colors){
    case 'green':
        console.log('You cross the road');
        break;
    case 'red':
        console.log('Your in danger');
        break;
    case 'yellow':
        console.log('you mast stop hare');
        break;
    default:
        console.log('You stay your home');
}