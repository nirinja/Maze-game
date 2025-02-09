var u = "zyx", we = Math.PI / 180, pe = 180 / Math.PI;
var _ = new Float32Array([1, 0, 0, 1]), j = class h extends Float32Array {
    static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 4:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 4);
                break;
            case 1:
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t]) : super(t, 0, 4);
                break;
            default:
                super(_);
                break
        }
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    identity() {
        return this.set(_), this
    }

    multiply(e) {
        return h.multiply(this, this, e)
    }

    mul(e) {
        return this
    }

    transpose() {
        return h.transpose(this, this)
    }

    invert() {
        return h.invert(this, this)
    }

    scale(e) {
        return h.scale(this, this, e)
    }

    rotate(e) {
        return h.rotate(this, this, e)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    static fromValues(...e) {
        return new h(...e)
    }

    static set(e, ...t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    static identity(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
    }

    static transpose(e, t) {
        if (e === t) {
            let n = t[1];
            e[1] = t[2], e[2] = n
        } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
        return e
    }

    static invert(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = n * s - a * r;
        return i ? (i = 1 / i, e[0] = s * i, e[1] = -r * i, e[2] = -a * i, e[3] = n * i, e) : null
    }

    static adjoint(e, t) {
        let n = t[0];
        return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = n, e
    }

    static determinant(e) {
        return e[0] * e[3] - e[2] * e[1]
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
    }

    static sub(e, t, n) {
        return e
    }

    static multiply(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = n[0], y = n[1], L = n[2], k = n[3];
        return e[0] = r * c + s * y, e[1] = a * c + i * y, e[2] = r * L + s * k, e[3] = a * L + i * k, e
    }

    static mul(e, t, n) {
        return e
    }

    static rotate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = Math.sin(n), y = Math.cos(n);
        return e[0] = r * y + s * c, e[1] = a * y + i * c, e[2] = r * -c + s * y, e[3] = a * -c + i * y, e
    }

    static scale(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = n[0], y = n[1];
        return e[0] = r * c, e[1] = a * c, e[2] = s * y, e[3] = i * y, e
    }

    static fromRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = r, e[1] = n, e[2] = -n, e[3] = r, e
    }

    static fromScaling(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e
    }

    static frob(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3])
    }

    static multiplyScalar(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
    }

    static multiplyScalarAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e
    }

    static LDU(e, t, n, r) {
        return e[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - e[2] * n[1], [e, t, n]
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = t[0], c = t[1], y = t[2], L = t[3];
        return Math.abs(n - i) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - c) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(a - y) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(y)) && Math.abs(s - L) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(L))
    }

    static str(e) {
        return `Mat2(${e.join(", ")})`
    }
};
j.prototype.mul = j.prototype.multiply;
j.mul = j.multiply;
j.sub = j.subtract;
var ye = j;
var ee = new Float32Array([1, 0, 0, 1, 0, 0]), C = class h extends Float32Array {
    static BYTE_LENGTH = 6 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 6:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 6);
                break;
            case 1:
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t, t, t]) : super(t, 0, 6);
                break;
            default:
                super(ee);
                break
        }
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    identity() {
        return this.set(ee), this
    }

    multiply(e) {
        return h.multiply(this, this, e)
    }

    mul(e) {
        return this
    }

    translate(e) {
        return h.translate(this, this, e)
    }

    rotate(e) {
        return h.rotate(this, this, e)
    }

    scale(e) {
        return h.scale(this, this, e)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }

    static fromValues(...e) {
        return new h(...e)
    }

    static set(e, ...t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }

    static identity(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
    }

    static invert(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = n * s - r * a;
        return y ? (y = 1 / y, e[0] = s * y, e[1] = -r * y, e[2] = -a * y, e[3] = n * y, e[4] = (a * c - s * i) * y, e[5] = (r * i - n * c) * y, e) : null
    }

    static determinant(e) {
        return e[0] * e[3] - e[1] * e[2]
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e
    }

    static sub(e, t, n) {
        return e
    }

    static multiply(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = n[0], k = n[1], l = n[2], b = n[3],
            M = n[4], d = n[5];
        return e[0] = r * L + s * k, e[1] = a * L + i * k, e[2] = r * l + s * b, e[3] = a * l + i * b, e[4] = r * M + s * d + c, e[5] = a * M + i * d + y, e
    }

    static mul(e, t, n) {
        return e
    }

    static translate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = n[0], k = n[1];
        return e[0] = r, e[1] = a, e[2] = s, e[3] = i, e[4] = r * L + s * k + c, e[5] = a * L + i * k + y, e
    }

    static rotate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = Math.sin(n), k = Math.cos(n);
        return e[0] = r * k + s * L, e[1] = a * k + i * L, e[2] = r * -L + s * k, e[3] = a * -L + i * k, e[4] = c, e[5] = y, e
    }

    static scale(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = n[0], k = n[1];
        return e[0] = r * L, e[1] = a * L, e[2] = s * k, e[3] = i * k, e[4] = c, e[5] = y, e
    }

    static fromTranslation(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e
    }

    static fromRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = r, e[1] = n, e[2] = -n, e[3] = r, e[4] = 0, e[5] = 0, e
    }

    static fromScaling(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e
    }

    static frob(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3] + e[4] * e[4] + e[5] * e[5] + 1)
    }

    static multiplyScalar(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e
    }

    static multiplyScalarAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = e[4], c = e[5], y = t[0], L = t[1], k = t[2], l = t[3],
            b = t[4], M = t[5];
        return Math.abs(n - y) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(y)) && Math.abs(r - L) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(L)) && Math.abs(a - k) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(k)) && Math.abs(s - l) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(l)) && Math.abs(i - b) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(c - M) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(M))
    }

    static str(e) {
        return `Mat2d(${e.join(", ")})`
    }
};
C.mul = C.multiply;
C.sub = C.subtract;
var Le = C;
var te = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), X = class h extends Float32Array {
    static BYTE_LENGTH = 9 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 9:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 9);
                break;
            case 1:
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t, t, t, t, t, t]) : super(t, 0, 9);
                break;
            default:
                super(te);
                break
        }
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    identity() {
        return this.set(te), this
    }

    multiply(e) {
        return h.multiply(this, this, e)
    }

    mul(e) {
        return this
    }

    transpose() {
        return h.transpose(this, this)
    }

    invert() {
        return h.invert(this, this)
    }

    translate(e) {
        return h.translate(this, this, e)
    }

    rotate(e) {
        return h.rotate(this, this, e)
    }

    scale(e) {
        return h.scale(this, this, e)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }

    static fromValues(...e) {
        return new h(...e)
    }

    static set(e, ...t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }

    static identity(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }

    static transpose(e, t) {
        if (e === t) {
            let n = t[1], r = t[2], a = t[5];
            e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = r, e[7] = a
        } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
        return e
    }

    static invert(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8], l = k * i - c * L,
            b = -k * s + c * y, M = L * s - i * y, d = n * l + r * b + a * M;
        return d ? (d = 1 / d, e[0] = l * d, e[1] = (-k * r + a * L) * d, e[2] = (c * r - a * i) * d, e[3] = b * d, e[4] = (k * n - a * y) * d, e[5] = (-c * n + a * s) * d, e[6] = M * d, e[7] = (-L * n + r * y) * d, e[8] = (i * n - r * s) * d, e) : null
    }

    static adjoint(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8];
        return e[0] = i * k - c * L, e[1] = a * L - r * k, e[2] = r * c - a * i, e[3] = c * y - s * k, e[4] = n * k - a * y, e[5] = a * s - n * c, e[6] = s * L - i * y, e[7] = r * y - n * L, e[8] = n * i - r * s, e
    }

    static determinant(e) {
        let t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], i = e[5], c = e[6], y = e[7], L = e[8];
        return t * (L * s - i * y) + n * (-L * a + i * c) + r * (y * a - s * c)
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e
    }

    static sub(e, t, n) {
        return e
    }

    static multiply(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7], l = t[8], b = n[0],
            M = n[1], d = n[2];
        return e[0] = b * r + M * i + d * L, e[1] = b * a + M * c + d * k, e[2] = b * s + M * y + d * l, b = n[3], M = n[4], d = n[5], e[3] = b * r + M * i + d * L, e[4] = b * a + M * c + d * k, e[5] = b * s + M * y + d * l, b = n[6], M = n[7], d = n[8], e[6] = b * r + M * i + d * L, e[7] = b * a + M * c + d * k, e[8] = b * s + M * y + d * l, e
    }

    static mul(e, t, n) {
        return e
    }

    static translate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7], l = t[8], b = n[0],
            M = n[1];
        return e[0] = r, e[1] = a, e[2] = s, e[3] = i, e[4] = c, e[5] = y, e[6] = b * r + M * i + L, e[7] = b * a + M * c + k, e[8] = b * s + M * y + l, e
    }

    static rotate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7], l = t[8], b = Math.sin(n),
            M = Math.cos(n);
        return e[0] = M * r + b * i, e[1] = M * a + b * c, e[2] = M * s + b * y, e[3] = M * i - b * r, e[4] = M * c - b * a, e[5] = M * y - b * s, e[6] = L, e[7] = k, e[8] = l, e
    }

    static scale(e, t, n) {
        let r = n[0], a = n[1];
        return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = a * t[3], e[4] = a * t[4], e[5] = a * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }

    static fromTranslation(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e
    }

    static fromRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = r, e[1] = n, e[2] = 0, e[3] = -n, e[4] = r, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }

    static fromScaling(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }

    static fromMat2d(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e
    }

    static fromQuat(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = n + n, c = r + r, y = a + a, L = n * i, k = r * i, l = r * c,
            b = a * i, M = a * c, d = a * y, m = s * i, o = s * c, x = s * y;
        return e[0] = 1 - l - d, e[3] = k - x, e[6] = b + o, e[1] = k + x, e[4] = 1 - L - d, e[7] = M - m, e[2] = b - o, e[5] = M + m, e[8] = 1 - L - l, e
    }

    static fromMat4(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }

    static normalFromMat4(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8], l = t[9],
            b = t[10], M = t[11], d = t[12], m = t[13], o = t[14], x = t[15], z = n * c - r * i, R = n * y - a * i,
            V = n * L - s * i, w = r * y - a * c, g = r * L - s * c, T = a * L - s * y, E = k * m - l * d,
            F = k * o - b * d, f = k * x - M * d, N = l * o - b * m, B = l * x - M * m, D = b * x - M * o,
            Q = z * D - R * B + V * N + w * f - g * F + T * E;
        return Q ? (Q = 1 / Q, e[0] = (c * D - y * B + L * N) * Q, e[1] = (y * f - i * D - L * F) * Q, e[2] = (i * B - c * f + L * E) * Q, e[3] = (a * B - r * D - s * N) * Q, e[4] = (n * D - a * f + s * F) * Q, e[5] = (r * f - n * B - s * E) * Q, e[6] = (m * T - o * g + x * w) * Q, e[7] = (o * V - d * T - x * R) * Q, e[8] = (d * g - m * V + x * z) * Q, e) : null
    }

    static normalFromMat4Fast(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[4], i = t[5], c = t[6], y = t[8], L = t[9], k = t[10];
        return e[0] = i * k - k * L, e[1] = c * y - y * k, e[2] = s * L - L * y, e[3] = L * a - k * r, e[4] = k * n - y * a, e[5] = y * r - L * n, e[6] = r * c - a * i, e[7] = a * s - n * c, e[8] = n * i - r * s, e
    }

    static projection(e, t, n) {
        return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e
    }

    static frob(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3] + e[4] * e[4] + e[5] * e[5] + e[6] * e[6] + e[7] * e[7] + e[8] * e[8])
    }

    static multiplyScalar(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e
    }

    static multiplyScalarAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = e[4], c = e[5], y = e[6], L = e[7], k = e[8], l = t[0],
            b = t[1], M = t[2], d = t[3], m = t[4], o = t[5], x = t[6], z = t[7], R = t[8];
        return Math.abs(n - l) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(r - b) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(b)) && Math.abs(a - M) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(M)) && Math.abs(s - d) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(i - m) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - o) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(o)) && Math.abs(y - x) <= 1e-6 * Math.max(1, Math.abs(y), Math.abs(x)) && Math.abs(L - z) <= 1e-6 * Math.max(1, Math.abs(L), Math.abs(z)) && Math.abs(k - R) <= 1e-6 * Math.max(1, Math.abs(k), Math.abs(R))
    }

    static str(e) {
        return `Mat3(${e.join(", ")})`
    }
};
X.prototype.mul = X.prototype.multiply;
X.mul = X.multiply;
X.sub = X.subtract;
var ke = X;
var ne = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), O = class h extends Float32Array {
    static BYTE_LENGTH = 16 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 16:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 16);
                break;
            case 1:
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t]) : super(t, 0, 16);
                break;
            default:
                super(ne);
                break
        }
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    identity() {
        return this.set(ne), this
    }

    multiply(e) {
        return h.multiply(this, this, e)
    }

    mul(e) {
        return this
    }

    transpose() {
        return h.transpose(this, this)
    }

    invert() {
        return h.invert(this, this)
    }

    translate(e) {
        return h.translate(this, this, e)
    }

    rotate(e, t) {
        return h.rotate(this, this, e, t)
    }

    scale(e) {
        return h.scale(this, this, e)
    }

    rotateX(e) {
        return h.rotateX(this, this, e)
    }

    rotateY(e) {
        return h.rotateY(this, this, e)
    }

    rotateZ(e) {
        return h.rotateZ(this, this, e)
    }

    perspectiveNO(e, t, n, r) {
        return h.perspectiveNO(this, e, t, n, r)
    }

    perspectiveZO(e, t, n, r) {
        return h.perspectiveZO(this, e, t, n, r)
    }

    orthoNO(e, t, n, r, a, s) {
        return h.orthoNO(this, e, t, n, r, a, s)
    }

    orthoZO(e, t, n, r, a, s) {
        return h.orthoZO(this, e, t, n, r, a, s)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }

    static fromValues(...e) {
        return new h(...e)
    }

    static set(e, ...t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }

    static identity(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static transpose(e, t) {
        if (e === t) {
            let n = t[1], r = t[2], a = t[3], s = t[6], i = t[7], c = t[11];
            e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = s, e[11] = t[14], e[12] = a, e[13] = i, e[14] = c
        } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
        return e
    }

    static invert(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8], l = t[9],
            b = t[10], M = t[11], d = t[12], m = t[13], o = t[14], x = t[15], z = n * c - r * i, R = n * y - a * i,
            V = n * L - s * i, w = r * y - a * c, g = r * L - s * c, T = a * L - s * y, E = k * m - l * d,
            F = k * o - b * d, f = k * x - M * d, N = l * o - b * m, B = l * x - M * m, D = b * x - M * o,
            Q = z * D - R * B + V * N + w * f - g * F + T * E;
        return Q ? (Q = 1 / Q, e[0] = (c * D - y * B + L * N) * Q, e[1] = (a * B - r * D - s * N) * Q, e[2] = (m * T - o * g + x * w) * Q, e[3] = (b * g - l * T - M * w) * Q, e[4] = (y * f - i * D - L * F) * Q, e[5] = (n * D - a * f + s * F) * Q, e[6] = (o * V - d * T - x * R) * Q, e[7] = (k * T - b * V + M * R) * Q, e[8] = (i * B - c * f + L * E) * Q, e[9] = (r * f - n * B - s * E) * Q, e[10] = (d * g - m * V + x * z) * Q, e[11] = (l * V - k * g - M * z) * Q, e[12] = (c * F - i * N - y * E) * Q, e[13] = (n * N - r * F + a * E) * Q, e[14] = (m * R - d * w - o * z) * Q, e[15] = (k * w - l * R + b * z) * Q, e) : null
    }

    static adjoint(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8], l = t[9],
            b = t[10], M = t[11], d = t[12], m = t[13], o = t[14], x = t[15], z = n * c - r * i, R = n * y - a * i,
            V = n * L - s * i, w = r * y - a * c, g = r * L - s * c, T = a * L - s * y, E = k * m - l * d,
            F = k * o - b * d, f = k * x - M * d, N = l * o - b * m, B = l * x - M * m, D = b * x - M * o;
        return e[0] = c * D - y * B + L * N, e[1] = a * B - r * D - s * N, e[2] = m * T - o * g + x * w, e[3] = b * g - l * T - M * w, e[4] = y * f - i * D - L * F, e[5] = n * D - a * f + s * F, e[6] = o * V - d * T - x * R, e[7] = k * T - b * V + M * R, e[8] = i * B - c * f + L * E, e[9] = r * f - n * B - s * E, e[10] = d * g - m * V + x * z, e[11] = l * V - k * g - M * z, e[12] = c * F - i * N - y * E, e[13] = n * N - r * F + a * E, e[14] = m * R - d * w - o * z, e[15] = k * w - l * R + b * z, e
    }

    static determinant(e) {
        let t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], i = e[5], c = e[6], y = e[7], L = e[8], k = e[9],
            l = e[10], b = e[11], M = e[12], d = e[13], m = e[14], o = e[15], x = t * i - n * s, z = t * c - r * s,
            R = n * c - r * i, V = L * d - k * M, w = L * m - l * M, g = k * m - l * d, T = t * g - n * w + r * V,
            E = s * g - i * w + c * V, F = L * R - k * z + l * x, f = M * R - d * z + m * x;
        return y * T - a * E + o * F - b * f
    }

    static multiply(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7], l = t[8], b = t[9],
            M = t[10], d = t[11], m = t[12], o = t[13], x = t[14], z = t[15], R = n[0], V = n[1], w = n[2], g = n[3];
        return e[0] = R * r + V * c + w * l + g * m, e[1] = R * a + V * y + w * b + g * o, e[2] = R * s + V * L + w * M + g * x, e[3] = R * i + V * k + w * d + g * z, R = n[4], V = n[5], w = n[6], g = n[7], e[4] = R * r + V * c + w * l + g * m, e[5] = R * a + V * y + w * b + g * o, e[6] = R * s + V * L + w * M + g * x, e[7] = R * i + V * k + w * d + g * z, R = n[8], V = n[9], w = n[10], g = n[11], e[8] = R * r + V * c + w * l + g * m, e[9] = R * a + V * y + w * b + g * o, e[10] = R * s + V * L + w * M + g * x, e[11] = R * i + V * k + w * d + g * z, R = n[12], V = n[13], w = n[14], g = n[15], e[12] = R * r + V * c + w * l + g * m, e[13] = R * a + V * y + w * b + g * o, e[14] = R * s + V * L + w * M + g * x, e[15] = R * i + V * k + w * d + g * z, e
    }

    static mul(e, t, n) {
        return e
    }

    static translate(e, t, n) {
        let r = n[0], a = n[1], s = n[2];
        if (t === e) e[12] = t[0] * r + t[4] * a + t[8] * s + t[12], e[13] = t[1] * r + t[5] * a + t[9] * s + t[13], e[14] = t[2] * r + t[6] * a + t[10] * s + t[14], e[15] = t[3] * r + t[7] * a + t[11] * s + t[15]; else {
            let i = t[0], c = t[1], y = t[2], L = t[3], k = t[4], l = t[5], b = t[6], M = t[7], d = t[8], m = t[9],
                o = t[10], x = t[11];
            e[0] = i, e[1] = c, e[2] = y, e[3] = L, e[4] = k, e[5] = l, e[6] = b, e[7] = M, e[8] = d, e[9] = m, e[10] = o, e[11] = x, e[12] = i * r + k * a + d * s + t[12], e[13] = c * r + l * a + m * s + t[13], e[14] = y * r + b * a + o * s + t[14], e[15] = L * r + M * a + x * s + t[15]
        }
        return e
    }

    static scale(e, t, n) {
        let r = n[0], a = n[1], s = n[2];
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * a, e[5] = t[5] * a, e[6] = t[6] * a, e[7] = t[7] * a, e[8] = t[8] * s, e[9] = t[9] * s, e[10] = t[10] * s, e[11] = t[11] * s, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }

    static rotate(e, t, n, r) {
        let a = r[0], s = r[1], i = r[2], c = Math.sqrt(a * a + s * s + i * i);
        if (c < 1e-6) return null;
        c = 1 / c, a *= c, s *= c, i *= c;
        let y = Math.sin(n), L = Math.cos(n), k = 1 - L, l = t[0], b = t[1], M = t[2], d = t[3], m = t[4], o = t[5],
            x = t[6], z = t[7], R = t[8], V = t[9], w = t[10], g = t[11], T = a * a * k + L, E = s * a * k + i * y,
            F = i * a * k - s * y, f = a * s * k - i * y, N = s * s * k + L, B = i * s * k + a * y,
            D = a * i * k + s * y, Q = s * i * k - a * y, Z = i * i * k + L;
        return e[0] = l * T + m * E + R * F, e[1] = b * T + o * E + V * F, e[2] = M * T + x * E + w * F, e[3] = d * T + z * E + g * F, e[4] = l * f + m * N + R * B, e[5] = b * f + o * N + V * B, e[6] = M * f + x * N + w * B, e[7] = d * f + z * N + g * B, e[8] = l * D + m * Q + R * Z, e[9] = b * D + o * Q + V * Z, e[10] = M * D + x * Q + w * Z, e[11] = d * D + z * Q + g * Z, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }

    static rotateX(e, t, n) {
        let r = Math.sin(n), a = Math.cos(n), s = t[4], i = t[5], c = t[6], y = t[7], L = t[8], k = t[9], l = t[10],
            b = t[11];
        return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = s * a + L * r, e[5] = i * a + k * r, e[6] = c * a + l * r, e[7] = y * a + b * r, e[8] = L * a - s * r, e[9] = k * a - i * r, e[10] = l * a - c * r, e[11] = b * a - y * r, e
    }

    static rotateY(e, t, n) {
        let r = Math.sin(n), a = Math.cos(n), s = t[0], i = t[1], c = t[2], y = t[3], L = t[8], k = t[9], l = t[10],
            b = t[11];
        return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * a - L * r, e[1] = i * a - k * r, e[2] = c * a - l * r, e[3] = y * a - b * r, e[8] = s * r + L * a, e[9] = i * r + k * a, e[10] = c * r + l * a, e[11] = y * r + b * a, e
    }

    static rotateZ(e, t, n) {
        let r = Math.sin(n), a = Math.cos(n), s = t[0], i = t[1], c = t[2], y = t[3], L = t[4], k = t[5], l = t[6],
            b = t[7];
        return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * a + L * r, e[1] = i * a + k * r, e[2] = c * a + l * r, e[3] = y * a + b * r, e[4] = L * a - s * r, e[5] = k * a - i * r, e[6] = l * a - c * r, e[7] = b * a - y * r, e
    }

    static fromTranslation(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e
    }

    static fromScaling(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static fromRotation(e, t, n) {
        let r = n[0], a = n[1], s = n[2], i = Math.sqrt(r * r + a * a + s * s);
        if (i < 1e-6) return null;
        i = 1 / i, r *= i, a *= i, s *= i;
        let c = Math.sin(t), y = Math.cos(t), L = 1 - y;
        return e[0] = r * r * L + y, e[1] = a * r * L + s * c, e[2] = s * r * L - a * c, e[3] = 0, e[4] = r * a * L - s * c, e[5] = a * a * L + y, e[6] = s * a * L + r * c, e[7] = 0, e[8] = r * s * L + a * c, e[9] = a * s * L - r * c, e[10] = s * s * L + y, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static fromXRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static fromYRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = r, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static fromZRotation(e, t) {
        let n = Math.sin(t), r = Math.cos(t);
        return e[0] = r, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static fromRotationTranslation(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = r + r, y = a + a, L = s + s, k = r * c, l = r * y, b = r * L,
            M = a * y, d = a * L, m = s * L, o = i * c, x = i * y, z = i * L;
        return e[0] = 1 - (M + m), e[1] = l + z, e[2] = b - x, e[3] = 0, e[4] = l - z, e[5] = 1 - (k + m), e[6] = d + o, e[7] = 0, e[8] = b + x, e[9] = d - o, e[10] = 1 - (k + M), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
    }

    static fromQuat2(e, t) {
        let n = -t[0], r = -t[1], a = -t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7],
            k = n * n + r * r + a * a + s * s;
        return k > 0 ? (Y[0] = (i * s + L * n + c * a - y * r) * 2 / k, Y[1] = (c * s + L * r + y * n - i * a) * 2 / k, Y[2] = (y * s + L * a + i * r - c * n) * 2 / k) : (Y[0] = (i * s + L * n + c * a - y * r) * 2, Y[1] = (c * s + L * r + y * n - i * a) * 2, Y[2] = (y * s + L * a + i * r - c * n) * 2), h.fromRotationTranslation(e, t, Y), e
    }

    static normalFromMat4(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = t[4], c = t[5], y = t[6], L = t[7], k = t[8], l = t[9],
            b = t[10], M = t[11], d = t[12], m = t[13], o = t[14], x = t[15], z = n * c - r * i, R = n * y - a * i,
            V = n * L - s * i, w = r * y - a * c, g = r * L - s * c, T = a * L - s * y, E = k * m - l * d,
            F = k * o - b * d, f = k * x - M * d, N = l * o - b * m, B = l * x - M * m, D = b * x - M * o,
            Q = z * D - R * B + V * N + w * f - g * F + T * E;
        return Q ? (Q = 1 / Q, e[0] = (c * D - y * B + L * N) * Q, e[1] = (y * f - i * D - L * F) * Q, e[2] = (i * B - c * f + L * E) * Q, e[3] = 0, e[4] = (a * B - r * D - s * N) * Q, e[5] = (n * D - a * f + s * F) * Q, e[6] = (r * f - n * B - s * E) * Q, e[7] = 0, e[8] = (m * T - o * g + x * w) * Q, e[9] = (o * V - d * T - x * R) * Q, e[10] = (d * g - m * V + x * z) * Q, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e) : null
    }

    static normalFromMat4Fast(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[4], i = t[5], c = t[6], y = t[8], L = t[9], k = t[10];
        return e[0] = i * k - k * L, e[1] = c * y - y * k, e[2] = s * L - L * y, e[3] = 0, e[4] = L * a - k * r, e[5] = k * n - y * a, e[6] = y * r - L * n, e[7] = 0, e[8] = r * c - a * i, e[9] = a * s - n * c, e[10] = n * i - r * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static getTranslation(e, t) {
        return e[0] = t[12], e[1] = t[13], e[2] = t[14], e
    }

    static getScaling(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[4], i = t[5], c = t[6], y = t[8], L = t[9], k = t[10];
        return e[0] = Math.sqrt(n * n + r * r + a * a), e[1] = Math.sqrt(s * s + i * i + c * c), e[2] = Math.sqrt(y * y + L * L + k * k), e
    }

    static getRotation(e, t) {
        h.getScaling(Y, t);
        let n = 1 / Y[0], r = 1 / Y[1], a = 1 / Y[2], s = t[0] * n, i = t[1] * r, c = t[2] * a, y = t[4] * n,
            L = t[5] * r, k = t[6] * a, l = t[8] * n, b = t[9] * r, M = t[10] * a, d = s + L + M, m = 0;
        return d > 0 ? (m = Math.sqrt(d + 1) * 2, e[3] = .25 * m, e[0] = (k - b) / m, e[1] = (l - c) / m, e[2] = (i - y) / m) : s > L && s > M ? (m = Math.sqrt(1 + s - L - M) * 2, e[3] = (k - b) / m, e[0] = .25 * m, e[1] = (i + y) / m, e[2] = (l + c) / m) : L > M ? (m = Math.sqrt(1 + L - s - M) * 2, e[3] = (l - c) / m, e[0] = (i + y) / m, e[1] = .25 * m, e[2] = (k + b) / m) : (m = Math.sqrt(1 + M - s - L) * 2, e[3] = (i - y) / m, e[0] = (l + c) / m, e[1] = (k + b) / m, e[2] = .25 * m), e
    }

    static decompose(e, t, n, r) {
        t[0] = r[12], t[1] = r[13], t[2] = r[14];
        let a = r[0], s = r[1], i = r[2], c = r[4], y = r[5], L = r[6], k = r[8], l = r[9], b = r[10];
        n[0] = Math.sqrt(a * a + s * s + i * i), n[1] = Math.sqrt(c * c + y * y + L * L), n[2] = Math.sqrt(k * k + l * l + b * b);
        let M = 1 / n[0], d = 1 / n[1], m = 1 / n[2], o = a * M, x = s * d, z = i * m, R = c * M, V = y * d, w = L * m,
            g = k * M, T = l * d, E = b * m, F = o + V + E, f = 0;
        return F > 0 ? (f = Math.sqrt(F + 1) * 2, e[3] = .25 * f, e[0] = (w - T) / f, e[1] = (g - z) / f, e[2] = (x - R) / f) : o > V && o > E ? (f = Math.sqrt(1 + o - V - E) * 2, e[3] = (w - T) / f, e[0] = .25 * f, e[1] = (x + R) / f, e[2] = (g + z) / f) : V > E ? (f = Math.sqrt(1 + V - o - E) * 2, e[3] = (g - z) / f, e[0] = (x + R) / f, e[1] = .25 * f, e[2] = (w + T) / f) : (f = Math.sqrt(1 + E - o - V) * 2, e[3] = (x - R) / f, e[0] = (g + z) / f, e[1] = (w + T) / f, e[2] = .25 * f), e
    }

    static fromRotationTranslationScale(e, t, n, r) {
        let a = t[0], s = t[1], i = t[2], c = t[3], y = a + a, L = s + s, k = i + i, l = a * y, b = a * L, M = a * k,
            d = s * L, m = s * k, o = i * k, x = c * y, z = c * L, R = c * k, V = r[0], w = r[1], g = r[2];
        return e[0] = (1 - (d + o)) * V, e[1] = (b + R) * V, e[2] = (M - z) * V, e[3] = 0, e[4] = (b - R) * w, e[5] = (1 - (l + o)) * w, e[6] = (m + x) * w, e[7] = 0, e[8] = (M + z) * g, e[9] = (m - x) * g, e[10] = (1 - (l + d)) * g, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
    }

    static fromRotationTranslationScaleOrigin(e, t, n, r, a) {
        let s = t[0], i = t[1], c = t[2], y = t[3], L = s + s, k = i + i, l = c + c, b = s * L, M = s * k, d = s * l,
            m = i * k, o = i * l, x = c * l, z = y * L, R = y * k, V = y * l, w = r[0], g = r[1], T = r[2], E = a[0],
            F = a[1], f = a[2], N = (1 - (m + x)) * w, B = (M + V) * w, D = (d - R) * w, Q = (M - V) * g,
            Z = (1 - (b + x)) * g, W = (o + z) * g, U = (d + R) * T, K = (o - z) * T, v = (1 - (b + m)) * T;
        return e[0] = N, e[1] = B, e[2] = D, e[3] = 0, e[4] = Q, e[5] = Z, e[6] = W, e[7] = 0, e[8] = U, e[9] = K, e[10] = v, e[11] = 0, e[12] = n[0] + E - (N * E + Q * F + U * f), e[13] = n[1] + F - (B * E + Z * F + K * f), e[14] = n[2] + f - (D * E + W * F + v * f), e[15] = 1, e
    }

    static fromQuat(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = n + n, c = r + r, y = a + a, L = n * i, k = r * i, l = r * c,
            b = a * i, M = a * c, d = a * y, m = s * i, o = s * c, x = s * y;
        return e[0] = 1 - l - d, e[1] = k + x, e[2] = b - o, e[3] = 0, e[4] = k - x, e[5] = 1 - L - d, e[6] = M + m, e[7] = 0, e[8] = b + o, e[9] = M - m, e[10] = 1 - L - l, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }

    static frustumNO(e, t, n, r, a, s, i = 1 / 0) {
        let c = 1 / (n - t), y = 1 / (a - r);
        if (e[0] = s * 2 * c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s * 2 * y, e[6] = 0, e[7] = 0, e[8] = (n + t) * c, e[9] = (a + r) * y, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0) {
            let L = 1 / (s - i);
            e[10] = (i + s) * L, e[14] = 2 * i * s * L
        } else e[10] = -1, e[14] = -2 * s;
        return e
    }

    static frustum(e, t, n, r, a, s, i = 1 / 0) {
        return e
    }

    static frustumZO(e, t, n, r, a, s, i = 1 / 0) {
        let c = 1 / (n - t), y = 1 / (a - r);
        if (e[0] = s * 2 * c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s * 2 * y, e[6] = 0, e[7] = 0, e[8] = (n + t) * c, e[9] = (a + r) * y, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0) {
            let L = 1 / (s - i);
            e[10] = i * L, e[14] = i * s * L
        } else e[10] = -1, e[14] = -s;
        return e
    }

    static perspectiveNO(e, t, n, r, a = 1 / 0) {
        let s = 1 / Math.tan(t / 2);
        if (e[0] = s / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0) {
            let i = 1 / (r - a);
            e[10] = (a + r) * i, e[14] = 2 * a * r * i
        } else e[10] = -1, e[14] = -2 * r;
        return e
    }

    static perspective(e, t, n, r, a = 1 / 0) {
        return e
    }

    static perspectiveZO(e, t, n, r, a = 1 / 0) {
        let s = 1 / Math.tan(t / 2);
        if (e[0] = s / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0) {
            let i = 1 / (r - a);
            e[10] = a * i, e[14] = a * r * i
        } else e[10] = -1, e[14] = -r;
        return e
    }

    static perspectiveFromFieldOfView(e, t, n, r) {
        let a = Math.tan(t.upDegrees * Math.PI / 180), s = Math.tan(t.downDegrees * Math.PI / 180),
            i = Math.tan(t.leftDegrees * Math.PI / 180), c = Math.tan(t.rightDegrees * Math.PI / 180), y = 2 / (i + c),
            L = 2 / (a + s);
        return e[0] = y, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = L, e[6] = 0, e[7] = 0, e[8] = -((i - c) * y * .5), e[9] = (a - s) * L * .5, e[10] = r / (n - r), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * n / (n - r), e[15] = 0, e
    }

    static orthoNO(e, t, n, r, a, s, i) {
        let c = 1 / (t - n), y = 1 / (r - a), L = 1 / (s - i);
        return e[0] = -2 * c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * y, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * L, e[11] = 0, e[12] = (t + n) * c, e[13] = (a + r) * y, e[14] = (i + s) * L, e[15] = 1, e
    }

    static ortho(e, t, n, r, a, s, i) {
        return e
    }

    static orthoZO(e, t, n, r, a, s, i) {
        let c = 1 / (t - n), y = 1 / (r - a), L = 1 / (s - i);
        return e[0] = -2 * c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * y, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = L, e[11] = 0, e[12] = (t + n) * c, e[13] = (a + r) * y, e[14] = s * L, e[15] = 1, e
    }

    static lookAt(e, t, n, r) {
        let a = t[0], s = t[1], i = t[2], c = r[0], y = r[1], L = r[2], k = n[0], l = n[1], b = n[2];
        if (Math.abs(a - k) < 1e-6 && Math.abs(s - l) < 1e-6 && Math.abs(i - b) < 1e-6) return h.identity(e);
        let M = a - k, d = s - l, m = i - b, o = 1 / Math.sqrt(M * M + d * d + m * m);
        M *= o, d *= o, m *= o;
        let x = y * m - L * d, z = L * M - c * m, R = c * d - y * M;
        o = Math.sqrt(x * x + z * z + R * R), o ? (o = 1 / o, x *= o, z *= o, R *= o) : (x = 0, z = 0, R = 0);
        let V = d * R - m * z, w = m * x - M * R, g = M * z - d * x;
        return o = Math.sqrt(V * V + w * w + g * g), o ? (o = 1 / o, V *= o, w *= o, g *= o) : (V = 0, w = 0, g = 0), e[0] = x, e[1] = V, e[2] = M, e[3] = 0, e[4] = z, e[5] = w, e[6] = d, e[7] = 0, e[8] = R, e[9] = g, e[10] = m, e[11] = 0, e[12] = -(x * a + z * s + R * i), e[13] = -(V * a + w * s + g * i), e[14] = -(M * a + d * s + m * i), e[15] = 1, e
    }

    static targetTo(e, t, n, r) {
        let a = t[0], s = t[1], i = t[2], c = r[0], y = r[1], L = r[2], k = a - n[0], l = s - n[1], b = i - n[2],
            M = k * k + l * l + b * b;
        M > 0 && (M = 1 / Math.sqrt(M), k *= M, l *= M, b *= M);
        let d = y * b - L * l, m = L * k - c * b, o = c * l - y * k;
        return M = d * d + m * m + o * o, M > 0 && (M = 1 / Math.sqrt(M), d *= M, m *= M, o *= M), e[0] = d, e[1] = m, e[2] = o, e[3] = 0, e[4] = l * o - b * m, e[5] = b * d - k * o, e[6] = k * m - l * d, e[7] = 0, e[8] = k, e[9] = l, e[10] = b, e[11] = 0, e[12] = a, e[13] = s, e[14] = i, e[15] = 1, e
    }

    static frob(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3] + e[4] * e[4] + e[5] * e[5] + e[6] * e[6] + e[7] * e[7] + e[8] * e[8] + e[9] * e[9] + e[10] * e[10] + e[11] * e[11] + e[12] * e[12] + e[13] * e[13] + e[14] * e[14] + e[15] * e[15])
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e
    }

    static sub(e, t, n) {
        return e
    }

    static multiplyScalar(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e
    }

    static multiplyScalarAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e[9] = t[9] + n[9] * r, e[10] = t[10] + n[10] * r, e[11] = t[11] + n[11] * r, e[12] = t[12] + n[12] * r, e[13] = t[13] + n[13] * r, e[14] = t[14] + n[14] * r, e[15] = t[15] + n[15] * r, e
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = e[4], c = e[5], y = e[6], L = e[7], k = e[8], l = e[9],
            b = e[10], M = e[11], d = e[12], m = e[13], o = e[14], x = e[15], z = t[0], R = t[1], V = t[2], w = t[3],
            g = t[4], T = t[5], E = t[6], F = t[7], f = t[8], N = t[9], B = t[10], D = t[11], Q = t[12], Z = t[13],
            W = t[14], U = t[15];
        return Math.abs(n - z) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(z)) && Math.abs(r - R) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(R)) && Math.abs(a - V) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(V)) && Math.abs(s - w) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(w)) && Math.abs(i - g) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(g)) && Math.abs(c - T) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(y - E) <= 1e-6 * Math.max(1, Math.abs(y), Math.abs(E)) && Math.abs(L - F) <= 1e-6 * Math.max(1, Math.abs(L), Math.abs(F)) && Math.abs(k - f) <= 1e-6 * Math.max(1, Math.abs(k), Math.abs(f)) && Math.abs(l - N) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(N)) && Math.abs(b - B) <= 1e-6 * Math.max(1, Math.abs(b), Math.abs(B)) && Math.abs(M - D) <= 1e-6 * Math.max(1, Math.abs(M), Math.abs(D)) && Math.abs(d - Q) <= 1e-6 * Math.max(1, Math.abs(d), Math.abs(Q)) && Math.abs(m - Z) <= 1e-6 * Math.max(1, Math.abs(m), Math.abs(Z)) && Math.abs(o - W) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(W)) && Math.abs(x - U) <= 1e-6 * Math.max(1, Math.abs(x), Math.abs(U))
    }

    static str(e) {
        return `Mat4(${e.join(", ")})`
    }
}, Y = new Float32Array(3);
O.prototype.mul = O.prototype.multiply;
O.sub = O.subtract;
O.mul = O.multiply;
O.frustum = O.frustumNO;
O.perspective = O.perspectiveNO;
O.ortho = O.orthoNO;
var le = O;
var A = class h extends Float32Array {
    static BYTE_LENGTH = 3 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 3:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 3);
                break;
            case 1: {
                let t = e[0];
                typeof t == "number" ? super([t, t, t]) : super(t, 0, 3);
                break
            }
            default:
                super(3);
                break
        }
    }

    get x() {
        return this[0]
    }

    set x(e) {
        this[0] = e
    }

    get y() {
        return this[1]
    }

    set y(e) {
        this[1] = e
    }

    get z() {
        return this[2]
    }

    set z(e) {
        this[2] = e
    }

    get r() {
        return this[0]
    }

    set r(e) {
        this[0] = e
    }

    get g() {
        return this[1]
    }

    set g(e) {
        this[1] = e
    }

    get b() {
        return this[2]
    }

    set b(e) {
        this[2] = e
    }

    get magnitude() {
        let e = this[0], t = this[1], n = this[2];
        return Math.sqrt(e * e + t * t + n * n)
    }

    get mag() {
        return this.magnitude
    }

    get squaredMagnitude() {
        let e = this[0], t = this[1], n = this[2];
        return e * e + t * t + n * n
    }

    get sqrMag() {
        return this.squaredMagnitude
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    add(e) {
        return this[0] += e[0], this[1] += e[1], this[2] += e[2], this
    }

    subtract(e) {
        return this[0] -= e[0], this[1] -= e[1], this[2] -= e[2], this
    }

    sub(e) {
        return this
    }

    multiply(e) {
        return this[0] *= e[0], this[1] *= e[1], this[2] *= e[2], this
    }

    mul(e) {
        return this
    }

    divide(e) {
        return this[0] /= e[0], this[1] /= e[1], this[2] /= e[2], this
    }

    div(e) {
        return this
    }

    scale(e) {
        return this[0] *= e, this[1] *= e, this[2] *= e, this
    }

    scaleAndAdd(e, t) {
        return this[0] += e[0] * t, this[1] += e[1] * t, this[2] += e[2] * t, this
    }

    distance(e) {
        return h.distance(this, e)
    }

    dist(e) {
        return 0
    }

    squaredDistance(e) {
        return h.squaredDistance(this, e)
    }

    sqrDist(e) {
        return 0
    }

    negate() {
        return this[0] *= -1, this[1] *= -1, this[2] *= -1, this
    }

    invert() {
        return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this
    }

    abs() {
        return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this[2] = Math.abs(this[2]), this
    }

    dot(e) {
        return this[0] * e[0] + this[1] * e[1] + this[2] * e[2]
    }

    normalize() {
        return h.normalize(this, this)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static magnitude(e) {
        let t = e[0], n = e[1], r = e[2];
        return Math.sqrt(t * t + n * n + r * r)
    }

    static mag(e) {
        return 0
    }

    static length(e) {
        return 0
    }

    static len(e) {
        return 0
    }

    static fromValues(e, t, n) {
        return new h(e, t, n)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }

    static set(e, t, n, r) {
        return e[0] = t, e[1] = n, e[2] = r, e
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
    }

    static sub(e, t, n) {
        return [0, 0, 0]
    }

    static multiply(e, t, n) {
        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
    }

    static mul(e, t, n) {
        return [0, 0, 0]
    }

    static divide(e, t, n) {
        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e
    }

    static div(e, t, n) {
        return [0, 0, 0]
    }

    static ceil(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e
    }

    static floor(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e
    }

    static min(e, t, n) {
        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e
    }

    static max(e, t, n) {
        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e
    }

    static round(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e
    }

    static scale(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
    }

    static scaleAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e
    }

    static distance(e, t) {
        let n = t[0] - e[0], r = t[1] - e[1], a = t[2] - e[2];
        return Math.sqrt(n * n + r * r + a * a)
    }

    static dist(e, t) {
        return 0
    }

    static squaredDistance(e, t) {
        let n = t[0] - e[0], r = t[1] - e[1], a = t[2] - e[2];
        return n * n + r * r + a * a
    }

    static sqrDist(e, t) {
        return 0
    }

    static squaredLength(e) {
        let t = e[0], n = e[1], r = e[2];
        return t * t + n * n + r * r
    }

    static sqrLen(e, t) {
        return 0
    }

    static negate(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }

    static inverse(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
    }

    static abs(e, t) {
        return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e[2] = Math.abs(t[2]), e
    }

    static normalize(e, t) {
        let n = t[0], r = t[1], a = t[2], s = n * n + r * r + a * a;
        return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e
    }

    static dot(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    static cross(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = n[0], c = n[1], y = n[2];
        return e[0] = a * y - s * c, e[1] = s * i - r * y, e[2] = r * c - a * i, e
    }

    static lerp(e, t, n, r) {
        let a = t[0], s = t[1], i = t[2];
        return e[0] = a + r * (n[0] - a), e[1] = s + r * (n[1] - s), e[2] = i + r * (n[2] - i), e
    }

    static slerp(e, t, n, r) {
        let a = Math.acos(Math.min(Math.max(h.dot(t, n), -1), 1)), s = Math.sin(a), i = Math.sin((1 - r) * a) / s,
            c = Math.sin(r * a) / s;
        return e[0] = i * t[0] + c * n[0], e[1] = i * t[1] + c * n[1], e[2] = i * t[2] + c * n[2], e
    }

    static hermite(e, t, n, r, a, s) {
        let i = s * s, c = i * (2 * s - 3) + 1, y = i * (s - 2) + s, L = i * (s - 1), k = i * (3 - 2 * s);
        return e[0] = t[0] * c + n[0] * y + r[0] * L + a[0] * k, e[1] = t[1] * c + n[1] * y + r[1] * L + a[1] * k, e[2] = t[2] * c + n[2] * y + r[2] * L + a[2] * k, e
    }

    static bezier(e, t, n, r, a, s) {
        let i = 1 - s, c = i * i, y = s * s, L = c * i, k = 3 * s * c, l = 3 * y * i, b = y * s;
        return e[0] = t[0] * L + n[0] * k + r[0] * l + a[0] * b, e[1] = t[1] * L + n[1] * k + r[1] * l + a[1] * b, e[2] = t[2] * L + n[2] * k + r[2] * l + a[2] * b, e
    }

    static random(e, t) {
        t = t === void 0 ? 1 : t;
        let n = Math.random() * 2 * Math.PI, r = Math.random() * 2 - 1, a = Math.sqrt(1 - r * r) * t;
        return e[0] = Math.cos(n) * a, e[1] = Math.sin(n) * a, e[2] = r * t, e
    }

    static transformMat4(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = n[3] * r + n[7] * a + n[11] * s + n[15] || 1;
        return e[0] = (n[0] * r + n[4] * a + n[8] * s + n[12]) / i, e[1] = (n[1] * r + n[5] * a + n[9] * s + n[13]) / i, e[2] = (n[2] * r + n[6] * a + n[10] * s + n[14]) / i, e
    }

    static transformMat3(e, t, n) {
        let r = t[0], a = t[1], s = t[2];
        return e[0] = r * n[0] + a * n[3] + s * n[6], e[1] = r * n[1] + a * n[4] + s * n[7], e[2] = r * n[2] + a * n[5] + s * n[8], e
    }

    static transformQuat(e, t, n) {
        let r = n[0], a = n[1], s = n[2], i = n[3] * 2, c = t[0], y = t[1], L = t[2], k = a * L - s * y,
            l = s * c - r * L, b = r * y - a * c, M = (a * b - s * l) * 2, d = (s * k - r * b) * 2,
            m = (r * l - a * k) * 2;
        return e[0] = c + k * i + M, e[1] = y + l * i + d, e[2] = L + b * i + m, e
    }

    static rotateX(e, t, n, r) {
        let a = n[1], s = n[2], i = t[1] - a, c = t[2] - s;
        return e[0] = t[0], e[1] = i * Math.cos(r) - c * Math.sin(r) + a, e[2] = i * Math.sin(r) + c * Math.cos(r) + s, e
    }

    static rotateY(e, t, n, r) {
        let a = n[0], s = n[2], i = t[0] - a, c = t[2] - s;
        return e[0] = c * Math.sin(r) + i * Math.cos(r) + a, e[1] = t[1], e[2] = c * Math.cos(r) - i * Math.sin(r) + s, e
    }

    static rotateZ(e, t, n, r) {
        let a = n[0], s = n[1], i = t[0] - a, c = t[1] - s;
        return e[0] = i * Math.cos(r) - c * Math.sin(r) + a, e[1] = i * Math.sin(r) + c * Math.cos(r) + s, e[2] = n[2], e
    }

    static angle(e, t) {
        let n = e[0], r = e[1], a = e[2], s = t[0], i = t[1], c = t[2],
            y = Math.sqrt((n * n + r * r + a * a) * (s * s + i * i + c * c)), L = y && h.dot(e, t) / y;
        return Math.acos(Math.min(Math.max(L, -1), 1))
    }

    static zero(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e
    }

    static str(e) {
        return `Vec3(${e.join(", ")})`
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = t[0], i = t[1], c = t[2];
        return Math.abs(n - s) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - i) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(a - c) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(c))
    }
};
A.prototype.sub = A.prototype.subtract;
A.prototype.mul = A.prototype.multiply;
A.prototype.div = A.prototype.divide;
A.prototype.dist = A.prototype.distance;
A.prototype.sqrDist = A.prototype.squaredDistance;
A.sub = A.subtract;
A.mul = A.multiply;
A.div = A.divide;
A.dist = A.distance;
A.sqrDist = A.squaredDistance;
A.sqrLen = A.squaredLength;
A.mag = A.magnitude;
A.length = A.magnitude;
A.len = A.magnitude;
var Me = A;
var q = class h extends Float32Array {
    static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 4:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 4);
                break;
            case 1: {
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t]) : super(t, 0, 4);
                break
            }
            default:
                super(4);
                break
        }
    }

    get x() {
        return this[0]
    }

    set x(e) {
        this[0] = e
    }

    get y() {
        return this[1]
    }

    set y(e) {
        this[1] = e
    }

    get z() {
        return this[2]
    }

    set z(e) {
        this[2] = e
    }

    get w() {
        return this[3]
    }

    set w(e) {
        this[3] = e
    }

    get r() {
        return this[0]
    }

    set r(e) {
        this[0] = e
    }

    get g() {
        return this[1]
    }

    set g(e) {
        this[1] = e
    }

    get b() {
        return this[2]
    }

    set b(e) {
        this[2] = e
    }

    get a() {
        return this[3]
    }

    set a(e) {
        this[3] = e
    }

    get magnitude() {
        let e = this[0], t = this[1], n = this[2], r = this[3];
        return Math.sqrt(e * e + t * t + n * n + r * r)
    }

    get mag() {
        return this.magnitude
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return super.set(e), this
    }

    add(e) {
        return this[0] += e[0], this[1] += e[1], this[2] += e[2], this[3] += e[3], this
    }

    subtract(e) {
        return this[0] -= e[0], this[1] -= e[1], this[2] -= e[2], this[3] -= e[3], this
    }

    sub(e) {
        return this
    }

    multiply(e) {
        return this[0] *= e[0], this[1] *= e[1], this[2] *= e[2], this[3] *= e[3], this
    }

    mul(e) {
        return this
    }

    divide(e) {
        return this[0] /= e[0], this[1] /= e[1], this[2] /= e[2], this[3] /= e[3], this
    }

    div(e) {
        return this
    }

    scale(e) {
        return this[0] *= e, this[1] *= e, this[2] *= e, this[3] *= e, this
    }

    scaleAndAdd(e, t) {
        return this[0] += e[0] * t, this[1] += e[1] * t, this[2] += e[2] * t, this[3] += e[3] * t, this
    }

    distance(e) {
        return h.distance(this, e)
    }

    dist(e) {
        return 0
    }

    squaredDistance(e) {
        return h.squaredDistance(this, e)
    }

    sqrDist(e) {
        return 0
    }

    negate() {
        return this[0] *= -1, this[1] *= -1, this[2] *= -1, this[3] *= -1, this
    }

    invert() {
        return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this[3] = 1 / this[3], this
    }

    abs() {
        return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this[2] = Math.abs(this[2]), this[3] = Math.abs(this[3]), this
    }

    dot(e) {
        return this[0] * e[0] + this[1] * e[1] + this[2] * e[2] + this[3] * e[3]
    }

    normalize() {
        return h.normalize(this, this)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static fromValues(e, t, n, r) {
        return new h(e, t, n, r)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    static set(e, t, n, r, a) {
        return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
    }

    static sub(e, t, n) {
        return e
    }

    static multiply(e, t, n) {
        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e
    }

    static mul(e, t, n) {
        return e
    }

    static divide(e, t, n) {
        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e
    }

    static div(e, t, n) {
        return e
    }

    static ceil(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e
    }

    static floor(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e
    }

    static min(e, t, n) {
        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e
    }

    static max(e, t, n) {
        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e
    }

    static round(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e
    }

    static scale(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
    }

    static scaleAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e
    }

    static distance(e, t) {
        let n = t[0] - e[0], r = t[1] - e[1], a = t[2] - e[2], s = t[3] - e[3];
        return Math.hypot(n, r, a, s)
    }

    static dist(e, t) {
        return 0
    }

    static squaredDistance(e, t) {
        let n = t[0] - e[0], r = t[1] - e[1], a = t[2] - e[2], s = t[3] - e[3];
        return n * n + r * r + a * a + s * s
    }

    static sqrDist(e, t) {
        return 0
    }

    static magnitude(e) {
        let t = e[0], n = e[1], r = e[2], a = e[3];
        return Math.sqrt(t * t + n * n + r * r + a * a)
    }

    static mag(e) {
        return 0
    }

    static length(e) {
        return 0
    }

    static len(e) {
        return 0
    }

    static squaredLength(e) {
        let t = e[0], n = e[1], r = e[2], a = e[3];
        return t * t + n * n + r * r + a * a
    }

    static sqrLen(e) {
        return 0
    }

    static negate(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
    }

    static inverse(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
    }

    static abs(e, t) {
        return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e[2] = Math.abs(t[2]), e[3] = Math.abs(t[3]), e
    }

    static normalize(e, t) {
        let n = t[0], r = t[1], a = t[2], s = t[3], i = n * n + r * r + a * a + s * s;
        return i > 0 && (i = 1 / Math.sqrt(i)), e[0] = n * i, e[1] = r * i, e[2] = a * i, e[3] = s * i, e
    }

    static dot(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    }

    static cross(e, t, n, r) {
        let a = n[0] * r[1] - n[1] * r[0], s = n[0] * r[2] - n[2] * r[0], i = n[0] * r[3] - n[3] * r[0],
            c = n[1] * r[2] - n[2] * r[1], y = n[1] * r[3] - n[3] * r[1], L = n[2] * r[3] - n[3] * r[2], k = t[0],
            l = t[1], b = t[2], M = t[3];
        return e[0] = l * L - b * y + M * c, e[1] = -(k * L) + b * i - M * s, e[2] = k * y - l * i + M * a, e[3] = -(k * c) + l * s - b * a, e
    }

    static lerp(e, t, n, r) {
        let a = t[0], s = t[1], i = t[2], c = t[3];
        return e[0] = a + r * (n[0] - a), e[1] = s + r * (n[1] - s), e[2] = i + r * (n[2] - i), e[3] = c + r * (n[3] - c), e
    }

    static random(e, t) {
        t = t || 1;
        var n, r, a, s, i, c;
        do n = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = n * n + r * r; while (i >= 1);
        do a = Math.random() * 2 - 1, s = Math.random() * 2 - 1, c = a * a + s * s; while (c >= 1);
        var y = Math.sqrt((1 - i) / c);
        return e[0] = t * n, e[1] = t * r, e[2] = t * a * y, e[3] = t * s * y, e
    }

    static transformMat4(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3];
        return e[0] = n[0] * r + n[4] * a + n[8] * s + n[12] * i, e[1] = n[1] * r + n[5] * a + n[9] * s + n[13] * i, e[2] = n[2] * r + n[6] * a + n[10] * s + n[14] * i, e[3] = n[3] * r + n[7] * a + n[11] * s + n[15] * i, e
    }

    static transformQuat(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = n[0], c = n[1], y = n[2], L = n[3], k = L * r + c * s - y * a,
            l = L * a + y * r - i * s, b = L * s + i * a - c * r, M = -i * r - c * a - y * s;
        return e[0] = k * L + M * -i + l * -y - b * -c, e[1] = l * L + M * -c + b * -i - k * -y, e[2] = b * L + M * -y + k * -c - l * -i, e[3] = t[3], e
    }

    static zero(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
    }

    static str(e) {
        return `Vec4(${e.join(", ")})`
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = t[0], c = t[1], y = t[2], L = t[3];
        return Math.abs(n - i) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - c) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(a - y) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(y)) && Math.abs(s - L) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(L))
    }
};
q.prototype.sub = q.prototype.subtract;
q.prototype.mul = q.prototype.multiply;
q.prototype.div = q.prototype.divide;
q.prototype.dist = q.prototype.distance;
q.prototype.sqrDist = q.prototype.squaredDistance;
q.sub = q.subtract;
q.mul = q.multiply;
q.div = q.divide;
q.dist = q.distance;
q.sqrDist = q.squaredDistance;
q.sqrLen = q.squaredLength;
q.mag = q.magnitude;
q.length = q.magnitude;
q.len = q.magnitude;
var be = q;
var I = class h extends Float32Array {
        static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;

        constructor(...e) {
            switch (e.length) {
                case 4:
                    super(e);
                    break;
                case 2:
                    super(e[0], e[1], 4);
                    break;
                case 1: {
                    let t = e[0];
                    typeof t == "number" ? super([t, t, t, t]) : super(t, 0, 4);
                    break
                }
                default:
                    super(4), this[3] = 1;
                    break
            }
        }

        get x() {
            return this[0]
        }

        set x(e) {
            this[0] = e
        }

        get y() {
            return this[1]
        }

        set y(e) {
            this[1] = e
        }

        get z() {
            return this[2]
        }

        set z(e) {
            this[2] = e
        }

        get w() {
            return this[3]
        }

        set w(e) {
            this[3] = e
        }

        get magnitude() {
            let e = this[0], t = this[1], n = this[2], r = this[3];
            return Math.sqrt(e * e + t * t + n * n + r * r)
        }

        get mag() {
            return this.magnitude
        }

        get str() {
            return h.str(this)
        }

        copy(e) {
            return super.set(e), this
        }

        identity() {
            return this[0] = 0, this[1] = 0, this[2] = 0, this[3] = 1, this
        }

        multiply(e) {
            return h.multiply(this, this, e)
        }

        mul(e) {
            return this
        }

        rotateX(e) {
            return h.rotateX(this, this, e)
        }

        rotateY(e) {
            return h.rotateY(this, this, e)
        }

        rotateZ(e) {
            return h.rotateZ(this, this, e)
        }

        invert() {
            return h.invert(this, this)
        }

        scale(e) {
            return this[0] *= e, this[1] *= e, this[2] *= e, this[3] *= e, this
        }

        dot(e) {
            return h.dot(this, e)
        }

        static create() {
            return new h
        }

        static identity(e) {
            return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
        }

        static setAxisAngle(e, t, n) {
            n = n * .5;
            let r = Math.sin(n);
            return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = Math.cos(n), e
        }

        static getAxisAngle(e, t) {
            let n = Math.acos(t[3]) * 2, r = Math.sin(n / 2);
            return r > 1e-6 ? (e[0] = t[0] / r, e[1] = t[1] / r, e[2] = t[2] / r) : (e[0] = 1, e[1] = 0, e[2] = 0), n
        }

        static getAngle(e, t) {
            let n = h.dot(e, t);
            return Math.acos(2 * n * n - 1)
        }

        static multiply(e, t, n) {
            let r = t[0], a = t[1], s = t[2], i = t[3], c = n[0], y = n[1], L = n[2], k = n[3];
            return e[0] = r * k + i * c + a * L - s * y, e[1] = a * k + i * y + s * c - r * L, e[2] = s * k + i * L + r * y - a * c, e[3] = i * k - r * c - a * y - s * L, e
        }

        static rotateX(e, t, n) {
            n *= .5;
            let r = t[0], a = t[1], s = t[2], i = t[3], c = Math.sin(n), y = Math.cos(n);
            return e[0] = r * y + i * c, e[1] = a * y + s * c, e[2] = s * y - a * c, e[3] = i * y - r * c, e
        }

        static rotateY(e, t, n) {
            n *= .5;
            let r = t[0], a = t[1], s = t[2], i = t[3], c = Math.sin(n), y = Math.cos(n);
            return e[0] = r * y - s * c, e[1] = a * y + i * c, e[2] = s * y + r * c, e[3] = i * y - a * c, e
        }

        static rotateZ(e, t, n) {
            n *= .5;
            let r = t[0], a = t[1], s = t[2], i = t[3], c = Math.sin(n), y = Math.cos(n);
            return e[0] = r * y + a * c, e[1] = a * y - r * c, e[2] = s * y + i * c, e[3] = i * y - s * c, e
        }

        static calculateW(e, t) {
            let n = t[0], r = t[1], a = t[2];
            return e[0] = n, e[1] = r, e[2] = a, e[3] = Math.sqrt(Math.abs(1 - n * n - r * r - a * a)), e
        }

        static exp(e, t) {
            let n = t[0], r = t[1], a = t[2], s = t[3], i = Math.sqrt(n * n + r * r + a * a), c = Math.exp(s),
                y = i > 0 ? c * Math.sin(i) / i : 0;
            return e[0] = n * y, e[1] = r * y, e[2] = a * y, e[3] = c * Math.cos(i), e
        }

        static ln(e, t) {
            let n = t[0], r = t[1], a = t[2], s = t[3], i = Math.sqrt(n * n + r * r + a * a),
                c = i > 0 ? Math.atan2(i, s) / i : 0;
            return e[0] = n * c, e[1] = r * c, e[2] = a * c, e[3] = .5 * Math.log(n * n + r * r + a * a + s * s), e
        }

        static pow(e, t, n) {
            return h.ln(e, t), h.scale(e, e, n), h.exp(e, e), e
        }

        static slerp(e, t, n, r) {
            let a = t[0], s = t[1], i = t[2], c = t[3], y = n[0], L = n[1], k = n[2], l = n[3], b, M,
                d = a * y + s * L + i * k + c * l;
            if (d < 0 && (d = -d, y = -y, L = -L, k = -k, l = -l), 1 - d > 1e-6) {
                let m = Math.acos(d), o = Math.sin(m);
                b = Math.sin((1 - r) * m) / o, M = Math.sin(r * m) / o
            } else b = 1 - r, M = r;
            return e[0] = b * a + M * y, e[1] = b * s + M * L, e[2] = b * i + M * k, e[3] = b * c + M * l, e
        }

        static random(e) {
            let t = Math.random(), n = Math.random(), r = Math.random(), a = Math.sqrt(1 - t), s = Math.sqrt(t);
            return e[0] = a * Math.sin(2 * Math.PI * n), e[1] = a * Math.cos(2 * Math.PI * n), e[2] = s * Math.sin(2 * Math.PI * r), e[3] = s * Math.cos(2 * Math.PI * r), e
        }

        static invert(e, t) {
            let n = t[0], r = t[1], a = t[2], s = t[3], i = n * n + r * r + a * a + s * s, c = i ? 1 / i : 0;
            return e[0] = -n * c, e[1] = -r * c, e[2] = -a * c, e[3] = s * c, e
        }

        static conjugate(e, t) {
            return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
        }

        static fromMat3(e, t) {
            let n = t[0] + t[4] + t[8], r;
            if (n > 0) r = Math.sqrt(n + 1), e[3] = .5 * r, r = .5 / r, e[0] = (t[5] - t[7]) * r, e[1] = (t[6] - t[2]) * r, e[2] = (t[1] - t[3]) * r; else {
                let a = 0;
                t[4] > t[0] && (a = 1), t[8] > t[a * 3 + a] && (a = 2);
                let s = (a + 1) % 3, i = (a + 2) % 3;
                r = Math.sqrt(t[a * 3 + a] - t[s * 3 + s] - t[i * 3 + i] + 1), e[a] = .5 * r, r = .5 / r, e[3] = (t[s * 3 + i] - t[i * 3 + s]) * r, e[s] = (t[s * 3 + a] + t[a * 3 + s]) * r, e[i] = (t[i * 3 + a] + t[a * 3 + i]) * r
            }
            return e
        }

        static fromEuler(e, t, n, r, a = u) {
            let s = .5 * Math.PI / 180;
            t *= s, n *= s, r *= s;
            let i = Math.sin(t), c = Math.cos(t), y = Math.sin(n), L = Math.cos(n), k = Math.sin(r), l = Math.cos(r);
            switch (a) {
                case"xyz":
                    e[0] = i * L * l + c * y * k, e[1] = c * y * l - i * L * k, e[2] = c * L * k + i * y * l, e[3] = c * L * l - i * y * k;
                    break;
                case"xzy":
                    e[0] = i * L * l - c * y * k, e[1] = c * y * l - i * L * k, e[2] = c * L * k + i * y * l, e[3] = c * L * l + i * y * k;
                    break;
                case"yxz":
                    e[0] = i * L * l + c * y * k, e[1] = c * y * l - i * L * k, e[2] = c * L * k - i * y * l, e[3] = c * L * l + i * y * k;
                    break;
                case"yzx":
                    e[0] = i * L * l + c * y * k, e[1] = c * y * l + i * L * k, e[2] = c * L * k - i * y * l, e[3] = c * L * l - i * y * k;
                    break;
                case"zxy":
                    e[0] = i * L * l - c * y * k, e[1] = c * y * l + i * L * k, e[2] = c * L * k + i * y * l, e[3] = c * L * l - i * y * k;
                    break;
                case"zyx":
                    e[0] = i * L * l - c * y * k, e[1] = c * y * l + i * L * k, e[2] = c * L * k - i * y * l, e[3] = c * L * l + i * y * k;
                    break;
                default:
                    throw new Error("Unknown angle order " + a)
            }
            return e
        }

        static str(e) {
            return `Quat(${e.join(", ")})`
        }

        static clone(e) {
            return new h(e)
        }

        static fromValues(e, t, n, r) {
            return new h(e, t, n, r)
        }

        static copy(e, t) {
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
        }

        static set(e, t, n, r, a) {
            return e
        }

        static add(e, t, n) {
            return e
        }

        static mul(e, t, n) {
            return e
        }

        static scale(e, t, n) {
            return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
        }

        static dot(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
        }

        static lerp(e, t, n, r) {
            return e
        }

        static magnitude(e) {
            return 0
        }

        static mag(e) {
            return 0
        }

        static length(e) {
            return 0
        }

        static len(e) {
            return 0
        }

        static squaredLength(e) {
            return 0
        }

        static sqrLen(e) {
            return 0
        }

        static normalize(e, t) {
            return e
        }

        static exactEquals(e, t) {
            return !1
        }

        static equals(e, t) {
            return !1
        }

        static rotationTo(e, t, n) {
            let r = A.dot(t, n);
            return r < -.999999 ? (A.cross(H, de, t), A.mag(H) < 1e-6 && A.cross(H, he, t), A.normalize(H, H), h.setAxisAngle(e, H, Math.PI), e) : r > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (A.cross(H, t, n), e[0] = H[0], e[1] = H[1], e[2] = H[2], e[3] = 1 + r, h.normalize(e, e))
        }

        static sqlerp(e, t, n, r, a, s) {
            return h.slerp(re, t, a, s), h.slerp(ae, n, r, s), h.slerp(e, re, ae, 2 * s * (1 - s)), e
        }

        static setAxes(e, t, n, r) {
            return G[0] = n[0], G[3] = n[1], G[6] = n[2], G[1] = r[0], G[4] = r[1], G[7] = r[2], G[2] = -t[0], G[5] = -t[1], G[8] = -t[2], h.normalize(e, h.fromMat3(e, G))
        }
    }, re = new Float32Array(4), ae = new Float32Array(4), G = new Float32Array(9), H = new Float32Array(3),
    de = new Float32Array([1, 0, 0]), he = new Float32Array([0, 1, 0]);
