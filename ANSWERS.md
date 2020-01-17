- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components provide more granular control over the component lifecycle. If you need to specify what to do in niche cases where you do not want React to update automatically, class components allow you to control what is updated and when.

    Even though hooks have been introduced, there is still over 5 years of code written using class components. Companies have yet to transition over to hooks completely, as updating legacy code and unfinished projects from the past few years is extremely resource-intensive. There are also developers who prefer to write class components or have yet to learn how to use hooks, so in a team project it is very possible that class components will still be used.


- [ ] Name three lifecycle methods and their purposes.

    The constructor method sets up any class properties and state properties so that a component can mount. It receives methods through the parent it extends with a super() call, and if the component will be using state, a this.state variable can be set up here with an inital value.

    The ComponentDidMount method is run the first time the component is mounted to the DOM. Any actions that must be run as soon as the component is available goes here: axios calls for retrieving data to be displayed to the data as soon as the page is rendered, methods that the user will need, and any supplementary code will go here.

    The ComponentShouldUpdate method is used to determine whether a component should be re-rendered. It takes in two parameters, nextState and nextProps. These two values are used to compare with the current state of the component. The body of the component is used to specify the logic for comparison. Typically, if the current stored state is different than the nextState that is passed in, then a boolean true should be returned. The return value is always a truthy value, true or false to indicate whether the component should be updated.

- [ ] What is the purpose of a custom hook?

    A custom hook allows methods to be abstracted for re-use either within a component or among components. Form input handlers, where the logic is very similar from input to input, can rewritten as a general method that creates both individual states and state setters for the inputs. This general method, or custom hook, makes it easier to develop and debug; as long as the hook works correctly for the first component, then subsequent components will have the same logic and there is less duplicated code.

- [ ] Why is it important to test our apps?

    Testing our apps allows us to be more efficient when we write code. It is easier to write code than to debug or maintain it, and if we test our apps as we go along, it will allow us to test our apps while it is small and while changes are incremental. Unit testing provides us with this very functionality; small pieces of code are tested against a set of test cases to verify that the code is functional.

    Another advantage of testing our apps is that writing test cases forces us to think of ways to make the app not work. Ideas involving edge cases and unexpected inputs often arise when we are asked to think creatively about the logic of the methods we are writing. If we only think about how to make something work, as is usually the case when we write code, we may not be thinking as hard about what could go wrong. Writing test cases helps fill in these gaps and leads to more robust code once we ensure that the test cases do pass.