class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size ++;
        this.list.sort((a,b) => a - b);
    }

    remove(index) {
        let result = this.list.splice(index, 1);
        this.size --;
        this.list.sort((a,b) => a - b);
        return result;
    }

    get(index) {
        let result = this.list[index];
        return result;
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);