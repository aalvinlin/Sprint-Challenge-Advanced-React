import sortByName from "./sortByName";

    // let unsorted = [["Zach", 5, 10], ["Barbara", 8, 1], ["Arthur", 100, 1000]];
    // let sorted = sortByName(unsorted)

    // console.log(sorted);

test("sortbyName is given an array", () => {

    expect(Array.isArray([]).toBe(true));
    expect(Array.isArray(0).toBe(false));
    expect(Array.isArray({object: value}).toBe(false));
    expect(Array.isArray("test").toBe(false));
    expect(Array.isArray([1, 2, 3, 4, 5]).toBe(true));
    expect(Array.isArray([["six"], ["four"], ["nine"], ["one"], ["1235"]]).toBe(true));
});

test("every item in the subarray is an array", () => {

    let unsorted = [1, 2, 3, 4, 5];
    let totalArrayElements = unsorted.filter(element => Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = ["abc", "def", ["ghi"]];
    totalArrayElements = unsorted.filter(element => Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [[], [], [], [], [], []];
    totalArrayElements = unsorted.filter(element => Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
    unsorted = [[5], 10, [15, 20, 25], 30];
    totalArrayElements = unsorted.filter(element => Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [[1], [2], [3], [4], ["five"], ["six"]];
    totalArrayElements = unsorted.filter(element => Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
});

test("sortbyName sorts an array of arrays by the first element in the subarray", () => {

    let unsorted = [["a", 3], ["m", 134], ["c", 100], ["j", 5], ["k", 8]];
    let sorted = sortByName(unsorted);
    expect(sorted.toBe([["a", 3], ["c", 100], ["j", 5], ["m", 134], ["k", 8]]));

    unsorted = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5]];
    sorted = sortByName(unsorted);
    expect(sorted.toBe([["five", 5], ["four", 4], ["one", 1], ["three", 3],  ["two", 2]]));

    unsorted = [["Zach", 5, 10], ["Barbara", 8, 1], ["Arthur", 100, 1000]];
    sorted = sortByName(unsorted);
    expect(sorted.toBe([["Arthur", 100, 1000], ["Barbara", 8, 1], ["Zach", 5, 10]]));
});