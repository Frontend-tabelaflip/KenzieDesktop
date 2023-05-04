const user = {
    username: 'Pedro',
    password: '1234',
};

function alterName(newName) {
    user.username = newName
}

function alterPass(newPass) {
    user.password = newPass
}

function logIn({password, username}) {
    if (user.username == username && user.password == password) {
        console.log('Logou');
    } else {
        console.log('Usuário inválido');
    } 
}

const userAccess = {
    username: 'Pedro',
    password: '1234',
}

logIn(userAccess);
