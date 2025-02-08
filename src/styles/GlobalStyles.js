
export const theme = {

    breakpoints: {
        mobile: "576px",      // Extra Small (Smartphones).
        tablet: "768px",      // Small (Tablets, large Smartphones).
        laptop: "992px",      // Medium (Laptops, small Desktops).
        desktop: "1200px",    // Large (Large Desktops).
        largeScreen: "1400px" // Extra large (4K-screens).
    },
    colours: {
        primary: "blue",
        secondary: "lightblue",
        textLight: "white",
        textDark: "black",
        border: "red",
        background: "blue",
    },
    fontSizes: {
        small: "0.875rem",
        medium: "1rem",
        large: "1.25rem",
    },
    spacing: {
        small: "0.5rem 0.5rem",
        medium: "1rem 1rem",
        large: "2rem 2rem",    // 32px.
    },

    borderRadius: "5px", // No object {} is required for a single value. 

    buttonSize: { // For smaller UI-Elements, that are within containers.
        width: {
            small: "8rem",
            medium: "12rem",
            large: "20rem"
        },
        height: {
            small: "8rem",
            medium: "12rem",
            large: "20rem"
        },
        borderRadius: "10px",

    },
    cardSize: { // For larger elements like cards, boxes or other containers.
        width: {
            small: "8rem",
            medium: "12rem",
            large: "20rem"
        },
        height: {
            small: "8rem",
            medium: "12rem",
            large: "16rem"
        },
        borderRadius: "10px",
    },
};