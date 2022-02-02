function usePriceFormat() {
  
    const priceFormat=(initial)=>{
      
        return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(initial)
    }
    
    return priceFormat

}

export default usePriceFormat