import styled from 'styled-components';

const UserCard = (props) => {
  return (
    <>
      <StyledCard>
        <div className="w-full h-2/3 p-7">
          <img
            className="w-full h-full object-cover rounded-full shadow-lg shadow-[#aeadac]"
            src={props.img && props.img}
          />
        </div>
        <div className="w-full flex justify-center font-bold text-lg">
          {props.name && props.name}
        </div>
        <div className="px-3 py-1">돈까스 맛집 제가 더 잘 알아요.</div>
      </StyledCard>
    </>
  );
};

export default UserCard;

const StyledCard = styled.div`
  cursor: pointer;
  margin: 15px;
  border-radius: 10px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #eaecee;
  background-color: #ffffff;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 300px;
  max-width: ${window.innerWidth / 10};
  transition: 250ms transform;
  user-select: none;
  &:hover {
    transform: scale(1.04);
    transition: 500ms;
  }
`;

const StyledDetail = styled.div`
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: bold;
  margin-bottom: 30px;
`;
