import Test from './plugins/test';
const postcss = require('postcss');

export const transformCss = (cssContent: string) => {
    postcss([
        Test,
    ]).process(cssContent).then((res: any) => console.log(res));
}


transformCss(`.sta { @apply w-full }`);