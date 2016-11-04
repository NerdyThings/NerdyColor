
module.exports = function (wallaby) {
    return {
        files: [
            '*.ts',
            'lib/*.ts',
            '!node_modules/**/*.js',
        ],
        tests: [
            'test/*-wallaby.ts'
        ],
        compilers: {
            '*.ts': wallaby.compilers.typeScript({ module: 'commonjs' }),
            'lib/*.ts': wallaby.compilers.typeScript({ module: 'commonjs' }),
            'test/*-wallaby.ts': wallaby.compilers.typeScript({ module: 'commonjs' })
        },
        env: {
            type: 'node'
            // params: { runner: '--harmony --harmony_arrow_functions' }
        },
        // env: { type: 'node' },
        testFramework: 'jasmine', //'mocha',
        debug: true
    }
}