import { Spinner } from "react-bootstrap";


function Loader() {
  return (
    <Spinner
        animation="border"
        role="status"
        style={{
            width: "100px",
            height: "100px",
            margin: "40% auto",
            display: "block",
        }}
    ></Spinner>
  )
}

export default Loader