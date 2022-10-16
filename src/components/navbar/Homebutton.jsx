import LogoImg from 'assets/image/Logo.png';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/">
      <div className="flex justify-center items-center p-3">
        <img className="p-2 w-14 h-14" src={LogoImg}></img>
        <div className="text-xl font-bold text-[#494646] font-mono">Enjoy Eat</div>
      </div>
    </Link>
  );
};

export default HomeButton;
