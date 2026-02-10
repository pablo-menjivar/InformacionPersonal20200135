import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Información personal:</h1>
        <ProfileCard
          name="Juan Pablo Ayala Menjívar"
          email="citobim43@gmail.com"
          bio="Estudiante de Desarrollo de Software"
          phone="+1 234 567 890"
          website="github.com/pablo-menjivar"
          imageUrl="https://i.ibb.co/3Ydm7PdG/Multimedia.jpg"
          linkedinUrl="https://www.linkedin.com"
          githubUrl="https://github.com/pablo-menjivar"
        />
      </div>
    </>
  );
}

export default App;
