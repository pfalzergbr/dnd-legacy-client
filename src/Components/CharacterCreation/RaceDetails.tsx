export interface RaceDetailsProps {
  title: string;
  details: string;
}

const RaceDetails: React.FC<RaceDetailsProps> = ({ title, details }) => {
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default RaceDetails;
