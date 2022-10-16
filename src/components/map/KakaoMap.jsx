import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Flag from 'assets/image/Flag.png';

const KakaoMap = () => {
  const { kakao } = window;
  const data = [
    {
      id: '헤키',
      location: [37.556063615306826, 126.90760451927538],
      rating: '⭐⭐⭐⭐⭐',
      category: ['돈까스', '일식'],
    },
    {
      id: '카와카츠',
      location: [37.554696028909575, 126.91622992846987],
      rating: '⭐⭐⭐⭐',
      category: ['돈까스', '일식'],
    },
    {
      id: '카와카츠 오토코',
      location: [37.55147129649908, 126.91742179463],
      rating: '⭐⭐⭐⭐',
      category: ['돈까스', '일식'],
    },
    {
      id: '카츠바이콘반',
      location: [37.52475285225363, 127.03647213614116],
      rating: '⭐⭐⭐',
      category: ['돈까스', '일식'],
    },
    {
      id: '호족반',
      location: [37.52539698812291, 127.03673264399191],
      rating: '⭐⭐⭐⭐⭐',
      category: ['고기'],
    },
    {
      id: '피에프창',
      location: [37.513747094088245, 127.10444892003817],
      rating: '⭐⭐⭐⭐⭐',
      category: ['프랜차이즈', '고기', '중식'],
    },
    {
      id: '호파스타',
      location: [37.54419475615208, 127.07015693024503],
      rating: '⭐⭐⭐⭐',
      category: ['양식', '파스타'],
    },
    {
      id: '성수족발',
      location: [37.54603665375094, 127.05428243280046],
      rating: '⭐⭐⭐⭐',
      category: ['고기', '족발'],
    },
    {
      id: '오향족발',
      location: [37.563260256763165, 126.97601606124874],
      rating: '⭐⭐⭐⭐',
      category: ['고기', '족발'],
    },
  ];

  const [state, setState] = useState(new Array(data.length));
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <Map
        level={8}
        center={{ lat: 37.541, lng: 126.986 }}
        style={{ height: '20rem', borderRadius: '10px', padding: '10' }}
      >
        {data.map((place, idx) => {
          return (
            <MapMarker
              onClick={() => {
                let arr = new Array(data.length);
                arr[idx] = true;
                setState(arr);
                console.log(state);
              }}
              position={{ lat: place.location[0], lng: place.location[1] }}
              image={{
                src: 'https://ifh.cc/g/rZp47o.png', // 마커이미지의 주소입니다
                size: {
                  width: 40,
                  height: 44,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 8,
                    y: 55,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
            ></MapMarker>
          );
        })}
        {state.map((item, idx) => {
          return (
            item && (
              <div className="bottom-0 z-50 p-5 bg-white rounded-xl flex flex-col">
                <div className="text-lg font-bold tracking-widest">{data && data[idx].id}</div>
                <div className="px-2 tracking-wider">
                  카테고리:
                  {data &&
                    data[idx].category.map((item) => {
                      return (
                        <button className="px-2 py-1 bg-yellow-200 m-2 rounded-lg">{item}</button>
                      );
                    })}
                </div>
                <div className="px-2 tracking-wider">별점:{data && data[idx].rating}</div>
              </div>
            )
          );
        })}
      </Map>
    </>
  );
};
export default KakaoMap;
