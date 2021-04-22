module.exports = function myplugin() {
    return {
      visitor: {
        VariableDeclaration(path) {
        //   console.log('variableDeclaration() kind', path.node.kind )
          if( path.node.kind === 'const'){
            path.node.kind = 'var'
          }
        },
      },
    };
  }

// npx babel --plugins ./my-babel-plugin.js app.js
// https://babeljs.io/docs/en/babel-plugin-transform-block-scoping