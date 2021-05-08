import { Link } from 'react-router-dom';

export interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div>
      <h1>A small hoard of 404 goblins took away your page!</h1>
      <h2>👺👺👺👺</h2>
      <Link to={'/'}>Take back what is rightfully ours!</Link>
    </div>
  );
};

export default NotFound;
