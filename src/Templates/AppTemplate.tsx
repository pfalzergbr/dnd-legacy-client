import MainNav from '../Components/MainNav';

export interface AppTemplateProps {
  children: React.ReactNode;
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
  return (
    <main>
      <MainNav/>
      {children}
    </main>
  );
};

export default AppTemplate;
