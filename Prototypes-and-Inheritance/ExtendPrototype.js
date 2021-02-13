function extendProrotype(classToExtend) {

    let proto = {};

    let init = Object.create(proto);

    init.extend = function (temp) {

        Object.entries(temp).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            }else {
                init[key] = value;
            }
        })
        
    };

    return init;
}
