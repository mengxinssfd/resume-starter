const dts = require('rollup-plugin-dts');
const path = require('path');
const fs = require('fs');

const p = path.resolve(__dirname, 'temp/types/Layout.d.ts');
let data = fs.readFileSync(p, 'utf-8');
data = data.replaceAll("import './index.scss';\n", '');
fs.writeFileSync(p, data);

const config = [
  {
    input: './temp/types/index.lib.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      //      function removeTempLayoutImportScss() {
      //        return {
      //          name: 'removeTempLayoutImportScss',
      //          options: {
      //            order: 'pre',
      //            first: true,
      //            handler: () => {
      //
      //            },
      //          },
      //        };
      //      },
      dts.default(),
    ],
  },
];

module.exports = config;
