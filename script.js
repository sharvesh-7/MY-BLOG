// Select the container where blog posts will appear
const blogContainer = document.getElementById('blog-posts');

// List of your static blog post files in GitHub
const blogPosts = [
  'https://raw.githubusercontent.com/USERNAME/REPO/main/posts/post1.json',
  'https://raw.githubusercontent.com/USERNAME/REPO/main/posts/post2.json',
  'https://raw.githubusercontent.com/USERNAME/REPO/main/posts/post3.json'
];

// Function to fetch and display each post
blogPosts.forEach(url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h3>${data.title}</h3>
        <small>${data.date}</small>
        <p>${data.content.substring(0, 150)}...</p>
        <a href="blog.html" class="btn">Read More</a>
      `;
      blogContainer.appendChild(postElement);
    })
    .catch(error => console.error('Error loading blog post:', error));
});
