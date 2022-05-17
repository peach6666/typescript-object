var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulate"] = 1] = "Insulate";
    Feature[Feature["None"] = 2] = "None";
})(Feature || (Feature = {}));
let hat = {
    name: "Hat",
    price: 100,
    feature: Feature.None
};
let gloves = {
    name: "Gloves",
    price: 75,
    feature: Feature.Insulate
};
//不規則物件
let umbrella = {
    name: "Umbrella",
    price: 120,
    feature: Feature.Waterproof,
    hasFeature: function (checkFeature) {
        return this.feature === checkFeature;
    }
};
//物件型別註記，?為選擇性屬性(非必要)
let products = [hat, gloves, umbrella];
products.forEach(prod => {
    console.log(`${prod.name}:${prod.price},` +
        //為避免prod.hasFeature傳回undefined報錯(hat、gloves物件沒有此方法)，
        //用?:表示若if(prod.hasFeature=true)傳回Feature.Waterproof，否則傳回false
        `waterProof:${prod.hasFeature ? (Feature.Waterproof) : false}`);
});
let peach = {
    name: "Peach",
    id: 0
};
let wade = {
    name: "Wade",
    id: 1
};
let members = [peach, wade];
console.log(members);
let shirt = { id: 1, name: "shirt", price: 100 };
let shoes = { id: 2, name: "shoes", price: 75 };
let paints = { id: 3, name: "paints", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London", company: "arista", dept: "engineer" };
//Person和Project的聯集，等同UnionType
let dataItems = [shirt, shoes, paints, bob];
dataItems.forEach(item => {
    //物件型別防衛描述，確認city屬性是否在item中
    if ("city" in item) {
        console.log(`Person:${item.name},City:${item.city}`);
    }
    else {
        console.log(`Product:${item.name},Price:${item.price}`);
    }
});
//型別谓詞函式，檢驗參數是否為Person型別
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person:${item.name},City:${item.city}`);
    }
    else {
        console.log(`Product:${item.name},Price:${item.price}`);
    }
});
let engineer = [bob];
engineer.forEach(item => {
    console.log(`Person:${item.id},${item.name},${item.city}`);
    console.log(`Employee:${item.id},${item.company},${item.dept}`);
});
//# sourceMappingURL=index.js.map