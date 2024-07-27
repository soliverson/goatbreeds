document.addEventListener('DOMContentLoaded', () => {
    const forumForm = document.getElementById('forum-form');
    const forumPosts = document.getElementById('forum-posts');
  
    forumForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const postContent = document.getElementById('post').value;
  
      const postElement = document.createElement('div');
      postElement.classList.add('forum-post');
      postElement.innerHTML = `
        <h3>${name}</h3>
        <p>${postContent}</p>
        <hr>
      `;
  
      forumPosts.appendChild(postElement);
  
      forumForm.reset();
    });
  });
  