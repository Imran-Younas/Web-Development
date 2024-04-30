function Parts({ children }) {
  return (
    <div>
      {children}


      <ProductItem />

    </div>



  )
}

export default Parts;


function ProductItem() {
  return (
    <div><button type="button" class="btn btn-secondary">Secondary</button></div>

  )
}