class Proto {
	static dumps(obj) {
		return '{' + Object.keys(obj).map(key => `${key}:'${obj[key]}'`).join(',') + '}';
	}

	static jsoncompress(obj) {
		return this.compress(this.stringify(obj))
	}

	static stringify(obj) {
		const transformed = {};
		let i = 0;
		for (const key in obj) {
			transformed[i] = obj[key];
			i++;
		}

		return this.dumps(transformed);
	}

	static decompress(b) {
		let a, d, c, f, g, h, o, e;
		a = (e = {});
		d = b.split('');
		c = (f = d[0]);
		g = [c];
		h = (o = 256);
		for (b = 1; b < d.length; b++) {
			a = d[b].charCodeAt(0);
			a = h > a ? d[b] : e[a] ? e[a] : f + c;
			g.push(a);
			c = a.charAt(0);
			e[o] = f + c;
			o++;
			f = a;
		}
		return g.join('');
	}

	static compress(c) {
		let x, b, f, d, a, g, z;
		x = 'charCodeAt';
		b = (z = {});
		f = c.split('');
		d = [];
		a = f[0];
		g = 256;
		for (b = 1; b < f.length; b++) {
			c = f[b];
			if (z[a + c] == null) {
				d.push(1 < a.length ? z[a] : a[x](0));
				z[a + c] = g;
				g++;
				a = c;
			} else {
				a += c;
			}
		}
		d.push(1 < a.length ? z[a] : a[x](0));
		for (b = 0; b < d.length; b++) {
			d[b] = String.fromCharCode(d[b]);
		}
		return d.join('');
	}
}

// 2022 @ onlp