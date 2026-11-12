const background = document.querySelector('.background');

if (background) {
    const banners = [
        'assets/images/global/chill_cats.webp',
        'assets/images/global/chill_devmario.webp',
        'assets/images/global/chill_walking.webp'
    ];

    let currentBanner = 0;

    const bannerInterval = 15000;
    const transitionDuration = 250;

    setInterval(() => {
        background.style.opacity = '0';

        setTimeout(() => {
            currentBanner = (currentBanner + 1) % banners.length;

            const nextImage = new Image();
            nextImage.src = banners[currentBanner];

            nextImage.onload = () => {

                background.style.backgroundImage =
                    `url("${banners[currentBanner]}")`;

                background.style.opacity = '1';
            };

        }, transitionDuration);

    }, bannerInterval);

}