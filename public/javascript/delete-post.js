async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'delete'
    });
};


document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);


