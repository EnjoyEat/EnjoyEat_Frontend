import Navbar from "components/navbar/Navbar";
import KakaoMap from "components/map/KakaoMap";
import { Container, Layout } from "util/GlobalStyle";
import { useState } from "react";
import 카와카츠 from "assets/image/카와카츠.jpg";

const UserPage = () => {
  const categoryList = [
    "전체",
    "돈까스",
    "일식",
    "고기",
    "프랜차이즈",
    "중식",
    "양식",
    "파스타",
    "족발",
  ];
  const GuList = [
    "전체",
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];
  const [filterState, setFilterState] = useState(false);
  const onClickFilterHandler = () => {
    setFilterState(true);
  };
  const data = [
    {
      id: "헤키",
      location: [37.556063615306826, 126.90760451927538],
      rating: "⭐⭐⭐⭐⭐",
      category: ["돈까스", "일식"],
    },
    {
      id: "카와카츠",
      location: [37.554696028909575, 126.91622992846987],
      rating: "⭐⭐⭐⭐",
      category: ["돈까스", "일식"],
    },
    {
      id: "카와카츠 오토코",
      location: [37.55147129649908, 126.91742179463],
      rating: "⭐⭐⭐⭐",
      category: ["돈까스", "일식"],
    },
    {
      id: "카츠바이콘반",
      location: [37.52475285225363, 127.03647213614116],
      rating: "⭐⭐⭐",
      category: ["돈까스", "일식"],
    },
    {
      id: "호족반",
      location: [37.52539698812291, 127.03673264399191],
      rating: "⭐⭐⭐⭐⭐",
      category: ["고기"],
    },
    {
      id: "피에프창",
      location: [37.513747094088245, 127.10444892003817],
      rating: "⭐⭐⭐⭐⭐",
      category: ["프랜차이즈", "고기", "중식"],
    },
    {
      id: "호파스타",
      location: [37.54419475615208, 127.07015693024503],
      rating: "⭐⭐⭐⭐",
      category: ["양식", "파스타"],
    },
    {
      id: "성수족발",
      location: [37.54603665375094, 127.05428243280046],
      rating: "⭐⭐⭐⭐",
      category: ["고기", "족발"],
    },
    {
      id: "오향족발",
      location: [37.563260256763165, 126.97601606124874],
      rating: "⭐⭐⭐⭐",
      category: ["고기", "족발"],
    },
  ];
  const [guState, setGuState] = useState(new Array(GuList.length));
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="w-full flex flex-col justify-center ">
          <div className="w-full flex justify-center p-2 text-xl text-[#b1aeae]">
            "마커를 클릭해보세요"
          </div>
          <div className=" px-12 lg:px-16 xl:px-20 2xl:px-24">
            <KakaoMap />
          </div>
          <div className="font-bold mt-5 text-lg py-3 px-12 lg:px-16 xl:px-20 2xl:px-24">
            지역별 카테고리
          </div>
          <div className=" px-12 lg:px-16 xl:px-20 2xl:px-24">
            {GuList.map((item) => {
              return (
                <button
                  className="py-1 px-2 rounded-lg m-1 bg-gray-300 text-white"
                  onClick={onClickFilterHandler()}>
                  {item}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-4 px-20">
            {data.map((item) => {
              return (
                <div className="p-5 outline outline-1 outline-[#f5f5f5] shadow-lg cursor-pointer shadow-[#636161} m-3 flex flex-col items-center justify-center rounded-lg bg-white hover:scale-[1.02] duration-500">
                  <img className="rounded-lg" src={카와카츠}></img>
                  <div className="text-xl py-2 font-bold">{item.id}</div>
                  <div>{item.rating}</div>
                  <div>위치 : 서울시 서대문구 서교동</div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UserPage;
