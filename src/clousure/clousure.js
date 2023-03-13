
function greeantig() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeantig();
console.log(g);
console.log(g());