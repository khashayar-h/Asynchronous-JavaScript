console.log('Before');
getUser(1,getUsersData);

function getUsersData(user){
    console.log('User : ', user);
    getRepo(user.githubUsername,getRepositories);
}

function getRepositories(repo){
    console.log('Repos are ',repo);
}
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading user data from database');
        callback({id: id, githubUsername: 'khashayar-h'});
    }, 2000);
}

function getRepo(username, callback){
    setTimeout(()=>{
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}