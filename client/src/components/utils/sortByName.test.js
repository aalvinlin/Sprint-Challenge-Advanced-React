import sortByName from "./sortByName";

    // let unsorted = [{"Zach", 5, 10], {"Barbara", 8, 1], {"Arthur", 100, 1000]];
    // let sorted = sortByName(unsorted)

    // console.log(sorted);

test("sortbyName is given an array", () => {

    expect(Array.isArray({}).toBe(true));
    expect(Array.isArray(0).toBe(false));
    expect(Array.isArray({object: value}).toBe(false));
    expect(Array.isArray("test").toBe(false));
    expect(Array.isArray([1, 2, 3, 4, 5]).toBe(true));
    expect(Array.isArray([{"six": "test"}, {"four": "test"}, {"nine": "test"}, {"one": "test"}, {"1235": "test"}]).toBe(true));
});

test("every item in the subarray is an object", () => {

    let unsorted = [1, 2, 3, 4, 5];
    let totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = ["abc", "def", {"ghi": "test"}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [{}, {}, {}, {}, {}, {}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
    unsorted = [[5], 10, [15, 20, 25], 30];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [[1], [2], [3], [4], {"five": "test"}, {"six": "test"}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
});

test("sortbyName sorts an array of arrays by the value of the 'name' key", () => {

    let unsorted = [{name: "a"}, {name: "m"}, {name: "c"}, {name: "j"}, {name: "k"}];
    let sorted = sortByname(unsorted);
    expect(sorted.toBe([{name: "a"}, {name: "c"}, {name: "j"}, {name: "m"}, {name: "k"}]));

    unsorted = [{name: "one"}, {name: "two"}, {name: "three"}, {name: "four"}, {name: "five"}];
    sorted = sortByname(unsorted);
    expect(sorted.toBe([{name: "five"}, {name: "four"}, {name: "one"}, {name: "three"},  {name: "two"}]));

    unsorted = [{name: "Zach", "test": 10}, {name: "Barbara", "test": 1}, {name: "Arthur", "test": 1000}];
    sorted = sortByname(unsorted);
    expect(sorted.toBe([{name: "Arthur", "test": 1000}, {name: "Barbara", "test": 1}, {name: "Zach", "test": 10}]));
});