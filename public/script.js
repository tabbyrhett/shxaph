flag = false
cou = 0

btn = document.getElementById('btn')
cnt = document.getElementById('cnt')

btn.addEventListener('click', () => {
    if (flag) {
        document.body.style.backgroundColor = "crimson";
    } else {
        document.body.style.backgroundColor = "dodgerblue";
    }
    flag = !flag

    cnt.innerHTML = ++cou
})