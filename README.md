# namasteReact_4

## Is JSX mandatory for  React?

### JSX is not a mandatory for using React. JSX element is just syntactic sugar for REACT calling (React.createElement(Element or Component, props, children or content). So, anything you can do with JSX can also be done with just plain JavaScript.

## IS ES6 mandatory for React?

### ES6 is not mandatory to write code in JavaScript. It is new version Javascript to code in React but we can also write code in prior previos version ES6 in react.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
### When you will try to pass React component like this {TitleComponent}. Function or Class Component is not a valid to pass as a child.
### {<TitleComponent />} This function Component is use to return Element in React.
### {<TitleComponent></TitleComponent>} This is also way to return Element from function Component.
 >>> **Also It has one more use Case-**
 #### If you want to nest any Element or Component inside JSX tag. the parent component will receive that content in a prop called children.

## Can we write  multiple javascript code inside single curly braces {} in JSX expression?

### `const arr = [1, 2, 3]
const Array = () =>{
    return (
        <>
           {
            arr.map(e=>{
            return <h2 key={e}>{e}</h2>
           })
           }
        </>
    )
}`

**Remember Whenever Parser sees Element it gets created into React.createElement(parent,  props,  multiple children could be..)**

**Suppose -**
`const Array = () =>{
    return (
        <>
         hello
        </>
    )
}`

`const Array = () => {
  return React.createElement(
  React.Fragment, null, "hello")
 }`

**What IF we want to render map method **

`const Array = () =>{
    return (
        <>
           {
            arr.map(e=>{
            return <h2 key={e}>{e}</h2>
           })
           }
        </>
    )
}`
**Here Console.log  will work because we are consoling before returning the parent Element.  If you would Console after returning React.Fragment (parent Element). It will not return cuz we knew that after return  what else we write will not go down to see the console.log Statement**
`const Array = () => {
    console.log("hello")
    return React.createElement(
        React.Fragment, null, [arr.map(e=>{
            return React.createElement("h2", {key:e}, e)
        })]
    )
}`

**As usual in programming we can write any sort of code before return and it will display or work**
`const Array = () => {
    return React.createElement(
        React.Fragment, null, [arr.map(e=>{
            console.log("hello")
            return React.createElement("h2", {key:e}, e)
        }), arr.map(e=>{
            console.log("here")
            return React.createElement("h2", {key:e}, e)
        })
      ]
  )
}`
**I am hopping it will help others too**

### **As of now we knew that whenever the transpiler encounters JSX Element. It will get Converted into React.createElement(parent, props, children)**
`const Array = () =>{
    return (
        <>
           {
          console.log("hello")
            arr.map(e=>{
            return <h2 key={e}>{e}</h2>
           })
           }
        </>
    )
}`
**From the Above snippet, the transpiler would not be able to judge whether I should transpile both  console.log and arr.map inside curly braces or a single child inside curly braces.**
**And it will give us an error like an unexpected token or can not compile it**

**IF we would give  ", " between console.log(), arr.map() then the transpiler would able to judge that Both are children of React.Fragment** 
**But In the case of JSX expression of curly braces only "," is not a solution to make them able to judge by transpiler that both are children**

>> We need to give as like this [console.log(..), arr.map(..)] inside single curly braces.

`const Array = () =>{
    return (
        <>
           {
              [console.log("hello"),
            arr.map(e=>{
            return <h2 key={e}>{e}</h2>
           })]
           }
        </>
    )
}`

**Converted into Like this**

`const Array = () => {
  return React.createElement(React.Fragment, null, [console.log("hello"), arr.map(e => {
    return React.createElement("h2", {
      key: e
    }, e);
  })]);
}`
**Now It we will  transpile the both console.log() and arr.map as a children of React.Fragment**
