// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-index-js": preferDefault(require("/Users/sioked/Development/ecomchicago/src/pages/index.js")),
  "page-component---src-pages-speakers-js": preferDefault(require("/Users/sioked/Development/ecomchicago/src/pages/speakers.js"))
}

exports.json = {
  "index.json": require("/Users/sioked/Development/ecomchicago/.cache/json/index.json"),
  "speakers.json": require("/Users/sioked/Development/ecomchicago/.cache/json/speakers.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/sioked/Development/ecomchicago/src/layouts/index"))
}