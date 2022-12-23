from flask import Flask, render_template, request

app = Flask(__name__, template_folder='./assets')

def transformKeys(obj_str, arr):
    transformed = {}

    for pair in obj_str[1:-1].split(','):
        print(pair)
        key, value                 = pair.split(':')
        transformed[arr[int(key)]] = value.replace('"', '').replace("'", '').strip()

    return transformed

def decomp(b):
    a = {}
    e = {}
    d = list(b)
    c = f = d[0]
    g = [c]
    h = 256
    o = 256

    for b in range(1, len(d)):
        a = ord(d[b])
        a = d[b] if h > a else e[a] if e[a] else f + c
        g.append(a)
        c = a[0]
        e[o] = f + c
        o += 1
        f = a

    return ''.join(g)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/test", methods=['POST'])
def test(): 
    dec = decomp(request.data.decode('utf-8'))
    print(dec)
    
    keys = ["_id", "index", "guid", "address", "about"]
    print(transformKeys(dec, keys))
    
    
    return {}


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)