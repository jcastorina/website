import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import nodeResolve from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js', // Path to your main JavaScript file
    output: {
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js', // The output bundle file
    },
    plugins: [
        svelte({}),
        serve({
            contentBase: 'public',
            host: 'localhost',
            port: 5000,
            
        }),
        !production && livereload({ watch: 'public' }),
        nodeResolve({
            exportConditions: ['svelte']
        }),
    ],
};
