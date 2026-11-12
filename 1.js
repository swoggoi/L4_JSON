let url = 'https://jsonplaceholder.typicode.com/posts'
let url1= 'https://jsonplaceholder.typicode.com/comments'
let url_user = 'https://jsonplaceholder.typicode.com/users'
let url_todos = 'https://jsonplaceholder.typicode.com/todos'

function getJson(url, callback){
fetch(url)
  .then(response => response.json())
  .then(json => callback(json))
}


getJson(url, function(posts){
    posts.sort((a,b) => b.title.length - a.title.length);

    console.log(posts);
});

getJson(url1, function(comments){
    comments.sort((a,b) => a.name.localeCompare(b.name))

      console.log(comments);
});


fetch(url_user)
    .then(response => response.json())
    .then(users =>{
        const filterUsers = users.map(user =>({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));

        console.log(filterUsers);
    })
    .catch(error => console.log(error));


fetch(url_todos)
    .then(response => response.json())
    .then(todos => {
        const incompleted = todos.filter(todo => !todo.completed);

        console.log(incompleted);
    })
    .catch(error => console.log(error));

async function runTasks() {
  try {
    
    const postsRes = await fetch(url);
    const posts = await postsRes.json();
    posts.sort((a, b) => b.title.length - a.title.length);
    console.log(posts);

    
    const commentsRes = await fetch(url1);
    const comments = await commentsRes.json();
    comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log( comments);

    
    const usersRes = await fetch(url_user);
    const users = await usersRes.json();    
    const filteredUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    }));
    console.log(filteredUsers);

    
    const todosRes = await fetch(url_todos);
    const todos = await todosRes.json();
    const uncompleted = todos.filter(todo => !todo.completed);
    console.log(uncompleted);

  } catch (error) {
    console.log(error);
  }
}

runTasks();
