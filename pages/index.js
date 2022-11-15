import Slider from "react-slick";
import Card from "../components/card";
import Meta from "../components/meta";
import photo from "../public/photos/cardBg.webp";
import AutoPlayCard from "../components/autoPlayCard";
import Image from "next/image";
import Button from "../generics/button";

export default function Home() {
  const image = `https://picsum.photos/id/25/340/170`;

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
  const settings = {
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
        <div className="slide-track ml-[150px]">
          {images?.map((data) => (
            <AutoPlayCard key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-white leading-[.85] tracking-[.01] uppercase font-semibold text-[3rem] mt-[40px]">
          GAIN NEW SKILLS IN 10 MINUTES
        </h2>
        <p className="leading-[1.6] text-[1.2rem] tracking-[0.1em] text-white">
          Unlimited access to 180+ classes delivered in bite-sized lessons.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-[#fff] text-center text-[35px] tracking-wider font-semibold mt-[100px]">
            Meet the world&apos;s best. New classes added every month.
          </p>
          <div className="bigPhoto relative">
            <Image
              className="rounded-[10px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              src={
                "https://www.masterclass.com/course-images/attachments/czkh9w0hosqeyg45kfd4w5twydzc?width=1920&quality=75&format=webp"
              }
              alt="big photo"
              width={1231}
              height={655}
            />
            <div className="text-white text-center flex justify-center items-center flex-col absolute top-1/2 right-[-100px] transform -translate-x-1/2 -translate-y-1/2">
              <p className="bg-[#fff] inline-block text-black px-[12px] rounded-[9999px] text-[14px]">
                New
              </p>
              <p className="text-white leading-[50px] mb-[20px] uppercase text-[55px] w-[350px]">
                JOHN DOUGLAS
              </p>
              <div className="w-[40px] h-[4px] bg-white mb-[15px]"></div>
              <p className=" font-semibold leading-[1.25] text-[1rem] tracking-wider">
                Teaches How to Think Like an FBI Profiler
              </p>
              <Button type="black">Watch Trailer</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12">
          <Slider {...settings}>
            {data?.map((value) => (
              <Card className="slide" key={value.id} value={value} />
            ))}
          </Slider>
        </div>
        <Card type="comingSoon" />
      </div>
    </div>
  );
}