I.set = q.set;
I.add = q.add;
I.lerp = q.lerp;
I.normalize = q.normalize;
I.squaredLength = q.squaredLength;
I.sqrLen = q.squaredLength;
I.exactEquals = q.exactEquals;
I.equals = q.equals;
I.magnitude = q.magnitude;
I.prototype.mul = I.prototype.multiply;
I.mul = I.multiply;
I.mag = I.magnitude;
I.length = I.magnitude;
I.len = I.magnitude;
var me = I;
var P = class h extends Float32Array {
    static BYTE_LENGTH = 8 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 8:
                super(e);
                break;
            case 2:
                super(e[0], e[1], 8);
                break;
            case 1: {
                let t = e[0];
                typeof t == "number" ? super([t, t, t, t, t, t, t, t]) : super(t, 0, 8);
                break
            }
            default:
                super(8), this[3] = 1;
                break
        }
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return super.set(e), this
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static fromValues(e, t, n, r, a, s, i, c) {
        return new h(e, t, n, r, a, s, i, c)
    }

    static fromRotationTranslationValues(e, t, n, r, a, s, i) {
        let c = a * .5, y = s * .5, L = i * .5;
        return new h(e, t, n, r, c * r + y * n - L * t, y * r + L * e - c * n, L * r + c * t - y * e, -c * e - y * t - L * n)
    }

    static fromRotationTranslation(e, t, n) {
        let r = n[0] * .5, a = n[1] * .5, s = n[2] * .5, i = t[0], c = t[1], y = t[2], L = t[3];
        return e[0] = i, e[1] = c, e[2] = y, e[3] = L, e[4] = r * L + a * y - s * c, e[5] = a * L + s * i - r * y, e[6] = s * L + r * c - a * i, e[7] = -r * i - a * c - s * y, e
    }

    static fromTranslation(e, t) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0] * .5, e[5] = t[1] * .5, e[6] = t[2] * .5, e[7] = 0, e
    }

    static fromRotation(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
    }

    static fromMat4(e, t) {
        return O.getRotation(se, t), O.getTranslation(ie, t), h.fromRotationTranslation(e, se, ie)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e
    }

    static identity(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
    }

    static set(e, t, n, r, a, s, i, c, y) {
        return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e[4] = s, e[5] = i, e[6] = c, e[7] = y, e
    }

    static getReal(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    static getDual(e, t) {
        return e[0] = t[4], e[1] = t[5], e[2] = t[6], e[3] = t[7], e
    }

    static setReal(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    static setDual(e, t) {
        return e[4] = t[0], e[5] = t[1], e[6] = t[2], e[7] = t[3], e
    }

    static getTranslation(e, t) {
        let n = t[4], r = t[5], a = t[6], s = t[7], i = -t[0], c = -t[1], y = -t[2], L = t[3];
        return e[0] = (n * L + s * i + r * y - a * c) * 2, e[1] = (r * L + s * c + a * i - n * y) * 2, e[2] = (a * L + s * y + n * c - r * i) * 2, e
    }

    static translate(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = n[0] * .5, y = n[1] * .5, L = n[2] * .5, k = t[4], l = t[5],
            b = t[6], M = t[7];
        return e[0] = r, e[1] = a, e[2] = s, e[3] = i, e[4] = i * c + a * L - s * y + k, e[5] = i * y + s * c - r * L + l, e[6] = i * L + r * y - a * c + b, e[7] = -r * c - a * y - s * L + M, e
    }

    static rotateX(e, t, n) {
        let r = -t[0], a = -t[1], s = -t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7],
            l = c * i + k * r + y * s - L * a, b = y * i + k * a + L * r - c * s, M = L * i + k * s + c * a - y * r,
            d = k * i - c * r - y * a - L * s;
        return I.rotateX(e, t, n), r = e[0], a = e[1], s = e[2], i = e[3], e[4] = l * i + d * r + b * s - M * a, e[5] = b * i + d * a + M * r - l * s, e[6] = M * i + d * s + l * a - b * r, e[7] = d * i - l * r - b * a - M * s, e
    }

    static rotateY(e, t, n) {
        let r = -t[0], a = -t[1], s = -t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7],
            l = c * i + k * r + y * s - L * a, b = y * i + k * a + L * r - c * s, M = L * i + k * s + c * a - y * r,
            d = k * i - c * r - y * a - L * s;
        return I.rotateY(e, t, n), r = e[0], a = e[1], s = e[2], i = e[3], e[4] = l * i + d * r + b * s - M * a, e[5] = b * i + d * a + M * r - l * s, e[6] = M * i + d * s + l * a - b * r, e[7] = d * i - l * r - b * a - M * s, e
    }

    static rotateZ(e, t, n) {
        let r = -t[0], a = -t[1], s = -t[2], i = t[3], c = t[4], y = t[5], L = t[6], k = t[7],
            l = c * i + k * r + y * s - L * a, b = y * i + k * a + L * r - c * s, M = L * i + k * s + c * a - y * r,
            d = k * i - c * r - y * a - L * s;
        return I.rotateZ(e, t, n), r = e[0], a = e[1], s = e[2], i = e[3], e[4] = l * i + d * r + b * s - M * a, e[5] = b * i + d * a + M * r - l * s, e[6] = M * i + d * s + l * a - b * r, e[7] = d * i - l * r - b * a - M * s, e
    }

    static rotateByQuatAppend(e, t, n) {
        let r = n[0], a = n[1], s = n[2], i = n[3], c = t[0], y = t[1], L = t[2], k = t[3];
        return e[0] = c * i + k * r + y * s - L * a, e[1] = y * i + k * a + L * r - c * s, e[2] = L * i + k * s + c * a - y * r, e[3] = k * i - c * r - y * a - L * s, c = t[4], y = t[5], L = t[6], k = t[7], e[4] = c * i + k * r + y * s - L * a, e[5] = y * i + k * a + L * r - c * s, e[6] = L * i + k * s + c * a - y * r, e[7] = k * i - c * r - y * a - L * s, e
    }

    static rotateByQuatPrepend(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = n[0], y = n[1], L = n[2], k = n[3];
        return e[0] = r * k + i * c + a * L - s * y, e[1] = a * k + i * y + s * c - r * L, e[2] = s * k + i * L + r * y - a * c, e[3] = i * k - r * c - a * y - s * L, c = n[4], y = n[5], L = n[6], k = n[7], e[4] = r * k + i * c + a * L - s * y, e[5] = a * k + i * y + s * c - r * L, e[6] = s * k + i * L + r * y - a * c, e[7] = i * k - r * c - a * y - s * L, e
    }

    static rotateAroundAxis(e, t, n, r) {
        if (Math.abs(r) < 1e-6) return h.copy(e, t);
        let a = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        r = r * .5;
        let s = Math.sin(r), i = s * n[0] / a, c = s * n[1] / a, y = s * n[2] / a, L = Math.cos(r), k = t[0], l = t[1],
            b = t[2], M = t[3];
        e[0] = k * L + M * i + l * y - b * c, e[1] = l * L + M * c + b * i - k * y, e[2] = b * L + M * y + k * c - l * i, e[3] = M * L - k * i - l * c - b * y;
        let d = t[4], m = t[5], o = t[6], x = t[7];
        return e[4] = d * L + x * i + m * y - o * c, e[5] = m * L + x * c + o * i - d * y, e[6] = o * L + x * y + d * c - m * i, e[7] = x * L - d * i - m * c - o * y, e
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e
    }

    static multiply(e, t, n) {
        let r = t[0], a = t[1], s = t[2], i = t[3], c = n[4], y = n[5], L = n[6], k = n[7], l = t[4], b = t[5],
            M = t[6], d = t[7], m = n[0], o = n[1], x = n[2], z = n[3];
        return e[0] = r * z + i * m + a * x - s * o, e[1] = a * z + i * o + s * m - r * x, e[2] = s * z + i * x + r * o - a * m, e[3] = i * z - r * m - a * o - s * x, e[4] = r * k + i * c + a * L - s * y + l * z + d * m + b * x - M * o, e[5] = a * k + i * y + s * c - r * L + b * z + d * o + M * m - l * x, e[6] = s * k + i * L + r * y - a * c + M * z + d * x + l * o - b * m, e[7] = i * k - r * c - a * y - s * L + d * z - l * m - b * o - M * x, e
    }

    static mul(e, t, n) {
        return e
    }

    static scale(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e
    }

    static dot(e, t) {
        return 0
    }

    static lerp(e, t, n, r) {
        let a = 1 - r;
        return h.dot(t, n) < 0 && (r = -r), e[0] = t[0] * a + n[0] * r, e[1] = t[1] * a + n[1] * r, e[2] = t[2] * a + n[2] * r, e[3] = t[3] * a + n[3] * r, e[4] = t[4] * a + n[4] * r, e[5] = t[5] * a + n[5] * r, e[6] = t[6] * a + n[6] * r, e[7] = t[7] * a + n[7] * r, e
    }

    static invert(e, t) {
        let n = h.squaredLength(t);
        return e[0] = -t[0] / n, e[1] = -t[1] / n, e[2] = -t[2] / n, e[3] = t[3] / n, e[4] = -t[4] / n, e[5] = -t[5] / n, e[6] = -t[6] / n, e[7] = t[7] / n, e
    }

    static conjugate(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = t[7], e
    }

    static magnitude(e) {
        return 0
    }

    static mag(e) {
        return 0
    }

    static length(e) {
        return 0
    }

    static len(e) {
        return 0
    }

    static squaredLength(e) {
        return 0
    }

    static sqrLen(e) {
        return 0
    }

    static normalize(e, t) {
        let n = h.squaredLength(t);
        if (n > 0) {
            n = Math.sqrt(n);
            let r = t[0] / n, a = t[1] / n, s = t[2] / n, i = t[3] / n, c = t[4], y = t[5], L = t[6], k = t[7],
                l = r * c + a * y + s * L + i * k;
            e[0] = r, e[1] = a, e[2] = s, e[3] = i, e[4] = (c - r * l) / n, e[5] = (y - a * l) / n, e[6] = (L - s * l) / n, e[7] = (k - i * l) / n
        }
        return e
    }

    static str(e) {
        return `Quat2(${e.join(", ")})`
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = e[2], s = e[3], i = e[4], c = e[5], y = e[6], L = e[7], k = t[0], l = t[1],
            b = t[2], M = t[3], d = t[4], m = t[5], o = t[6], x = t[7];
        return Math.abs(n - k) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(k)) && Math.abs(r - l) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b)) && Math.abs(s - M) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(M)) && Math.abs(i - d) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(c - m) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(y - o) <= 1e-6 * Math.max(1, Math.abs(y), Math.abs(o)) && Math.abs(L - x) <= 1e-6 * Math.max(1, Math.abs(L), Math.abs(x))
    }
}, se = new Float32Array(4), ie = new Float32Array(3);
P.dot = I.dot;
P.squaredLength = I.squaredLength;
P.sqrLen = I.squaredLength;
P.mag = I.magnitude;
P.length = I.magnitude;
P.len = I.magnitude;
P.mul = P.multiply;
var oe = P;
var S = class h extends Float32Array {
    static BYTE_LENGTH = 2 * Float32Array.BYTES_PER_ELEMENT;

    constructor(...e) {
        switch (e.length) {
            case 2: {
                let t = e[0];
                typeof t == "number" ? super([t, e[1]]) : super(t, e[1], 2);
                break
            }
            case 1: {
                let t = e[0];
                typeof t == "number" ? super([t, t]) : super(t, 0, 2);
                break
            }
            default:
                super(2);
                break
        }
    }

    get x() {
        return this[0]
    }

    set x(e) {
        this[0] = e
    }

    get y() {
        return this[1]
    }

    set y(e) {
        this[1] = e
    }

    get r() {
        return this[0]
    }

    set r(e) {
        this[0] = e
    }

    get g() {
        return this[1]
    }

    set g(e) {
        this[1] = e
    }

    get magnitude() {
        return Math.hypot(this[0], this[1])
    }

    get mag() {
        return this.magnitude
    }

    get squaredMagnitude() {
        let e = this[0], t = this[1];
        return e * e + t * t
    }

    get sqrMag() {
        return this.squaredMagnitude
    }

    get str() {
        return h.str(this)
    }

    copy(e) {
        return this.set(e), this
    }

    add(e) {
        return this[0] += e[0], this[1] += e[1], this
    }

    subtract(e) {
        return this[0] -= e[0], this[1] -= e[1], this
    }

    sub(e) {
        return this
    }

    multiply(e) {
        return this[0] *= e[0], this[1] *= e[1], this
    }

    mul(e) {
        return this
    }

    divide(e) {
        return this[0] /= e[0], this[1] /= e[1], this
    }

    div(e) {
        return this
    }

    scale(e) {
        return this[0] *= e, this[1] *= e, this
    }

    scaleAndAdd(e, t) {
        return this[0] += e[0] * t, this[1] += e[1] * t, this
    }

    distance(e) {
        return h.distance(this, e)
    }

    dist(e) {
        return 0
    }

    squaredDistance(e) {
        return h.squaredDistance(this, e)
    }

    sqrDist(e) {
        return 0
    }

    negate() {
        return this[0] *= -1, this[1] *= -1, this
    }

    invert() {
        return this[0] = 1 / this[0], this[1] = 1 / this[1], this
    }

    abs() {
        return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this
    }

    dot(e) {
        return this[0] * e[0] + this[1] * e[1]
    }

    normalize() {
        return h.normalize(this, this)
    }

    static create() {
        return new h
    }

    static clone(e) {
        return new h(e)
    }

    static fromValues(e, t) {
        return new h(e, t)
    }

    static copy(e, t) {
        return e[0] = t[0], e[1] = t[1], e
    }

    static set(e, t, n) {
        return e[0] = t, e[1] = n, e
    }

    static add(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
    }

    static subtract(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
    }

    static sub(e, t, n) {
        return [0, 0]
    }

    static multiply(e, t, n) {
        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
    }

    static mul(e, t, n) {
        return [0, 0]
    }

    static divide(e, t, n) {
        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e
    }

    static div(e, t, n) {
        return [0, 0]
    }

    static ceil(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e
    }

    static floor(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e
    }

    static min(e, t, n) {
        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e
    }

    static max(e, t, n) {
        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e
    }

    static round(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e
    }

    static scale(e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e
    }

    static scaleAndAdd(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
    }

    static distance(e, t) {
        return Math.hypot(t[0] - e[0], t[1] - e[1])
    }

    static dist(e, t) {
        return 0
    }

    static squaredDistance(e, t) {
        let n = t[0] - e[0], r = t[1] - e[1];
        return n * n + r * r
    }

    static sqrDist(e, t) {
        return 0
    }

    static magnitude(e) {
        let t = e[0], n = e[1];
        return Math.sqrt(t * t + n * n)
    }

    static mag(e) {
        return 0
    }

    static length(e) {
        return 0
    }

    static len(e) {
        return 0
    }

    static squaredLength(e) {
        let t = e[0], n = e[1];
        return t * t + n * n
    }

    static sqrLen(e, t) {
        return 0
    }

    static negate(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e
    }

    static inverse(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e
    }

    static abs(e, t) {
        return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e
    }

    static normalize(e, t) {
        let n = t[0], r = t[1], a = n * n + r * r;
        return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e
    }

    static dot(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }

    static cross(e, t, n) {
        let r = t[0] * n[1] - t[1] * n[0];
        return e[0] = e[1] = 0, e[2] = r, e
    }

    static lerp(e, t, n, r) {
        let a = t[0], s = t[1];
        return e[0] = a + r * (n[0] - a), e[1] = s + r * (n[1] - s), e
    }

    static transformMat2(e, t, n) {
        let r = t[0], a = t[1];
        return e[0] = n[0] * r + n[2] * a, e[1] = n[1] * r + n[3] * a, e
    }

    static transformMat2d(e, t, n) {
        let r = t[0], a = t[1];
        return e[0] = n[0] * r + n[2] * a + n[4], e[1] = n[1] * r + n[3] * a + n[5], e
    }

    static transformMat3(e, t, n) {
        let r = t[0], a = t[1];
        return e[0] = n[0] * r + n[3] * a + n[6], e[1] = n[1] * r + n[4] * a + n[7], e
    }

    static transformMat4(e, t, n) {
        let r = t[0], a = t[1];
        return e[0] = n[0] * r + n[4] * a + n[12], e[1] = n[1] * r + n[5] * a + n[13], e
    }

    static rotate(e, t, n, r) {
        let a = t[0] - n[0], s = t[1] - n[1], i = Math.sin(r), c = Math.cos(r);
        return e[0] = a * c - s * i + n[0], e[1] = a * i + s * c + n[1], e
    }

    static angle(e, t) {
        let n = e[0], r = e[1], a = t[0], s = t[1], i = Math.sqrt(n * n + r * r) * Math.sqrt(a * a + s * s),
            c = i && (n * a + r * s) / i;
        return Math.acos(Math.min(Math.max(c, -1), 1))
    }

    static zero(e) {
        return e[0] = 0, e[1] = 0, e
    }

    static exactEquals(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    }

    static equals(e, t) {
        let n = e[0], r = e[1], a = t[0], s = t[1];
        return Math.abs(n - a) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - s) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(s))
    }

    static str(e) {
        return `Vec2(${e.join(", ")})`
    }
};
S.prototype.sub = S.prototype.subtract;
S.prototype.mul = S.prototype.multiply;
S.prototype.div = S.prototype.divide;
S.prototype.dist = S.prototype.distance;
S.prototype.sqrDist = S.prototype.squaredDistance;
S.sub = S.subtract;
S.mul = S.multiply;
S.div = S.divide;
S.dist = S.distance;
S.sqrDist = S.squaredDistance;
S.sqrLen = S.squaredLength;
S.mag = S.magnitude;
S.length = S.magnitude;
S.len = S.magnitude;
var xe = S;
var Re = ["xx", "xy", "yx", "yy", "xxx", "xxy", "xyx", "xyy", "yxx", "yxy", "yyx", "yyy", "xxxx", "xxxy", "xxyx", "xxyy", "xyxx", "xyxy", "xyyx", "xyyy", "yxxx", "yxxy", "yxyx", "yxyy", "yyxx", "yyxy", "yyyx", "yyyy", "rr", "rg", "gr", "gg", "rrr", "rrg", "rgr", "rgg", "grr", "grg", "ggr", "ggg", "rrrr", "rrrg", "rrgr", "rrgg", "rgrr", "rgrg", "rggr", "rggg", "grrr", "grrg", "grgr", "grgg", "ggrr", "ggrg", "gggr", "gggg"],
    Ve = ["xz", "yz", "zx", "zy", "zz", "xxz", "xyz", "xzx", "xzy", "xzz", "yxz", "yyz", "yzx", "yzy", "yzz", "zxx", "zxy", "zxz", "zyx", "zyy", "zyz", "zzx", "zzy", "zzz", "xxxz", "xxyz", "xxzx", "xxzy", "xxzz", "xyxz", "xyyz", "xyzx", "xyzy", "xyzz", "xzxx", "xzxy", "xzxz", "xzyx", "xzyy", "xzyz", "xzzx", "xzzy", "xzzz", "yxxz", "yxyz", "yxzx", "yxzy", "yxzz", "yyxz", "yyyz", "yyzx", "yyzy", "yyzz", "yzxx", "yzxy", "yzxz", "yzyx", "yzyy", "yzyz", "yzzx", "yzzy", "yzzz", "zxxx", "zxxy", "zxxz", "zxyx", "zxyy", "zxyz", "zxzx", "zxzy", "zxzz", "zyxx", "zyxy", "zyxz", "zyyx", "zyyy", "zyyz", "zyzx", "zyzy", "zyzz", "zzxx", "zzxy", "zzxz", "zzyx", "zzyy", "zzyz", "zzzx", "zzzy", "zzzz", "rb", "gb", "br", "bg", "bb", "rrb", "rgb", "rbr", "rbg", "rbb", "grb", "ggb", "gbr", "gbg", "gbb", "brr", "brg", "brb", "bgr", "bgg", "bgb", "bbr", "bbg", "bbb", "rrrb", "rrgb", "rrbr", "rrbg", "rrbb", "rgrb", "rggb", "rgbr", "rgbg", "rgbb", "rbrr", "rbrg", "rbrb", "rbgr", "rbgg", "rbgb", "rbbr", "rbbg", "rbbb", "grrb", "grgb", "grbr", "grbg", "grbb", "ggrb", "gggb", "ggbr", "ggbg", "ggbb", "gbrr", "gbrg", "gbrb", "gbgr", "gbgg", "gbgb", "gbbr", "gbbg", "gbbb", "brrr", "brrg", "brrb", "brgr", "brgg", "brgb", "brbr", "brbg", "brbb", "bgrr", "bgrg", "bgrb", "bggr", "bggg", "bggb", "bgbr", "bgbg", "bgbb", "bbrr", "bbrg", "bbrb", "bbgr", "bbgg", "bbgb", "bbbr", "bbbg", "bbbb"],
    ge = ["xw", "yw", "zw", "wx", "wy", "wz", "ww", "xxw", "xyw", "xzw", "xwx", "xwy", "xwz", "xww", "yxw", "yyw", "yzw", "ywx", "ywy", "ywz", "yww", "zxw", "zyw", "zzw", "zwx", "zwy", "zwz", "zww", "wxx", "wxy", "wxz", "wxw", "wyx", "wyy", "wyz", "wyw", "wzx", "wzy", "wzz", "wzw", "wwx", "wwy", "wwz", "www", "xxxw", "xxyw", "xxzw", "xxwx", "xxwy", "xxwz", "xxww", "xyxw", "xyyw", "xyzw", "xywx", "xywy", "xywz", "xyww", "xzxw", "xzyw", "xzzw", "xzwx", "xzwy", "xzwz", "xzww", "xwxx", "xwxy", "xwxz", "xwxw", "xwyx", "xwyy", "xwyz", "xwyw", "xwzx", "xwzy", "xwzz", "xwzw", "xwwx", "xwwy", "xwwz", "xwww", "yxxw", "yxyw", "yxzw", "yxwx", "yxwy", "yxwz", "yxww", "yyxw", "yyyw", "yyzw", "yywx", "yywy", "yywz", "yyww", "yzxw", "yzyw", "yzzw", "yzwx", "yzwy", "yzwz", "yzww", "ywxx", "ywxy", "ywxz", "ywxw", "ywyx", "ywyy", "ywyz", "ywyw", "ywzx", "ywzy", "ywzz", "ywzw", "ywwx", "ywwy", "ywwz", "ywww", "zxxw", "zxyw", "zxzw", "zxwx", "zxwy", "zxwz", "zxww", "zyxw", "zyyw", "zyzw", "zywx", "zywy", "zywz", "zyww", "zzxw", "zzyw", "zzzw", "zzwx", "zzwy", "zzwz", "zzww", "zwxx", "zwxy", "zwxz", "zwxw", "zwyx", "zwyy", "zwyz", "zwyw", "zwzx", "zwzy", "zwzz", "zwzw", "zwwx", "zwwy", "zwwz", "zwww", "wxxx", "wxxy", "wxxz", "wxxw", "wxyx", "wxyy", "wxyz", "wxyw", "wxzx", "wxzy", "wxzz", "wxzw", "wxwx", "wxwy", "wxwz", "wxww", "wyxx", "wyxy", "wyxz", "wyxw", "wyyx", "wyyy", "wyyz", "wyyw", "wyzx", "wyzy", "wyzz", "wyzw", "wywx", "wywy", "wywz", "wyww", "wzxx", "wzxy", "wzxz", "wzxw", "wzyx", "wzyy", "wzyz", "wzyw", "wzzx", "wzzy", "wzzz", "wzzw", "wzwx", "wzwy", "wzwz", "wzww", "wwxx", "wwxy", "wwxz", "wwxw", "wwyx", "wwyy", "wwyz", "wwyw", "wwzx", "wwzy", "wwzz", "wwzw", "wwwx", "wwwy", "wwwz", "wwww", "ra", "ga", "ba", "ar", "ag", "ab", "aa", "rra", "rga", "rba", "rar", "rag", "rab", "raa", "gra", "gga", "gba", "gar", "gag", "gab", "gaa", "bra", "bga", "bba", "bar", "bag", "bab", "baa", "arr", "arg", "arb", "ara", "agr", "agg", "agb", "aga", "abr", "abg", "abb", "aba", "aar", "aag", "aab", "aaa", "rrra", "rrga", "rrba", "rrar", "rrag", "rrab", "rraa", "rgra", "rgga", "rgba", "rgar", "rgag", "rgab", "rgaa", "rbra", "rbga", "rbba", "rbar", "rbag", "rbab", "rbaa", "rarr", "rarg", "rarb", "rara", "ragr", "ragg", "ragb", "raga", "rabr", "rabg", "rabb", "raba", "raar", "raag", "raab", "raaa", "grra", "grga", "grba", "grar", "grag", "grab", "graa", "ggra", "ggga", "ggba", "ggar", "ggag", "ggab", "ggaa", "gbra", "gbga", "gbba", "gbar", "gbag", "gbab", "gbaa", "garr", "garg", "garb", "gara", "gagr", "gagg", "gagb", "gaga", "gabr", "gabg", "gabb", "gaba", "gaar", "gaag", "gaab", "gaaa", "brra", "brga", "brba", "brar", "brag", "brab", "braa", "bgra", "bgga", "bgba", "bgar", "bgag", "bgab", "bgaa", "bbra", "bbga", "bbba", "bbar", "bbag", "bbab", "bbaa", "barr", "barg", "barb", "bara", "bagr", "bagg", "bagb", "baga", "babr", "babg", "babb", "baba", "baar", "baag", "baab", "baaa", "arrr", "arrg", "arrb", "arra", "argr", "argg", "argb", "arga", "arbr", "arbg", "arbb", "arba", "arar", "arag", "arab", "araa", "agrr", "agrg", "agrb", "agra", "aggr", "aggg", "aggb", "agga", "agbr", "agbg", "agbb", "agba", "agar", "agag", "agab", "agaa", "abrr", "abrg", "abrb", "abra", "abgr", "abgg", "abgb", "abga", "abbr", "abbg", "abbb", "abba", "abar", "abag", "abab", "abaa", "aarr", "aarg", "aarb", "aara", "aagr", "aagg", "aagb", "aaga", "aabr", "aabg", "aabb", "aaba", "aaar", "aaag", "aaab", "aaaa"],
    $ = {x: 0, r: 0, y: 1, g: 1, z: 2, b: 2, w: 3, a: 3};

