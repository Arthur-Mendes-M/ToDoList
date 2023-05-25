const themes = [
    {
        name: "darkTheme",
        colors: {
            primary: "#1f1f1f",
            secondary: "#f1f1f1",
            terciary: "#8d9a4d"
        },
        colorsA: {
            primary: "31, 31, 31",
            secondary: "241, 241, 241",
            terciary: "#8d9a4d"
        }
    },
    {
        name: "lightTheme",
        colors: {
            primary: "#f1f1f1",
            secondary: "#1f1f1f",
            terciary: "#8d9a4d"
        },
        colorsA: {
            primary: "241, 241, 241",
            secondary: "31, 31, 31",
            terciary: "#8d9a4d"
        }
    }
]

const defaultTheme = themes.find(theme => theme.name === "darkTheme")

const getTheme = (themeName = defaultTheme) => {
    let currentTheme = defaultTheme

    themes.forEach(theme => {
        if(theme.name === themeName) {
            currentTheme = theme
        }
    })

    return currentTheme
}

export { getTheme }