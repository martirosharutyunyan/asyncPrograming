const fn = par => {
    console.log('Function called, par:' + par);
};

const fn100 = timeout(100, fn)
const fn200 = timeout(200, fn)

setTimeout(() => {
    fn100('first');
    fn200('second')
}, 150);

function timeout(msec, fn) {
    let timer = setTimeout(() => {
        console.log(msec)
        if (timer) {
            console.log('Function timedout')
        }
        timer = null;
    }, msec);
    return (...args) => {
        if (timer) {
            timer = null;
            fn(...args)
        };
    };
};

