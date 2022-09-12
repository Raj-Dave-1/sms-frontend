// 🚩 Dada Ki Jay Ho 🚩

import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function ViewStudent() {
  return (
    <Card className="my-3">
      <Card.Header>Student List</Card.Header>
      <Card.Body>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer>This is information of Student</Card.Footer>
    </Card>
  );
}

export default ViewStudent;
