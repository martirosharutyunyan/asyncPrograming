const count = (a, b) => a + b;

const toAsync = fn => (...args) => {
    return new Promise((res, rej) => {
        res(fn(...args))
    });
}

const count2 = toAsync(count)

count2(1, 2).then(res => console.log(res))