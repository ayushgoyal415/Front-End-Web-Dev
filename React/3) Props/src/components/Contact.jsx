export default function Contact(props) {
  const { name, image, phone, email, status } = props;

  return (
    <div className="contact">
      <img src={require(`../images/${image}.jpg`)} alt="profile"/>

      {
        //. Conditional rendering
        status !== 'Inactive' && <div className={`status ${status}`}>{status}</div>
      }

      <h3>{name}</h3>

      <span className="info-group">
        <img src={require('../images/phone.png')} alt="phone-icon"/>
        <p>{phone}</p>
      </span>

      <span className="info-group">
        <img src={require('../images/email.png')} alt="email-icon"/>
        <p>{email}</p>
      </span>
    </div>
  );
}
