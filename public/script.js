flag = false
cou = 1000

btn = document.getElementById('btn')
cnt = document.getElementById('cnt')
hwan = document.getElementById('hwan')
tex = document.getElementById('tex')

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
    cnt.innerHTML = cou

    cnt.style.fontSize = (1001 - cou) / 3 + 'px'

    if (cou < 1) {
        hwan.innerHTML = "ZXC"
        tex.innerHTML = "zxczxx czxccz xzz xczxc zxczxcz  czxczxczxczx zcxcz czx czczcx zxzxcc zxc zxcxzccxz xxxxzcxzxczxxxxz cxzxz xczxczx zcxzx ccxc zxcxczxc xcxczxczcz xzcxzczzxxzc xzxcxzxzxc xzzxc zcxzxxxccc czxxczczx xczxczxzzx cczxcczx zx cczzxczxcczx czxczx cxz".repeat(1000)
        hwan.style.display = 'none'
        btn.style.display = 'none'
        cnt.style.display = 'none'
        tex.style.fontSize = '5px'
        
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