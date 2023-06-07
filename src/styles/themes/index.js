const themes = [
    {
        name: "darkTheme",
        colors: {
            primary: "#1f1f1f",
            secondary: "#f1f1f1",
            terciary: "#2CD3E1",
            extraDanger: "#FC4F00"
        },
        colorsA: {
            primary: "31, 31, 31",
            secondary: "241, 241, 241",
            terciary: "44, 211, 225",
            extraDanger: "252, 79, 0"
        }
    },
    {
        name: "lightTheme",
        colors: {
            primary: "#f1f1f1",
            secondary: "#1f1f1f",
            terciary: "#2CD3E1",
            extraDanger: "#FC4F00"
        },
        colorsA: {
            primary: "241, 241, 241",
            secondary: "31, 31, 31",
            terciary: "44, 211, 225",
            extraDanger: "252, 79, 0"
        }
    }
]

const defaultTheme = themes.find(theme => theme.name === "darkTheme")

const getTheme = () => {
    if(localStorage.getItem('theme')) {
        return JSON.parse(localStorage.getItem('theme'))
    } else {
        localStorage.setItem('theme', JSON.stringify(defaultTheme))
        return JSON.parse(localStorage.getItem('theme'))
    }
}

const setTheme = (themeName = defaultTheme) => {
    themes.forEach(theme => {
        theme.name === themeName ? localStorage.setItem('theme', JSON.stringify(theme)) : localStorage.setItem('theme', JSON.stringify(defaultTheme))
    })

    return JSON.parse(localStorage.getItem('theme'))
}

export { getTheme, setTheme }