function J(h) {
    switch (h.length) {
        case 2:
            return function () {
                return new S(this[$[h[0]]], this[$[h[1]]])
            };
        case 3:
            return function () {
                return new A(this[$[h[0]]], this[$[h[1]]], this[$[h[2]]])
            };
        case 4:
            return function () {
                return new q(this[$[h[0]]], this[$[h[1]]], this[$[h[2]]], this[$[h[3]]])
            }
    }
}

var ce = !1;

function ze() {
    if (!ce) {
        for (let h of Re) {
            let e = J(h);
            Object.defineProperty(S.prototype, h, {get: e}), Object.defineProperty(A.prototype, h, {get: e}), Object.defineProperty(q.prototype, h, {get: e})
        }
        for (let h of Ve) {
            let e = J(h);
            Object.defineProperty(A.prototype, h, {get: e}), Object.defineProperty(q.prototype, h, {get: e})
        }
        for (let h of ge) {
            let e = J(h);
            Object.defineProperty(q.prototype, h, {get: e})
        }
        ce = !0
    }
}

export {
    ze as EnableSwizzles,
    j as Mat2,
    C as Mat2d,
    X as Mat3,
    O as Mat4,
    I as Quat,
    P as Quat2,
    S as Vec2,
    A as Vec3,
    q as Vec4,
    ye as mat2,
    Le as mat2d,
    ke as mat3,
    le as mat4,
    me as quat,
    oe as quat2,
    xe as vec2,
    Me as vec3,
    be as vec4
};
