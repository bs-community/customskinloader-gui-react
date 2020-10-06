module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  devOptions: {
    open: 'none',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'svelte-check --output human',
        watch: '$1 --watch',
        output: 'stream',
      },
    ],
    '@snowpack/plugin-optimize',
  ],
}
