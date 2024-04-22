"use strict";

//Level 1
//1-1
const URL = "https://jsonplaceholder.typicode.com/";

// fetch(`${URL}todos/1`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const TODOS = "/todos";
const COMMENTS = "/comments";
const USERS = "/users";
const POSTS = "/posts";

// fetch(`${URL}${USERS}`)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   });

function getTodo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(
        result.map((todo) => {
          return todo.title;
        })
      );
    });
}

getTodo(`${URL}${TODOS}`);

function getComments(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) =>
      console.log(
        result.map((comment) => {
          return comment.body;
        })
      )
    );
}

getComments(`${URL}${COMMENTS}`);

async function getUsersAsyncAwait(url) {
  const response = await fetch(url);
  const result = await response.json();

  let userNames = result.map((user) => {
    return user.name;
  });
  let userEmails = result.map((user) => {
    return user.email;
  });

  let users = userNames.map((name, index) => {
    return {
      name: name,
      email: userEmails[index],
    };
  });

  console.log(users);
}

getUsersAsyncAwait(`${URL}${USERS}`);

async function getPostsAsyncAwait(url) {
  const response = await fetch(url);
  const result = await response.json();

  let postId = result.map((post) => {
    return post.id;
  });
  let postTitle = result.map((post) => {
    return post.title;
  });

  let posts = postId.map((id, index) => {
    return {
      id: id,
      title: postTitle[index],
    };
  });

  console.log(posts);
}

getPostsAsyncAwait(`${URL}${POSTS}`);
