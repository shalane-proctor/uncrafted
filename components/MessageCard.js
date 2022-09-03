/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function MessageCard({ messageObj }) {
  return (
    <Card>
      <Card.Header as="h5">Message {messageObj.userNameFrom ? `From: ${messageObj.userNameFrom}` : `To: ${messageObj.userNameTo}` }</Card.Header>
      <Card.Body>
        <img className="thumbnail-image" src={messageObj.userNameFrom ? messageObj.profilePhotofromURL : messageObj.profilePhotoToURL} style={{ width: '30%', borderRadius: '50%' }} alt="Profile Pic" />
        <Card.Title>
          <Card.Link href={`Messages/${messageObj.firebaseKey}`}>View</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Title>
        <Card.Text>{messageObj.messageBody}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MessageCard.propTypes = {
  messageObj: PropTypes.shape({
    messageBody: PropTypes.string,
    profilePhotofromURL: PropTypes.string,
    profilePhotoToURL: PropTypes.string,
    userNameFrom: PropTypes.string,
    userNameTo: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};