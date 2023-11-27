var calculateMd5_b64 = function (b) {
    return md5_binl2b64(md5_cmc5(md5_s2b(b), b.length * 8));
};

var md5_cmc5 = function (g, a) {
    g[a >> 5] |= 128 << ((a) % 32);
    g[(((a + 64) >>> 9) << 4) + 14] = a;
    var h = 1732584193;
    var i = -271733879;
    var j = -1732584194;
    var y = 271733878;
    for (var e = 0; e < g.length; e += 16) {
        var b = h;
        var c = i;
        var d = j;
        var f = y;
        h = md5_ff(h, i, j, y, g[e + 0], 7, -680876936);
        y = md5_ff(y, h, i, j, g[e + 1], 12, -389564586);
        j = md5_ff(j, y, h, i, g[e + 2], 17, 606105819);
        i = md5_ff(i, j, y, h, g[e + 3], 22, -1044525330);
        h = md5_ff(h, i, j, y, g[e + 4], 7, -176418897);
        y = md5_ff(y, h, i, j, g[e + 5], 12, 1200080426);
        j = md5_ff(j, y, h, i, g[e + 6], 17, -1473231341);
        i = md5_ff(i, j, y, h, g[e + 7], 22, -45705983);
        h = md5_ff(h, i, j, y, g[e + 8], 7, 1770035416);
        y = md5_ff(y, h, i, j, g[e + 9], 12, -1958414417);
        j = md5_ff(j, y, h, i, g[e + 10], 17, -42063);
        i = md5_ff(i, j, y, h, g[e + 11], 22, -1990404162);
        h = md5_ff(h, i, j, y, g[e + 12], 7, 1804603682);
        y = md5_ff(y, h, i, j, g[e + 13], 12, -40341101);
        j = md5_ff(j, y, h, i, g[e + 14], 17, -1502002290);
        i = md5_ff(i, j, y, h, g[e + 15], 22, 1236535329);
        h = md5_gg(h, i, j, y, g[e + 1], 5, -165796510);
        y = md5_gg(y, h, i, j, g[e + 6], 9, -1069501632);
        j = md5_gg(j, y, h, i, g[e + 11], 14, 643717713);
        i = md5_gg(i, j, y, h, g[e + 0], 20, -373897302);
        h = md5_gg(h, i, j, y, g[e + 5], 5, -701558691);
        y = md5_gg(y, h, i, j, g[e + 10], 9, 38016083);
        j = md5_gg(j, y, h, i, g[e + 15], 14, -660478335);
        i = md5_gg(i, j, y, h, g[e + 4], 20, -405537848);
        h = md5_gg(h, i, j, y, g[e + 9], 5, 568446438);
        y = md5_gg(y, h, i, j, g[e + 14], 9, -1019803690);
        j = md5_gg(j, y, h, i, g[e + 3], 14, -187363961);
        i = md5_gg(i, j, y, h, g[e + 8], 20, 1163531501);
        h = md5_gg(h, i, j, y, g[e + 13], 5, -1444681467);
        y = md5_gg(y, h, i, j, g[e + 2], 9, -51403784);
        j = md5_gg(j, y, h, i, g[e + 7], 14, 1735328473);
        i = md5_gg(i, j, y, h, g[e + 12], 20, -1926607734);
        h = md5_hh(h, i, j, y, g[e + 5], 4, -378558);
        y = md5_hh(y, h, i, j, g[e + 8], 11, -2022574463);
        j = md5_hh(j, y, h, i, g[e + 11], 16, 1839030562);
        i = md5_hh(i, j, y, h, g[e + 14], 23, -35309556);
        h = md5_hh(h, i, j, y, g[e + 1], 4, -1530992060);
        y = md5_hh(y, h, i, j, g[e + 4], 11, 1272893353);
        j = md5_hh(j, y, h, i, g[e + 7], 16, -155497632);
        i = md5_hh(i, j, y, h, g[e + 10], 23, -1094730640);
        h = md5_hh(h, i, j, y, g[e + 13], 4, 681279174);
        y = md5_hh(y, h, i, j, g[e + 0], 11, -358537222);
        j = md5_hh(j, y, h, i, g[e + 3], 16, -722521979);
        i = md5_hh(i, j, y, h, g[e + 6], 23, 76029189);
        h = md5_hh(h, i, j, y, g[e + 9], 4, -640364487);
        y = md5_hh(y, h, i, j, g[e + 12], 11, -421815835);
        j = md5_hh(j, y, h, i, g[e + 15], 16, 530742520);
        i = md5_hh(i, j, y, h, g[e + 2], 23, -995338651);
        h = md5_ii(h, i, j, y, g[e + 0], 6, -198630844);
        y = md5_ii(y, h, i, j, g[e + 7], 10, 1126891415);
        j = md5_ii(j, y, h, i, g[e + 14], 15, -1416354905);
        i = md5_ii(i, j, y, h, g[e + 5], 21, -57434055);
        h = md5_ii(h, i, j, y, g[e + 12], 6, 1700485571);
        y = md5_ii(y, h, i, j, g[e + 3], 10, -1894986606);
        j = md5_ii(j, y, h, i, g[e + 10], 15, -1051523);
        i = md5_ii(i, j, y, h, g[e + 1], 21, -2054922799);
        h = md5_ii(h, i, j, y, g[e + 8], 6, 1873313359);
        y = md5_ii(y, h, i, j, g[e + 15], 10, -30611744);
        j = md5_ii(j, y, h, i, g[e + 6], 15, -1560198380);
        i = md5_ii(i, j, y, h, g[e + 13], 21, 1309151649);
        h = md5_ii(h, i, j, y, g[e + 4], 6, -145523070);
        y = md5_ii(y, h, i, j, g[e + 11], 10, -1120210379);
        j = md5_ii(j, y, h, i, g[e + 2], 15, 718787259);
        i = md5_ii(i, j, y, h, g[e + 9], 21, -343485551);
        h = md5_safe_add(h, b);
        i = md5_safe_add(i, c);
        j = md5_safe_add(j, d);
        y = md5_safe_add(y, f);
    }
    return Array(h, i, j, y);
};

