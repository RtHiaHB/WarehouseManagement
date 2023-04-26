import Button from 'react-bootstrap/Button'

const Administrator = () => {
    return(
     <>
     <div className="mb-2 Administrator">
        <Button variant="add inventory" size="lg">
          Add Inventory
        </Button>{' '}
        <Button variant="edit inventory" size="lg">
          Edit Inventory
        </Button>{' '}
        <Button variant="delete inventory" size="lg">
          Delete Inventory
        </Button>{' '}
       
    
      </div>
      </>
    )

  };
  
  export default Administrator;