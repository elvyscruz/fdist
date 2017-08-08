var exports = module.exports = {}

exports.fDist = function (arr) {

if(Array.isArray(arr)){

  var index = 0
  var dist = {}

  arr.map(function (i) {
    return arr.filter(function (f) {
        return i === f
    }).length
  }).forEach(function (freq) {
    dist[arr[index]] = freq
    ++index;
  })

} else return new TypeError()

return dist;
}
