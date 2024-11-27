export function flow() {

    let dir = -1
    let speed = 2
    let loc = 0

    let elemWidth = 0

    function widthCalc() {
        elemWidth = 0
        document.querySelectorAll('.flow__img:not(.cf)').forEach(item => {

            elemWidth += item.clientWidth;
        })
    }


    function flowbanner() {
        loc += speed * dir
        if (loc <= -elemWidth) {
            loc = 0
        } else if (loc >= 0) {
            loc = -elemWidth
        }

        document.querySelector('.flow__inner').style.transform = `translateX(${loc}px)`
        requestAnimationFrame(flowbanner);
    }
    widthCalc()
    flowbanner()

    const flowInner = document.querySelector('.flow__inner')
    flowInner.addEventListener('mouseenter', function () {
        speed = 0
    })
    flowInner.addEventListener('mouseleave', function () {
        speed = 3
    })

    window.addEventListener('resize', widthCalc)
}