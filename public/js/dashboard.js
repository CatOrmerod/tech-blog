const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  const id = document.querySelector('#updateBtn').getAttribute('data-id');

  const response = await fetch(`/api/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update blog');
  }
};

const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#blog-comment').value.trim();
  const blog_id = document.querySelector('#commentBtn').getAttribute('data-id');

  if (comment) {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ comment: comment, blog_id: blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create blog');
    }
  }
};

const newBlogForm = document.querySelector('#new-blog-form');
if (newBlogForm) {
  newBlogForm.addEventListener('submit', newFormHandler);
}
const updateBlogForm = document.querySelector('#update-blog-form');
if (updateBlogForm) {
  updateBlogForm.addEventListener('submit', updateFormHandler);
}
const newCommentForm = document.querySelector('#add-comment-form');
if (newCommentForm) {
  newCommentForm.addEventListener('submit', commentFormHandler);
}
const deleteBtn = document.querySelector('#deleteBtn');
if (delButtonHandler) {
  deleteBtn.addEventListener('click', delButtonHandler);
}
