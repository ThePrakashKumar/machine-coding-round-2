import { useState } from "react";
import Participants from "./Participants";
import ParticipantCard from "./ParticipantCard";
import "./Home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const [participants, setParticipants] = useState([
    { id: 1, name: "Rizwan", mute: true },
    { id: 2, name: "Steve", mute: true },
    { id: 3, name: "Shahid", mute: true },
  ]);

  const toggleMute = (id) => {
    setParticipants((latestParticipants) =>
      latestParticipants.map((participant) => {
        if (participant.id === id) {
          return { ...participant, mute: !participant.mute };
        } else {
          return participant;
        }
      })
    );
  };
  return (
    <div>
      <button onClick={toggleMenu} className="toggleButton">
        Show Participants
      </button>

      <div className="home-container">
        <div className="participants-card-container">
          {participants.map((participant) => (
            <ParticipantCard
              id={participant.id}
              name={participant.name}
              mute={participant.mute}
              key={participant.id}
            />
          ))}
        </div>

        <div
          className={`${
            isMenuOpen && "participants-list-container-active"
          } participants-list-container `}
        >
          {participants.map((participant) => (
            <Participants
              id={participant.id}
              name={participant.name}
              mute={participant.mute}
              toggleMute={toggleMute}
              key={participant.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
