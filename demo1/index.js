@log
class MyClass {
    // constructor() {
    //     this.username = '小明';
    //     this.password = "123456";
    // }
}

function log(target) {
    target.protoype.logger = () => `${target.name}被调用`
}

const test = new MyClass()
test.logger() #被调用




var u1 = new User();
console.log(u1)