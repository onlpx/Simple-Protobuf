**pre alpha**

-- easy Protobuf-like implementation (compression & other methods) in javascript and python 

```javascript
console.log('initial length          /', JSON.stringify(json).length, 'chrs');
console.log('compressed              /', Proto.compress(JSON.stringify(json)).length, 'chrs')
console.log('"protobuf" compressed   /', Proto.jsoncompress(json).length, 'chrs')
console.log('"protobuf" uncompressed /', Proto.stringify(json).length, 'chrs')

// -- ouput:

// initial length          / 617 chrs
// compressed              / 439 chrs
// "protobuf" compressed   / 378 chrs
// "protobuf" uncompressed / 506 chrs
```
