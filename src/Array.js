// const arr = [1, 2, 3]
// const Array = () =>{
//     return (
//         <>
//            {
//             arr.map(e=>{
//             return <h2 key={e}>{e}</h2>
//            })
//            }
//         </>
//     )
// }
// const Array = () =>{
//     return (
//         <>
//            {
//           	[console.log("hello"),
//             arr.map(e=>{
//             return <h2 key={e}>{e}</h2>
//            })]
//            }
//         </>
//     )
// }
// const Array = () => {
//     return /*#__PURE__*/React.createElement(React.Fragment, null, (console.log("hello"), arr.map(e => {
//       return /*#__PURE__*/React.createElement("h2", {
//         key: e
//       }, e);
//     })));
//   };

// const Array = () => {
//     return /*#__PURE__*/React.createElement(React.Fragment, null, console.log("hello"), arr.map(e => {
//       return /*#__PURE__*/React.createElement("h2", {
//         key: e
//       }, e);
//     }));
//   };
// const Array = () => {
//   return React.createElement(
//     React.Fragment, null, "hello")
// };

// const Array = () => {
//     console.log("hello")
//     return React.createElement(
//         React.Fragment, null, [arr.map(e=>{
//             return React.createElement("h2", {key:e}, e)
//         })]
//     )
// };

// const Array = () => {
//     return React.createElement(
//         React.Fragment, null, [arr.map(e=>{
//             console.log("hello")
//             return React.createElement("h2", {key:e}, e)
//         }), arr.map(e=>{
//             console.log("here")
//             return React.createElement("h2", {key:e}, e)
//         })]
//     )
// };

// function JSXDemo () {
//         const jsx = <h1>This is JSX</h1>;
//         console.log(jsx);
//         return jsx;
// }

// function JSXDemo() {
//     const jsx = React.createElement("h1", null, "This is JSX");
//     console.log(jsx);
//     return jsx;
//   }