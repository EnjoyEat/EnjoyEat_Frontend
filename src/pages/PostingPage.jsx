import Modal from 'components/modal/SearchModal';
import Logo from 'components/navbar/Homebutton';
import { useNavigate } from 'react-router-dom';
import { Container, Layout } from 'util/GlobalStyle';
import { useState } from 'react';
import 카와카츠 from 'assets/카와카츠.jpg';
import Close from 'assets/Close.png';
import styled from 'styled-components';

const PostingPage = () => {
  const navigate = useNavigate();
  const [searchModal, setSearchModal] = useState(false);

  return (
    <Layout>
      <Container>
        <Logo />
        <div className="w-full bg-[#fbf7ef] h-full rounded-2xl outline outline-1 shadow-2xl outline-[#fefaf4] shadow-[#fa9a00] mt-14 p-10">
          <div className="text-xl mt-3">1. 어떤 음식점을 등록하시고 싶으신가요?</div>
          <div className="mt-5 flex">
            <input className="w-full rounded-xl mr-4 p-2 "></input>
            <button
              onClick={() => (searchModal ? setSearchModal(false) : setSearchModal(true))}
              className="bg-orange-200 w-14 rounded-xl"
            >
              검색
            </button>
          </div>
          {searchModal && (
            <Modal
              children={
                <div className="w-full h-full flex flex-col items-center ">
                  <div className="text-lg py-2">맛집 검색</div>
                  <div className="w-4/5 mt-5 flex mb-3">
                    <input className="w-full rounded-xl mr-4 p-2 outline outline-1 outline-[#b5b4b4]"></input>
                    <button className="bg-orange-200 w-14 rounded-xl">검색</button>
                  </div>
                  <div
                    className="w-4/5 flex p-2 rounded-xl h-1/5 m-3 outline outline-1 outline-[#dad2d2] cursor-pointer shadow-lg shadow-[#3e3e3e] hover:scale-[1.03] duration-500"
                    onClick={() => setSearchModal(false)}
                  >
                    <img className="w-1/5 rounded-xl mr-2 object-cover" src={카와카츠}></img>
                    <div>
                      <div>가게명 : 카와카츠</div>
                      <div>주소 : 서울시 서대문구 서교동 20-1</div>
                    </div>
                  </div>
                  <div
                    className="w-4/5 flex p-2 rounded-xl h-1/5 m-3 outline outline-1 outline-[#dad2d2] cursor-pointer shadow-lg shadow-[#3e3e3e] hover:scale-[1.03] duration-500"
                    onClick={() => setSearchModal(false)}
                  >
                    <img className="w-1/5 rounded-xl mr-2 object-cover" src={카와카츠}></img>
                    <div>
                      <div>가게명 : 카와카츠</div>
                      <div>주소 : 서울시 서대문구 서교동 20-1</div>
                    </div>
                  </div>
                  <div
                    className="w-4/5 flex p-2 rounded-xl h-1/5 m-3 outline outline-1 outline-[#dad2d2] cursor-pointer shadow-lg shadow-[#3e3e3e] hover:scale-[1.03] duration-500"
                    onClick={() => setSearchModal(false)}
                  >
                    <img className="w-1/5 rounded-xl mr-2 object-cover" src={카와카츠}></img>
                    <div>
                      <div>가게명 : 카와카츠</div>
                      <div>주소 : 서울시 서대문구 서교동 20-1</div>
                    </div>
                  </div>
                  <button className="absolute right-5 top-5" onClick={() => setSearchModal(false)}>
                    <StyledImg className="h-8 w-8" src={Close} />
                  </button>
                </div>
              }
              onConfirm={() => setSearchModal(false)}
            />
          )}

          <div className="text-xl mt-7">2. 별점을 매겨주세요.</div>
          <div className="mt-3 flex">
            <select className="w-full rounded-xl mr-4 p-2 ">
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="text-xl mt-7">3. 음식점에 대한 경험을 알려주세요.</div>
          <div className="mt-3 h-1/5">
            <textarea className="w-full h-3/4 rounded-xl mr-4 p-2 "></textarea>
          </div>

          <div className="w-full flex justify-between">
            <button className="p-2 bg-orange-300 rounded-2xl" onClick={() => navigate('/')}>
              나가기
            </button>
            <button className="p-2 bg-orange-300 rounded-2xl"> 제출하기 </button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PostingPage;

const StyledImg = styled.img`
  filter: opacity(0.5) drop-shadow(0 0 0 #ffffff);
`;
