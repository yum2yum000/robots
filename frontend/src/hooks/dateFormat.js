import React from 'react';

function useDateFormat() {
  
    const dateFormat=(initial)=>{
   
        return initial?.match(/([^T]+)/)[0].split("-").reverse().join("/")
    }
    
    return dateFormat

}

export default useDateFormat