var md5_cmn = function (a, j, k, m, b, i) {
    return md5_safe_add(md5_bit_rol(md5_safe_add(md5_safe_add(j, a), md5_safe_add(m, i)), b), k);
};

var md5_ff = function (m, o, a, b, p, c, d) {
    return md5_cmn((o & a) | ((~o) & b), m, o, p, c, d);
};

var md5_gg = function (m, o, a, b, p, c, d) {
    return md5_cmn((o & b) | (a & (~b)), m, o, p, c, d);
};

var md5_hh = function (m, o, a, b, p, c, d) {
    return md5_cmn(o ^ a ^ b, m, o, p, c, d);
};

var md5_ii = function (m, o, a, b, p, c, d) {
    return md5_cmn(a ^ (o | (~b)), m, o, p, c, d);
};

var md5_safe_add = function (g, a) {
    var b = (g & 65535) + (a & 65535);
    var h = (g >> 16) + (a >> 16) + (b >> 16);
    return (h << 16) | (b & 65535);
};

var md5_bit_rol = function (a, b) {
    return (a << b) | (a >>> (32 - b));
};

var md5_s2b = function (c) {
    var h = Array();
    var a = (1 << 8) - 1;
    for (var b = 0; b < c.length * 8; b += 8) {
        h[b >> 5] |= (c.charCodeAt(b / 8) & a) << (b % 32);
    }
    return h;
};

var md5_binl2b64 = function (i) {
    var c = '';
    var j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var p = '';
    for (var b = 0; b < i.length * 4; b += 3) {
        var a = (((i[b >> 2] >> 8 * (b % 4)) & 255) << 16) | (((i[b + 1 >> 2] >> 8 * ((b + 1) % 4)) & 255) << 8) | ((i[b + 2 >> 2] >> 8 * ((b + 2) % 4)) & 255);
        for (var d = 0; d < 4; d++) {
            if (b * 8 + d * 6 > i.length * 32) {
                p += c;
            } else {
                p += j.charAt((a >> 6 * (3 - d)) & 63);
            }
        }
    }
    return p;
};

module.exports = {
    calculateMd5_b64
}