const postcss = require('postcss');

export const transformCss = (cssContent: string) => {
    postcss([
        require('tailwindcss')({})
    ]).process(cssContent).then((res: any) => console.log(res));
}


transformCss(`.sta { color: red }`);