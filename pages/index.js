import Slider from "react-slick";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card";
import Meta from "../components/meta";
import { fetchData } from "../redux/data";
import photo from "../public/photos/cardBg.webp";
import AutoPlayCard from "../components/autoPlayCard";

export default function Home() {
  const image = `https://picsum.photos/id/25/437/250`;
  const data = [
    {
      id: 1,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 2,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 3,
      status: "Old",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 4,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 5,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 6,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 8,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 9,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 10,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 11,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
    {
      id: 12,
      status: "New",
      img: photo,
      title: "DEVON RODRIGUEZ",
      subtitle: " Draw and Paint Realistic",
    },
  ];

  const images = [
    {
      id: 1,
      img: image,
    },
    {
      id: 2,
      img: image,
    },
    {
      id: 3,
      img: image,
    },
    {
      id: 4,
      img: image,
    },
    {
      id: 5,
      img: image,
    },
    {
      id: 6,
      img: image,
    },
    {
      id: 7,
      img: image,
    },
    {
      id: 8,
      img: image,
    },
    {
      id: 9,
      img: image,
    },
    {
      id: 10,
      img: image,
    },
    {
      id: 12,
      img: image,
    },
    {
      id: 13,
      img: image,
    },
    {
      id: 15,
      img: image,
    },
  ];

  // const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const settingsForAutoPlaySlider = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="bg-black">
      <Meta
        title="HOME"
        name='description" content'
        content="Generated by create next app"
      >
        <link rel="icon" href="/favicon.ico" />
      </Meta>
      <div className="mb-12">asdad</div>
      <div className="slider">
        <div className="slide-track">
          {images?.map((data) => (
            <AutoPlayCard key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="slider">
        <div className="slide-track  ml-[100px]">
          {images?.map((data) => (
            <div key={data.id} className="slide">
              <AutoPlayCard data={data} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container mx-auto">
        <Slider {...settings}>
          {data?.map((value) => (
            <Card className="slide" key={value.id} value={value} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
