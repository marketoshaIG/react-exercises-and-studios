export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://images.booksense.com/images/459/823/9780375823459.jpg";
   let book2 = "https://pictures.abebooks.com/isbn/9780553579901-us.jpg";
   let book3 = "https://static01.nyt.com/images/2015/01/05/arts/BOOK/BOOK-superJumbo.jpg";
 

   const imgStyle = {
      width: '100px',
      height: '100px'
   }
   return (
     <div>
       <h3>{pageTitle}</h3>
       <img src={book1} style={imgStyle} alt="His dark materials" />
       <img src={book2} style={imgStyle} alt="Game of Thrones" />
       <img src={book3} style={imgStyle} alt="The Girl on the Train" />      
     </div>
   );
 }