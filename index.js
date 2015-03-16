// Surge Ignore
// ============
//
// The default things we ignore when you
// deploy to Surge. https://surge.sh
//
// 1. We really don’t want your `.git` directory
// 2. We don’t need any dotfiles, like `.DS_Store`
// 3. We don’t want `node_modules/` since those should
//    already be compiled in somehow. Developers can opt-out
//    of this by adding `!node_modules/` to their `.surgeignore`.
// 4. Same goes for Bower as npm.

module.exports = [
  ".git",             // [1]
  ".*",               // [2]
  "node_modules",     // [3]
  "bower_components", // [4]
]
