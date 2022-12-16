# Friday's Mentoring

![image](https://user-images.githubusercontent.com/80701827/208173133-391696c4-1995-4245-b711-a03a4af90995.png)

# Table of Contents
0. [Getting Started](#getting-started)
1. [Why Optimization is it imporant](#why-optimization-is-it-important)
2. [React Optimization Techniques](#react-optimization-techniques)
    1. [Debouncing](#debouncing)
    2. [Throttling](#throttling)
    2. [Memoization](#memoization)
    2. [Pure Components](#pure-components)
    2. [Lazy Loading](#lazy-loading)
    2. [Virtualization (Windowing)](#virtualization-windowing)
    2. [Error Boundaries](#error-boundaries)
    2. [Inline Functions](#inline-functions)

---
## Getting Started

1. Clone or Download this repo into your computer.
2. change directory to the path of your cloned repo.
3. run `yarn install`
4. after the installation finishes run `yarn start`
5. Enjoy it!

---
## Why Optimization is it important?

- The optimization techniques are used to improve the performance of an application. 
- This can include things like making an app run faster, reducing its use of system resources like memory and disk space, or making an app easier to use and more intuitive for users. 
- In general, optimization can help improve the user experience and increase the efficiency of the devices on which the application runs.
- For example: Servers, Cloud, Smartphones, Tablets, Computers, Smart TVs and Low-end devices in general

## React Optimization Techniques

### Debouncing

Debouncing is a programming technique that assures that time-consuming activities do not trigger the web page's performance decreases. In other words, the Debounce methods do not run when invoked. Instead, they wait a predetermined period of time from the last call to trigger the function.

![image](https://user-images.githubusercontent.com/80701827/208186558-f77a5a95-8867-47a4-8f80-35b701c390b9.png)

![image](https://user-images.githubusercontent.com/80701827/208186452-3495a1af-0dbb-4b3e-b543-9b432d382cec.png)

### Throttling

Throttling is a technique used in programming to limit the number of times a function or piece of code can be executed in a certain period of time. This is often used to avoid overloading the system or to make sure that a function doesn't run too fast so that other processes on the system can keep up.

![image](https://user-images.githubusercontent.com/80701827/208186784-635498b6-d2c6-4b76-9e4a-ed03c1f211bc.png)

![image](https://user-images.githubusercontent.com/80701827/208186700-f90c37cd-a1eb-4ab3-bcec-47fce352a767.png)

### Memoization

Memoization is a technique used in programming to store the result of a function in a lookup table, in order to avoid having to recalculate that result if the function is called again with the same parameters. 
The idea is that instead of having to recalculate the result every time a function is called, you can just lookup the lookup table and get the result immediately. 
This can significantly improve the performance of a program, especially if the same function is called many times with the same parameters.
- React.memo
- useMemo
- useCallback

![image](https://user-images.githubusercontent.com/80701827/208186956-52394f85-86ee-42a4-92c8-8c3555454c87.png)

![image](https://user-images.githubusercontent.com/80701827/208187020-8eddf489-b2aa-404e-9cb3-704d1491330c.png)

![image](https://user-images.githubusercontent.com/80701827/208188035-03176f36-a624-4165-a72f-ed93b789fbee.png)


### Pure Components

A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the **React.PureComponent** class are treated as pure components.
Pure components have some performance improvements and render optimizations since React implements the **shouldComponentUpdate()** method for them with a **shallow comparison** for props and state.

![image](https://user-images.githubusercontent.com/80701827/208188162-0bd6f3c1-1113-4d14-abcb-ea7b72df0903.png)

### Lazy Loading

- Lazy Loading is a "lazy" loading technique for components in the React JavaScript library.
- This technique allows you to load components only when they are needed instead of loading them all at the same time.
- This can improve the performance of an application by allowing you to load only the components that are going to be used at any given time instead of loading the entire application at once.
- This can be especially useful in large or complex applications that contain many components.

![image](https://user-images.githubusercontent.com/80701827/208188515-94520925-bf7b-4d7a-aa15-a84777ebbc43.png)

![image](https://user-images.githubusercontent.com/80701827/208188575-e669cae4-a140-4b65-b89d-ff434f640cb1.png)



### Virtualization (Windowing)

- Virtualization in React refers to the technique of creating a user interface (UI) in which only the elements that are currently in use are displayed. 
- This is done by using the React Virtualized library, which focuses on improving UI performance when displaying large amounts of data. 
- Virtualization in React allows for a faster and smoother UI by only displaying the elements that need to be displayed at any given time instead of loading all the data at once.

![image](https://user-images.githubusercontent.com/80701827/208188239-06168132-c2b3-4264-8a1e-ff17b499fac5.png)

![image](https://user-images.githubusercontent.com/80701827/208188444-808232bc-6c8a-445d-a320-bad83b0ca85e.png)

![image](https://user-images.githubusercontent.com/80701827/208188312-5a892f0f-6049-4502-b01b-d02027521763.png)

### Error Boundaries

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
- Error boundaries do not catch errors for:
- Event handlers (learn more)
- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)

### Inline Functions

There are several reasons why it is recommended to avoid using inline functions in React. Here I mention some of them:
- Performance: Every time a component is rendered in React, all inline functions are recreated. This can lead to slower performance in your application, especially if you have many components with inline functions.
- Maintenance: Inline functions are defined within the component and cannot be reused in other parts of the application. This can make the code more difficult to maintain as the application grows.
- Readability: Inline functions can make code more difficult to read and understand, especially if they are long or have many arguments.