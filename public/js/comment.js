const commentFormHandler = async function (event) {
    event.preventDefault();

    const post_id = document.querySelector('input[name="post-id"]').value;
    const comment_body = document.querySelector('textarea[name="comment-body"]').value;

    if (body) {
        await fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);