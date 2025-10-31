// @ts-check
const { newStringRegex } = require("tsc-alias/dist/utils");

/** @param {{ orig: string}} params */
function replacer({orig}) {
    try {
        const match = orig.match(newStringRegex());
        const path = match && match.groups && match.groups.path;
        if (!path || typeof path !== 'string') {
            return orig;
        }

        if (!path.startsWith('@vscode-elements/elements')) {
            return orig;
        }

        const updatedPath = path.replace('@vscode-elements/elements', 'vscode-elements-x')
        return orig.replace(path, updatedPath);
    } catch {
        return orig;
    }
}

module.exports = { default: replacer };
