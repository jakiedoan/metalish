const styleSlide1 = {
    translateX: -50,
    scale: 0.7,
    zIndex: 1,
    opacity: 0.2,
};

const styleSlide2 = {
    translateX: -26,
    scale: 0.8,
    zIndex: 2,
    opacity: 0.6,
};

const styleSlide3 = {
    translateX: 0,
    scale: 1,
    zIndex: 3,
    opacity: 1,
}

const styleSlide4 = {
    translateX: 26,
    scale: 0.8,
    zIndex: 2,
    opacity: 0.6,
};

const styleSlide5 = {
    translateX: 50,
    scale: 0.7,
    zIndex: 1,
    opacity: 0.2,
};

const Carousel5Enum = [
    [
        styleSlide3,
        styleSlide4,
        styleSlide5,
        styleSlide1,
        styleSlide2,
    ],
    [
        styleSlide2,
        styleSlide3,
        styleSlide4,
        styleSlide5,
        styleSlide1,
    ],
    [
        styleSlide1,
        styleSlide2,
        styleSlide3,
        styleSlide4,
        styleSlide5,

    ],
    [
        styleSlide5,
        styleSlide1,
        styleSlide2,
        styleSlide3,
        styleSlide4,
    ],
    [
        styleSlide4,
        styleSlide5,
        styleSlide1,
        styleSlide2,
        styleSlide3,
    ],
];

export default Carousel5Enum;