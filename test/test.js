json = {
    "_id": "63a5b11503e1f203431ed1a2",
    "index": 0,
    "guid": "b3519a3b-9d62-4427-b6d7-327b6793a251",
    "isActive": false,
    "balance": "$1,021.82",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Guadalupe Soto",
    "gender": "female",
    "company": "MANUFACT",
    "email": "guadalupesoto@manufact.com",
    "phone": "+1 (933) 485-2021",
    "address": "136 Maple Street, Duryea, Vermont, 4220",
    "about": "Cupidatat quis commodo Lorem consectetur. Veniam esse officia ipsum nulla. Eiusmod eu do et consequat voluptate laboris qui irure esse occaecat.",
    "registered": "2020-05-14T05:30:30 -01:00",
    "latitude": -55.418704,
    "longitude": 135.454147
}


console.log('initial length          /', JSON.stringify(json).length, 'chrs');
console.log('compressed              /', Proto.compress(JSON.stringify(json)).length, 'chrs')
console.log('"protobuf" compressed   /', Proto.jsoncompress(json).length, 'chrs')
console.log('"protobuf" uncompressed /', Proto.stringify(json).length, 'chrs')


class Proto{static dumps(t){return"{"+Object.keys(t).map(s=>`${s}:'${t[s]}'`).join(",")+"}"}static jsoncompress(t){return this.compress(this.stringify(t))}static stringify(t){const s={};let r=0;for(const e in t)s[r]=t[e],r++;return this.dumps(s)}static decompress(t){let s,r,e,n,o,i,c,h;for(s=h={},o=[e=n=(r=t.split(""))[0]],i=c=256,t=1;t<r.length;t++)s=i>(s=r[t].charCodeAt(0))?r[t]:h[s]?h[s]:n+e,o.push(s),e=s.charAt(0),h[c]=n+e,c++,n=s;return o.join("")}static compress(t){let s,r,e,n,o,i,c;for(s="charCodeAt",r=c={},n=[],o=(e=t.split(""))[0],i=256,r=1;r<e.length;r++)null==c[o+(t=e[r])]?(n.push(1<o.length?c[o]:o[s](0)),c[o+t]=i,i++,o=t):o+=t;for(n.push(1<o.length?c[o]:o[s](0)),r=0;r<n.length;r++)n[r]=String.fromCharCode(n[r]);return n.join("")}}
