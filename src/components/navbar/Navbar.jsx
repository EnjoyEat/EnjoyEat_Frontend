import React from 'react';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import Logo from './Homebutton';
import KakaoLoginImg from 'assets/image/KakaoLogin.png';
import { useNavigate } from 'react-router-dom';
import Moon from 'assets/image/스윙스.jpg';
import ProfileIcon from './ProfileIcon';

const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  const onClickModalOpen = () => {
    modalState ? setModalState(false) : setModalState(true);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <Logo />
        <div className="flex items-center">
          <button
            onClick={() => onClickModalOpen()}
            className="text-lg text-[#a19d9d] px-2 hover:bg-gray-100 hover:opacity-70 duration-500 rounded-lg"
          >
            로그인
          </button>
          <button>
            <ProfileIcon image={Moon} />
          </button>
        </div>
      </div>
      {modalState && (
        <Modal
          onConfirm={() => setModalState(false)}
          children={
            <div className="flex flex-col">
              <div className="absolute inset-x-0 top-10">
                <Logo></Logo>
              </div>
              <button className="">
                <img src={KakaoLoginImg} />
              </button>
              <button
                onClick={() => setModalState(false)}
                className="absolute inset-x-0 bottom-5 text-[#a2a1a1]"
              >
                닫기
              </button>
            </div>
          }
        />
      )}
    </div>
  );
};
export default Navbar;
