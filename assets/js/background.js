const background = document.querySelector('.background');

if (background) {

    const banners = [
        'assets/images/global/chill_cats.gif',
        'assets/images/global/chill_devmario.gif',
        'assets/images/global/chill_walking.gif'
    ];

    let currentBanner = 0;

    const bannerInterval = 12000;
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