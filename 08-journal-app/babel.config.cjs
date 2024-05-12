module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: false } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    // Fix import meta Error for testing environment
    plugins: [
        () => visitorObject
    ]
};

const visitorObject = {
    visitor: {
        MetaProperty( path ) {
            path.replaceWithSourceString( 'process' );
        }
    }
};
