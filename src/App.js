import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import restuarantList from "./restuarantList";

// const element = React.createElement("h2", null, "Namaste React 4");

/**
 * {TitleComponent} - function component like this is not a valid as React child. 
 * {<TitleComponent/>} vs 
 * {<TitleComponent></TitleComponent>} in JSX ?
 */

// const TitleComponent =({children}) =>{
//     return (
//     <>
//     {children}
//     <h2>Hello JSX element from functional Component</h2>
//     </>
//     )
// }

// const HeaderComponent = () =>{
//     const styleObj = {
//         margin: "20px 0px",
//     }
//     return (
//         <div>
//             {/* {TitleComponent} function component is not a valid as React child. */}
//             {/* {<TitleComponent />} This function Component is use to return Element in React   */}

//             {/** This is also way to return Element from function Component. */}
//             {<TitleComponent></TitleComponent>}

//             {/**
//               <--INLINE Styling In JSX-->
//             */}
//             {
//             <TitleComponent>
//                 <header style={styleObj}>
//                     <h1>
//                     Hello I am nested Element or Component inside Parent Functional Component 
//                     </h1>
//                 </header>
//             </TitleComponent>
//             }

//         </div>
//     )
// };

//Header for My AppLaout 
const Header = () =>{
    return(
        <nav className="header">
            <a href="/">
                <h2 className="nav-title">KHANA</h2>
            </a>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    )
};

//Hardcoded Data to display List of Restuarant as Card.
// const Kfc = {
//     name: "KFC",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
//     cusines: ["American", "Snacks"],
//     rating: "4.0",
// };

//RestuarantCard for List of Restuarants in Body Component.
          // Distructuring on the fly {restuarant} like this or 
          // {name, cuisines, cloudinaryImageId, lastMileTravelString}
const RestuarantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    // console.log(props)
    // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restuarant.data
    return(
        //HardCode data passing it inside card div.
        // <div className="card">
        //     <img src={Kfc?.image}/>
        //     <h2>{Kfc?.name}</h2>
        //     <h3>{Kfc?.cusines.join(", ")}</h3>
        //     <h4>{Kfc.rating} stars</h4>
        // </div>

        // Let's Make it bit a dynamic where more than one Restuarant can render on screen

        // <div className="card">
        //     <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`+props.restuarant.data?.cloudinaryImageId}/>
        //     <h2>{props.restuarant.data?.name}</h2>
        //     <h3>{props.restuarant.data?.cuisines.join(", ")}</h3>
        //     <h4>{props.restuarant.data?.lastMileTravelString}</h4>
        // </div>

        // Distructuring on the fly 
        <div className="card">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
};

// Body for AppLayout 
const Body = () =>{
    return(
        <div className="restuarant-list">
            {
                restuarantList.map((restuarant)=>{
                    return <RestuarantCard {...restuarant.data} key={restuarant.data.id}/>
                })
            }
        </div>
    //    <div className="restuarant-list">
    //     {/**whatever we are passing inside Component tag it is known as props(properties) */}

    //     {/* {RestuarantCard(restuarantList[0])} */}

    //     {/** If I want distructure on the fly like below we need to paas individually */}
    //     {/* <RestuarantCard name= {restuarantList[1].data.name} />
    //     <RestuarantCard name= {restuarantList[0].data.name}/>
    //     <RestuarantCard name= {restuarantList[2].data.name}/> */}

    //     {/* <RestuarantCard {...restuarantList[3].data}/>
    //     <RestuarantCard {...restuarantList[4].data}/>
    //     <RestuarantCard {...restuarantList[5].data}/>
    //     <RestuarantCard {...restuarantList[6].data}/>
    //     <RestuarantCard {...restuarantList[7].data}/>
    //     <RestuarantCard {...restuarantList[8].data}/>
    //     <RestuarantCard {...restuarantList[9].data}/> */}
    //    </div>
    )
};

//Footer for AppLayout
const Footer = () =>{
    return(
        <h1>Copyright</h1>
    )
};

// I need AppLayout to Structure my Components 
 /**
     * Designing High Level Components
     * 
     * Header
     *  .Logo
     *  .NavItems(on RightSide)
     * 
     * Body
     *  .SearchBar
     *  .RestrauntList
     *    .ResturantCard
     *      .Image
     *      .Name
     *      .Rating 
     *      .Cusines
     * 
     * Footer
     *  .Copyright 
     *  .Link to social media
     */
const AppLayout = ()=>{
    return(
        <div className="AppLayout">
           <Header />
           <Body />
           <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 