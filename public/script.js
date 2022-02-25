flag = false
cou = 1000

btn = document.getElementById('btn')
hwan = document.getElementById('hwan')
tex = document.getElementById('tex')
root = document.getElementById('root')

smle = ['=)', ':)', ';)', '*)', '\'v\'', ';j', 'xD', '^ ^']
fanta = [
    'Times New Roman',
    'Verdana',
    'Calibri',
    'Arial',
    'MS Trebuchet',
    'Geneva',
    'Tahoma'
]

function rint(lo, hi) {
    return lo + Math.floor(Math.random() * (hi + 1 - lo))
}



btn.addEventListener('click', () => {
    // if (flag) {
    //     document.body.style.backgroundColor = "crimson";
    // } else {
    //     document.body.style.backgroundColor = "dodgerblue";
    // }
    // flag = !flag

    cou -= 7

    btn.innerHTML = cou + ' ' + smle[rint(0, smle.length-1)]
    if (cou < 7) {
        btn.innerHTML = '%%%%%%%%%%%%%%'
    }
    btn.style.fontSize = 20 + (1001 - cou) / 3 + 'px'
    btn.style.fontFamily = fanta[rint(0, fanta.length-1)]

    if (cou < 1) {
        hwan.innerHTML = "ZXC"
        tex.innerHTML = "zxczxx czxccz xzz xczxc zxczxcz  czxczxczxczx zcxcz czx czczcx zxzxcc zxc zxcxzccxz xxxxzcxzxczxxxxz cxzxz xczxczx zcxzx ccxc zxcxczxc xcxczxczcz xzcxzczzxxzc xzxcxzxzxc xzzxc zcxzxxxccc czxxczczx xczxczxzzx cczxcczx zx cczzxczxcczx czxczx cxz".repeat(2000)
        hwan.style.display = 'none'
        btn.style.display = 'none'
        tex.style.fontSize = '3px'

        tex.requestFullscreen()
            .then(function() {
                // element has entered fullscreen mode successfully
            })
            .catch(function(error) {
                // element could not enter fullscreen mode
            });
        
        setInterval(death, 5)

    }

   
})


function death() {
    if (flag) {
        document.body.style.backgroundColor = "white"
        // tex.style.backgroundColor = "black"
        tex.style.color = "black"
    } else {
        document.body.style.backgroundColor = "black"
        // tex.style.backgroundColor = "white"
        tex.style.color = "white"
    }
    // zxc = ''

    // tex.innerHTML = ['z','x','c'][rint(0,2)]
    flag = !flag
}