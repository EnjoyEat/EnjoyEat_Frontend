import UserCard from 'components/card/UserCard';
import Moon from 'assets/image/스윙스.jpg';
import Baek from 'assets/image/백종원.jpg';
import Navbar from 'components/navbar/Navbar';
import { Container, Layout } from 'util/GlobalStyle';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="w-full flex justify-center p-2 text-xl text-[#b1aeae]">
          "나의 맛집 기록해 보세요"
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/백종원">
            <UserCard img={Baek} name={'백종원'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
          <Link to="/스윙스">
            <UserCard img={Moon} name={'스윙스'} />
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default MainPage;
