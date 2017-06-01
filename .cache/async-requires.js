// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-index-js": require("bundle-loader?lazy&name=page-component---src-pages-index-js!/Users/sioked/Development/ecomchicago/src/pages/index.js"),
  "page-component---src-pages-speakers-js": require("bundle-loader?lazy&name=page-component---src-pages-speakers-js!/Users/sioked/Development/ecomchicago/src/pages/speakers.js")
}

exports.json = {
  "index.json": require("bundle-loader?lazy&name=path---index!/Users/sioked/Development/ecomchicago/.cache/json/index.json"),
  "speakers.json": require("bundle-loader?lazy&name=path---speakers!/Users/sioked/Development/ecomchicago/.cache/json/speakers.json")
}

exports.layouts = {
  "index": require("bundle-loader?lazy&name=layout-component---index!/Users/sioked/Development/ecomchicago/src/layouts/index")
}