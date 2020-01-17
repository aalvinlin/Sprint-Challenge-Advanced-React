import sortByCountry from "./sortByCountry";

test("sortbyCountry is given an array", () => {

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
    
    unsorted = ["3212351313562", "423747236", {"2342463": "23642346"}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [{}, {}, {}, {}, {}, {}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
    unsorted = [[23], 964569, [1, 12, 1634], 436];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(false));
    
    unsorted = [[1], [2], [3], [4], {"five": "test"}, {"six": "test"}];
    totalArrayElements = unsorted.filter(element => element !== null && typeof element === "object" && !Array.isArray(element));
    expect((totalArrayElements === unsorted.length).toBe(true));
    
});

test("sortbyCountry sorts an array of arrays by the value of the 'Country' key", () => {

    let unsorted = [{country: "a"}, {country: "m"}, {country: "c"}, {country: "j"}, {country: "k"}];
    let sorted = sortByCountry(unsorted);
    expect(sorted.toBe([{country: "a"}, {country: "c"}, {country: "j"}, {country: "m"}, {country: "k"}]));

    unsorted = [{country: "one"}, {country: "two"}, {country: "three"}, {country: "four"}, {country: "five"}];
    sorted = sortByCountry(unsorted);
    expect(sorted.toBe([{country: "five"}, {country: "four"}, {country: "one"}, {country: "three"},  {country: "two"}]));

    unsorted = [{country: "Zach", "test": 10}, {country: "Barbara", "test": 1}, {country: "Arthur", "test": 1000}];
    sorted = sortByCountry(unsorted);
    expect(sorted.toBe([{country: "Arthur", "test": 1000}, {country: "Barbara", "test": 1}, {country: "Zach", "test": 10}]));
});