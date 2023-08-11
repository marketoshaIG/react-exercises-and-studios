import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
       "label" : "Breakfast", 
       "value": "1"
       },
      {
       "label": "Lunch",
       "value":"2"
       },
      {
       "label":"Dinner" ,
       "value": "3"
      }
   ];
    
   const [boardName, setName] = useState("no boards yet!")
   const handleChange = (event) => {
      setName(event.target.value);
   }
   
   const boardOptions = boards.map(board => {
      return (
                  <option value={board.value}>{board.label}</option>
             ); 
   });
     

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}