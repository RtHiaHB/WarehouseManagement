import Button from 'react-bootstrap/Button';

const Manager = () => {
  return(
  <>
     <div className="mb-2 Manager">
        <Button variant="view inventory" size="lg">
          View Inventory
        </Button>{' '}
        <Button variant="create order" size="lg">
          Creatre Order
        </Button>{' '}
        <Button variant="delete order" size="lg">
          Delete Order
        </Button>{' '}
       
    
      </div>
      </>
  )
  };
  
  export default Manager;