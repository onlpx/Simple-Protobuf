
def transformKeys(obj_str, arr):
    transformed = {}

    for pair in obj_str[1:-1].split(','):
        key, value                 = pair.split(':')
        transformed[arr[int(key)]] = value.replace('"', '').replace("'", '').strip()

    return transformed

# xx = "{0:'test',1:'test'}"
# array = ['key1', 'key2']

# print(transformKeys(xx, array))

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

string = """{0:'63a5b11503e1f2Č431ed1a2',1Ă0ě2Ăb3519a3b-9d62-4427-b6dĴ3ĳĶ79ą2ĥě3Ăfalseě4Ă$1,021.8Ě,5Ăhttp://placehold.it/ĺxĺě6Ă2ŕ7Ăgreeně8ĂGuadņupe Sotoě9ńemņŉĜā'MANUFACTěĉŶƀƂlƄesƉo@ƐnuŅct.comƞġ'+1 (ľ3) 485-đőƞŃ'136 MaŠƆStŸet, DuryeaǕVermonǔƾųğĜŋ'CƄiƂtat quis Ʊmǡdo LoŸmǷǢňƮǓǘ. Ǟniaȁƥň officȌ ipsuȁƫlšȈEiusǺ eu ǻȧǱƱnňǳǰ vŦƄǯtƆšbǿǵǲǴȘrǘƆȏƆoccaeɈƯƞŗ'ǃ0-0ǁ14Tɓ:3āɚ ɒĝ0ǧ1ű'-55.418704ƞŵǇĤɨ5ɩ47'}"""

print(decomp(string))