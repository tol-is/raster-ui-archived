const ParcelBundler = require('parcel-bundler');
const path = require('path');

const entry = path.join(process.cwd(), '/src/index.js');

const options = {
  outDir: './dist',
  target: 'node',
  cache: false,
  minify: true,
  scopeHoist: true,
  watch: false
};

(async function() {
  const bundler = new ParcelBundler(entry, options);
  await bundler.bundle();
})();
