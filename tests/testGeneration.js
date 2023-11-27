const RiskData = require("../src/RiskData.js")

let a = new RiskData(
    "Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.185 Mobile Safari/537.36",
    "en-US",
    24,
    4,
    8,
    360,
    640,
    360,
    640,
    -300,
    "America/Chicago",
    "MacIntel",
)

console.log(a.generate())