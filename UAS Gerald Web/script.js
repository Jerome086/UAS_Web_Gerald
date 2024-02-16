document.addEventListener('DOMContentLoaded', function () {
    const albumsSection = document.getElementById('albums');
    const albums = albumsSection.querySelectorAll('.album');

    albums.forEach(album => {
        const addDescriptionBtn = album.querySelector('.add-description-btn');
        const closeDescriptionBtn = album.querySelector('.close-description-btn');
        const albumDescription = album.querySelector('.album-description');

        addDescriptionBtn.addEventListener('click', function () {
            albumDescription.style.display = 'block';
        });

        closeDescriptionBtn.addEventListener('click', function () {
            albumDescription.style.display = 'none';
        });

        album.addEventListener('click', function () {
            // Toggle class to activate album and description
            albums.forEach(a => a.classList.remove('active'));
            this.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');

    aboutSection.addEventListener('click', function () {
        // Toggle class to activate additional info and description
        aboutSection.classList.toggle('active');
    });
});
