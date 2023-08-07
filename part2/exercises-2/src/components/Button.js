import './styles.css';

function Button() {

   function onLearnMore(){
      alert("The Wave is coming");
   };   

   return ( 
      <button onClick={onLearnMore}>
         Learn More
      </button>
   );
}
export default Button;