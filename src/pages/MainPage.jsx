import UserCard from "components/card/UserCard";
import Moon from "assets/image/스윙스.jpg";
import Baek from "assets/image/백종원.jpg";
import Navbar from "components/navbar/Navbar";
import { Container, Layout } from "util/GlobalStyle";
import { Link } from "react-router-dom";

const MainPage = () => {
  const data = [
    { name: "스윙스", image: Moon, introduce: "안녕하시렵니까1" },
    { name: "스윙스2", image: Moon, introduce: "안녕하시렵니까2" },
    { name: "스윙스3", image: Moon, introduce: "안녕하시렵니까3" },
    { name: "백종원1", image: Baek, introduce: "안녕하시렵니까4" },
    { name: "백종원2", image: Baek, introduce: "안녕하시렵니까5" },
    { name: "백종원3", image: Baek, introduce: "안녕하시렵니까6" },
  ];
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="w-full flex justify-center p-2 text-xl text-[#b1aeae]">
          "나의 맛집 기록해 보세요"
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => {
            return (
              <Link to={"/" + item.name}>
                <UserCard
                  img={item.image}
                  name={item.name}
                  introduce={item.introduce}
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default MainPage;
