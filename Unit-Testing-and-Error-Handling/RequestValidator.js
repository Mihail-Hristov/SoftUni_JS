function solve(obj) {

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    const regex = /^[a-zA-z0-9.]*$/gm;

    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const specialCharacters = /[<>\\&'"]/gm;


    if (typeof obj.method === 'undefined' || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (typeof obj.uri === 'undefined' || obj.uri === '' || !regex.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (typeof obj.version === 'undefined' || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (typeof obj.message === 'undefined' || specialCharacters.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }


    return obj;
}

const testObj = solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1'
});

console.log(testObj);