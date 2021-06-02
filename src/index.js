import React from 'react';
import ReactDom from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// stateless functional component
// always return JSX

// function Greeting() {
//    return (
//         <div className=''>
//             <h3>hello people</h3>
//             <ul>
//                 <li>
//                     <a href="#">Hello World</a>
//                 </li>
//                 <img src="" alt="" />
//             </ul>
//         </div>   
//    );
// }

// const Greeting = () => {
//     return React.createElement('div', {}, 
//             React.createElement('h1', {}, 'Hello World!'));
// };

// Nested Components, React Tools

// CSS
import './index.css'
// setup vars
const books = [
    {
        id:1,
        img:"https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
        title: "The Last Thing He Told Me: A Novel",
        author: "Laura Dave"
    },

    {
        id:2,
        img:"https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
        title: "The Second Thing He Told Me: A Novel",
        author: "Maura Davem"
    }
]

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} {...book} />
            })}
        </section>
    );
}



const Book = ({ img, title, author }) => {
    
    //const { img, title, author } = props;

    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
}

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg" alt="" />

// const Title = () => <h1>The Last Thing He Told Me: A Novel</h1>

// const Author = () => <h4 style={{ color:'#617D98', fontSize:'0.75rem', marginTop:'0.25rem' }}>Laura Dave</h4>

ReactDom.render(<BookList />, document.getElementById("root"));