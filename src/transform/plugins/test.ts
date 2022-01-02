const op = (opts: Record<string, any>) => {
    console.log(opts);
    return {
        postcssPlugin: 'test',
        Declaration (node: any) {
            console.log(node.parent.selector, node.prop, node.value, 111);
        },
    }
}

op.postcss = true;

module.exports = op;

export default op;