import "./ParticipantsCard.css";
const ParticipantCard = ({ name, mute }) => {
  return (
    <div className="participant-card">
      <div>
        <img
          src={`https://ui-avatars.com/api/?name=${name}&length=1`}
          alt="profile"
        />
        <p>{name}</p>
        <p> {mute ? "Muted" : "Un-muted"}</p>
      </div>
    </div>
  );
};

export default ParticipantCard;
