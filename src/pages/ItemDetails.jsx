import { useParams } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  return (
    <main id="main-content" tabIndex="-1">
      <h1>Item Details</h1>

      <p>You are viewing item number: {itemId}</p>
    </main>
  );
}

export default ItemDetails;