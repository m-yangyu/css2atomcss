import * as cheerio from 'cheerio';

const css2atomcss: css2atomcssType = (htmlContent: string, cssContent: string) => {
    const $ = cheerio.load(htmlContent);
    console.log($, cssContent);
    return '';
}

module.exports = css2atomcss;
export default css2atomcss;