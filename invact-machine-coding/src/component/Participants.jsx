const Participants = ({ id, name, mute, toggleMute }) => {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => toggleMute(id)}>{mute ? "unmute" : "mute"}</button>
    </div>
  );
};

export default Participants;
