"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
console.warn("Script init of TsTestActor ");
class TsTestActor extends UE.Actor {
    //注意，继承UE类的js类，构造函数必须大写开头
    Constructor() {
        this.PrimaryActorTick.bCanEverTick = true;
        console.warn("TsTestActor.Constructor this.Add", this.Add(33, 44));
        this.tickCount = 0;
    }
    //override 1
    ReceiveBeginPlay() {
        console.warn("TsTestActor.ReceiveBeginPlay this.Add", this.Add(55, 66));
    }
    Add(a, b) {
        return a + b;
    }
    GetActor() {
        return this.actor;
    }
    SetActor(p) {
        this.actor = p;
    }
    GetArray() {
        return this.arr;
    }
    SetArray(p) {
        this.arr = p;
    }
    GetMap() {
        return this.map;
    }
    //override 2
    ReceiveTick(DeltaSeconds) {
        if (this.tickCount % 100 == 0) {
            console.warn("TsTestActor.ReceiveTick", DeltaSeconds, this.tickCount);
        }
        ++this.tickCount;
    }
    //@cpp:text
    TestCppType(p1 /*@cpp:int*/, p2 /*@cpp:byte */) {
        return p1 + ":" + p2;
    }
    //@no-blueprint
    TsOnlyMethod() {
    }
}
exports.default = TsTestActor;
//# sourceMappingURL=TsTestActor.js.map