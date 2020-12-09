import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "text": {
            "primary": "#ffffff",
            "secondary": "#e6e6e6",
            "hint": "#f57c00"
        },
        "background": {
            "default": "rgb(45,45,45)",
            "secondary": "#ffffff",
            "emphasis": "rgb(45,45,45)",
            "header": "#ffffff",
            "paper": "#f57c00"
        },
        "primary": {
            "main": "#304FFE",
            "light": "#536DFE",
            "dark": "#1A237E"
        },
        "secondary": {
            "main": "#FFAB00",
            "light": "#ffd740",
            "dark": "#ff8f00"
        },
        "contrastThreshold": 1.8
    },
    "shadows": [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

export default theme;

