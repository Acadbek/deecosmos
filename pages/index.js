import Slider from "react-slick";
import Card from "../components/card";
import Meta from "../components/meta";
import photo from "../public/photos/cardBg.webp";
import AutoPlayCard from "../components/autoPlayCard";
import Image from "next/image";
import Button from "../generics/button";
import { Blur } from "../components/card/style";
import Link from "next/link";
import { CustomSlider } from "./style";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/data");
  const res2 = await fetch("http://localhost:3000/comingSoon");
  const data = await res.json();
  const data2 = await res2.json();
  return {
    props: {
      data: data,
      comingSoonData: data2,
    },
  };
};

export default function Home({ data, comingSoonData }) {
  const image = `https://picsum.photos/id/25/340/170`;

  const datas = [
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
  // images for autoplay carousel
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
  // settings for carousel
  const settings = {
    dots: true,
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
  // settings for second carousel
  const settingsForComingSoon = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  // coming soon data
  // const comingSoonData = [
  //   {
  //     id: 1,
  //     name: "Mindy Weiss 1",
  //     subTitle: "Plan Your Dream Wedding",
  //     img: 'https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"',
  //   },
  //   {
  //     id: 2,
  //     name: "Mindy Weiss 2",
  //     subTitle: "Plan Your Dream Wedding",
  //     img: 'https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"',
  //   },
  //   {
  //     id: 3,
  //     name: "Mindy Weiss 3",
  //     subTitle: "Plan Your Dream Wedding",
  //     img: 'https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"',
  //   },
  //   {
  //     id: 4,
  //     name: "Mindy Weiss 3",
  //     subTitle: "Plan Your Dream Wedding",
  //     img: 'https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"',
  //   },
  //   {
  //     id: 5,
  //     name: "Mindy Weiss 3",
  //     subTitle: "Plan Your Dream Wedding",
  //     img: 'https://www.masterclass.com/course-images/attachments/sjiytn0p38hi9w4gcah272emt6k4?width=1920&quality=75&format=webp"',
  //   },
  // ];

  console.log();

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
            <Blur />
            <Image
              className="rounded-[10px]"
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
              <Button icon={true} paddingX={6} type="black">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-[30px] font-bold">Trading...</h2>
            <Link className="text-[#999999] text-[20px]" href={"#"}>
              See all
            </Link>
          </div>
          <Slider {...settings}>
            {data?.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </Slider>
          <div className="flex items-center justify-center mt-[60px] mb-[80px]">
            <Button paddingX={6} explore={true} type={"gray"}>
              Explore Classes
            </Button>
          </div>
        </div>
        <CustomSlider type="comingSoon" {...settingsForComingSoon}>
          {comingSoonData?.map((dataForComingSoon) => (
            <Card
              type="comingSoon"
              key={dataForComingSoon.id}
              dataForComingSoon={dataForComingSoon}
            />
          ))}
        </CustomSlider>
      </div>
    </div>
  );
}
