import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import { Model } from "@/components/Car_move";
import { Line, Circle } from 'rc-progress';

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
  useProgress,
  Html,
  Loader,
  SpotLightShadow,
} from "@react-three/drei";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
// import { Pane } from "tweakpane";
import { Sonsie_One, Russo_One } from "next/font/google";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsTornado } from "react-icons/bs";
import { FaBolt, FaLastfm } from "react-icons/fa6";
import CountUp from "react-countup";
import { MdCropRotate } from "react-icons/md";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import Head from "next/head";

//font
const sonsi_one = Sonsie_One({
  weight: "400",
  subsets: ["latin"],
});

const russo_one = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

function Loading(props) {
  const { active, progress, errors, item, loaded, total } = useProgress();
  useEffect(() => {
    props.setLoaded(progress.toFixed(0));
    console.log(progress);
  });
  return (
    // <Html center className="w-full h-screen bg-black absolute z-[999]">
    //   { props.isRotate ? "" :<div class="flex items-center justify-center min-h-screen">
    //     <p class="text-white">{progress} Loading...</p>
    //   </div>}
    // </Html>
    ""
  );
}

export default function Home() {
  const cameraRef = useRef(null);
  const firstRef = useRef(null);
  const secRef = useRef(null);
  const thirdRef = useRef(null);
  const forthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  const mainRef = useRef(null);
  const modelRef = useRef(null);
  const countUp = useRef(null);
  const countUp2 = useRef(null);
  const wheel1 = useRef(null);
  const imgRef = useRef(null);
  const svgRef = useRef(null);
  const count1Ref = useRef(null);

  const [tesRef, setTestRef] = useState();
  const [modRef, setModRef] = useState();
  const [oneWheel, setOneWheel] = useState();
  const [twoWheel, setTwoWheel] = useState();

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const lastRef = useRef(null);
  const navRef = useRef(null);

  // const wheelRef = useRef();
  const [zoom, setZoom] = useState(30);
  const [loaded, setLoaded] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  function scrollPage(refname) {

    refname.current.scrollIntoView({

    });
  }

  useEffect(() => {
    modRef?.position ? setLoaded(100) : null;

    const anotherCounting = (targetNumber, targetElement) => {
      const target = { count: 0 };
      gsap.to(target, {
        count: targetNumber,
        duration: 2,
        onUpdate: () => {
          if (targetElement) {
            targetElement.textContent = Math.floor(target.count);
          }
        },
      });
    };

    if (loaded) {
      anotherCounting(350, count1Ref)
    }



    function animatingSvg(params) {

      const svg = svgRef.current;
      const paths = svg.querySelectorAll('path, line');
      const pathLengths = Array.from(paths).map((element) => element.getTotalLength());


      paths.forEach((element, index) => {
        element.style.strokeDasharray = pathLengths[index];
        element.style.strokeDashoffset = pathLengths[index];
      });


      paths.forEach((element, index) => {
        element.getBoundingClientRect();
        element.style.transition = 'stroke-dashoffset 2s ease-in-out';
        element.style.strokeDashoffset = '0';


        const onAnimationEnd = () => {
          element.style.transition = '';
          element.removeEventListener('transitionend', onAnimationEnd);
        };

        element.addEventListener('transitionend', onAnimationEnd);
      });


    }




    function animateCounting(countUp) {
      function format_number(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      var
        counter = countUp.current,
        value = {
          val: parseInt(counter.innerText)
        };

      gsap.from(value, {
        duration: 3,
        ease: 'circ.out',
        val: 0,
        roundProps: 'val',
        onUpdate: function () {
          counter.innerText = format_number(value.val);
        }
      })

    }


    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      tesRef?.position,
      {
        x: 6.1511104366,
        y: 2.6882002163,
        z: -1.140921425,
      },
      {
        x: 0,
        y: 9,
        z: 6,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: firstRef.current,
          start: "center 55%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play",
        },
        onComplete: () => {
          // console.log(textRef1.current);

        },
        duration: 1,
      }
    ).fromTo(textRef1.current,
      {
        x: "-100vw"
      },
      {
        x: "0",
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: firstRef.current,
          start: "center 90%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,

        },
        duration: 2,
      }).fromTo(textRef2.current,
        {
          x: "100vw"
        },
        {
          x: "0",
          scrollTrigger: {
            scroller: mainRef.current,
            trigger: firstRef.current,
            start: "center 90%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
          },
          duration: 1,
        })
      .fromTo(
        tesRef?.position,
        {
          x: 0,
          y: 9,
          z: 6,
        },
        {
          x: -4,
          y: 3,
          z: 8,
          scrollTrigger: {
            scroller: mainRef.current,
            trigger: secRef.current,
            start: "center 47%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play",
          },
          onStart: () => {
            console.log("hi");
          },
          duration: 1,
        }
      )

      .to(navRef?.current, {
        opacity: 0,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: firstRef.current,
          start: "center 47%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play",
        },

        duration: 1,
      })

      .to(modRef?.position, {
        x: 0,
        y: 1,
        z: 3,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: secRef.current,
          start: "center 47%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play",
        },
        onStart: () => {
          console.log("secref");
        },
        duration: 1,
      })

      .fromTo(textRef3.current, {
        x: "-100vw",
      }, {
        x: "0",
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: secRef.current,
          start: "center 47%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play",
        },

        duration: 1,
      })
      .to(textRef3.current, {
        x: "0",
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: secRef.current,
          start: "center 47%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play",
        },
        onStart: () => {
          animateCounting(countUp);
          animateCounting(countUp2);
          console.log("thirdRef");
        },

        duration: 1,
      })


      .fromTo(
        tesRef?.position,
        {
          x: -4,
          y: 3,
          z: 8,
        },
        {
          x: 4,
          y: 3,
          z: 8,
          scrollTrigger: {
            scroller: mainRef.current,
            trigger: thirdRef.current,
            start: "center 47%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play",
          },
          onStart: () => {
            console.log("forthRef");
          },
          duration: 1,
        }
      )

      .fromTo(
        tesRef?.position,
        {
          x: 4,
          y: 3,
          z: 8,
        },
        {
          x: 2,
          y: 3,
          z: -7,
          scrollTrigger: {
            scroller: mainRef.current,
            trigger: forthRef.current,
            start: "center 47%",
            scrub: 0.1,
            // markers: true,
            ease: "power1.inOut",
            yoyo: true,
            toggleActions: "play reverse on",
          },
          onStart: () => {
            tl.fromTo(
              modRef?.position,
              {
                x: 0,
                y: 1,
                z: 3,
              },
              {
                x: -1,
                y: 0.67,
                z: -1,
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: forthRef.current,
                  start: "center 47%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play reverse on",
                },
                onStart: () => { },
                duration: 1,
              }
            )
              .fromTo(textRef5.current, {
                x: "-100vw",
              }, {
                x: "0vw",
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: forthRef.current,
                  start: "center 10%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },
                duration: 1,
              }).fromTo(imgRef.current, {
                opacity: 0,
              }, {
                opacity: 1,
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: forthRef.current,
                  start: "center 10%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },

                duration: 1,
              })
              .fromTo(svgRef.current, {
                opacity: 0,
              }, {
                opacity: 1,
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: forthRef.current,
                  start: "center 10%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },
                onStart: () => {
                  animatingSvg();
                },
                duration: 1,
              })
              .to(imgRef.current, {
                opacity: 0,
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: fifthRef.current,
                  start: "center 40%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },
                duration: 1,
              }).to(svgRef.current, {
                opacity: 0,
                scrollTrigger: {
                  scroller: mainRef.current,
                  trigger: fifthRef.current,
                  start: "center 40%",
                  scrub: 0.1,
                  // markers: true,
                  ease: "power1.inOut",
                  yoyo: true,
                  toggleActions: "play",
                },
                duration: 1,
              })

          },
          duration: 1,
        }
      )



      .to(tesRef?.position, {
        visibility: true,
        scrollTrigger: {
          scroller: mainRef.current,
          trigger: fifthRef.current,
          start: "center 47%",
          scrub: 0.1,
          // markers: true,
          ease: "power1.inOut",
          yoyo: true,
          toggleActions: "play reverse on",
        },
        onStart: () => {
          tl.to(modRef?.position, {
            x: -1,
            y: 0.67,
            z: 100,
            scrollTrigger: {
              scroller: mainRef.current,
              trigger: fifthRef.current,
              start: "center 47%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play reverse on",
            },
            onStart: () => { },
            duration: 1,
          });
          tl.to(oneWheel?.rotation, {
            x: "+=500",
            scrollTrigger: {
              scroller: mainRef.current,
              trigger: fifthRef.current,
              start: "center 47%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play reverse on",
            },

            ease: "linear",
          }).to(twoWheel?.rotation, {
            x: "+=500",
            scrollTrigger: {
              scroller: mainRef.current,
              trigger: fifthRef.current,
              start: "center 47%",
              scrub: 0.1,
              // markers: true,
              ease: "power1.inOut",
              yoyo: true,
              toggleActions: "play reverse on",
            },

            ease: "linear",
          });
        },
        duration: 1,
      })
    tl.fromTo(lastRef.current, {
      x: "-100vw",
    }, {
      x: "0vw",
      scrollTrigger: {
        scroller: mainRef.current,
        trigger: sixthRef.current,
        start: "center 70%",
        end: "center 50%",
        scrub: 0.1,
        // markers: true,
        ease: "power1.inOut",
        yoyo: true,
        toggleActions: "play reverse on",
      },
      ease: "linear",
    });



    console.log("modRef", oneWheel);



    const updateAnimation = () => {
      // Your animation logic here
      tl.progress(window.scrollY / document.body.scrollHeight);

      // Request the next frame
      requestAnimationFrame(updateAnimation);
    };

    // window.onload = ()=> {
    if (window.innerWidth < 768) {
      console.log("detected mobile");
      setZoom(50);
    } else {
      console.log("not detected mobile");
      setZoom(30);
    }

    if (window.innerWidth < window.innerHeight) {
      setIsRotate(true);
    } else {
      setIsRotate(false);
    }
    // }
    console.log(window.innerWidth);
    window.onresize = () => {
      if (window.innerWidth < 768) {
        setZoom(50);
      } else {
        setZoom(30);
      }
    };
    // Call the function to start the animation
    updateAnimation();

    return () => {
      // Clean up animation on component unmount
      tl.kill();
    };
    // }
  }, [loaded, modRef, oneWheel, tesRef, twoWheel?.rotation]);

  useEffect(() => {
    // console.log(cameraRef.current);
  }, [cameraRef]);

  return (
    <div className="">
      <Head>
        {/* SEO Meta Tags */}
        <title>McLaren P1 - Ultimate Hybrid Hypercar</title>
        <meta name="description" content="Explore the McLaren P1, the ultimate hybrid hypercar with cutting-edge technology and performance." />
        <meta name="keywords" content="McLaren P1, hypercar, hybrid car, sports car, automotive" />
        <meta name="author" content="Fahad Ali" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="McLaren P1 - Ultimate Hybrid Hypercar" />
        <meta property="og:description" content="Explore the McLaren P1, the ultimate hybrid hypercar with cutting-edge technology and performance." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mclearn-p1-3d-car-website.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="McLaren P1 - Ultimate Hybrid Hypercar" />
        <meta name="twitter:description" content="Explore the McLaren P1, the ultimate hybrid hypercar with cutting-edge technology and performance." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mclearn-p1-3d-car-website.vercel.app/" />

        <meta name="twitter:creator" content="@FahadAl40129449" />


        {/* Other Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mclearn-p1-3d-car-website.vercel.app/" />
      </Head>
      <div className="w-full h-full fixed -z-[8]">
        <Canvas
          className="fixed -z-1 top-0 w-full pointer-events-none bg-transparent"
          shadows
          colorManagement
        >
          <PerspectiveCamera
            ref={(el) => {
              cameraRef.current = el;
              setTestRef(el);
            }}
            fov={zoom}
            position={[6.1511104366, 2.6882002163, -1.140921425]}
            target={[0, 0, 0]}
            shadow={{
              bias: 0.001,
              near: 0.1,
              far: 1000,
              focus: 1,
              fov: 30,
            }}
            makeDefault
          />

          <Suspense fallback={<Loading isRotate={isRotate} setLoaded={setLoaded} />}>

            <mesh
              ref={(el) => {
                modelRef.current = el;
                setModRef(el);
              }}
              castShadow // Enable shadow casting
              receiveShadow // Enable shadow receiving
            >


              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, -5]}
                castShadow // Enable shadow casting
                shadow-mapSize-width={1024} // Adjust the shadow map size as needed
                shadow-mapSize-height={1024} // Adjust the shadow map size as needed
              />

              <Environment files="/gem_2.hdr" />

              <Model
                setOneWheel={setOneWheel}
                receiveShadow
                setTwoWheel={setTwoWheel}
              />

              <AccumulativeShadows
                position={[0, -0.5, 0]}
                frames={100}
                alphaTest={0.9}
                opacity={1}
                scale={30}
              >
                <RandomizedLight
                  amount={8}
                  radius={10}
                  ambient={0.5}
                  position={[1, 5, -1]}
                />
              </AccumulativeShadows>

              {/* <AccumulativeShadows position={[0, -0.5, 0]} frames={100} alphaTest={5} scale={5}> */}

            </mesh>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </div>
      {loaded != 100 && !isRotate ? (
        <div className="w-full h-screen bg-black flex justify-center items-center z-[999] absolute text-white">
          <div className="flex w-3/12 flex-col justify-center items-center">
          <Line percent={loaded} strokeWidth={1} strokeColor="blue" />          
          <p>{loaded}%</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {isRotate && <div className="w-full h-screen flex z-[999] absolute flex-col gap-7 items-center content-center text-center justify-center bg-slate-500 text-5xl whitespace-pre-wrap font-bold font-sans">
        <h1>Please Rotate your device for better view</h1>
        <MdCropRotate className={styles.rotate} />
      </div>}
      <main
        ref={mainRef}

        className=" overflow-y-scroll overflow-x-hidden h-screen snap-mandatory snap-y "
      >
        <div className={`${russo_one.className} p-[0px] w-full absolute items-center justify-evenly text-white flex z-50 gap-5`} ref={navRef}>
          <Image src="/logo.png" width={200} height={100} alt="Logo" />
          <div className="flex gap-5">
            <Link href="" onClick={() => scrollPage(secRef)}>Home</Link>
            <h1>About</h1>
            <Link href="https://cars.mclaren.com/gb-en/enquire?campaignid=CMP-01103-J7Q7S1">Register Interest</Link>
          </div>
        </div>
        <section
          ref={firstRef}
          style={{
            background:
              "linear-gradient(2deg, rgb(20 24 33) 27.86%, rgba(46, 52, 64, 0) 74.43%)",
          }}
          className="w-full -z-10 relative flex flex-col content-between items-center h-screen snap-center bg-gray"
        >


          <div
            className={
              "w-full flex flex-col justify-center items-center top-[15%] h-fit relative"
            }
          >
            <h1
              className={`${russo_one.className} text-white text-[3vmax] z-50 whitespace-nowrap`}
            >
              FACTS & FIGURES
            </h1>

            <h1
              className={`${sonsi_one.className} font-extrabold text-5xl -z-10 top-3/4 text-gray-700 whitespace-nowrap absolute`}
              style={{ fontSize: "min(7vw, 170px)" }}
            >
              MCLEARN P1
            </h1>
            <p className="text-white font-sans text-center text-base md:text-2xl">
              Designed, engineered and built to be the best driver’s car in the
              world.
            </p>
          </div>
          <div className="flex w-full h-screen justify-evenly items-end relative bottom-[7%] flex-row flex-nowrap">
            <div className="flex flex-col items-center">
              <h1
                className={` ${russo_one.className} text-slate-600 flex text-[4vmax] sm:text-3xl items-center gap-1 sm:gap-3`}
              >
                <IoSpeedometerOutline className="text-2xl sm:text-4xl text-slate-600" />
                Speed
              </h1>
              <h1
                className={`${russo_one.className} text-white text-base sm:text-3xl`}
              >
                {loaded && <p><CountUp start={0} redraw={true} end={350} duration={5} /> Kph</p>}
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <h1
                className={` ${russo_one.className} text-slate-600 flex  text-[4vmax] sm:text-3xl items-center gap-1 sm:gap-3`}
              >
                <BsTornado className="text-2xl sm:text-4xl text-slate-600" />
                Torque
              </h1>
              <h1
                className={`${russo_one.className} text-white text-base sm:text-3xl`}
              >
                {loaded && <p><CountUp start={0} redraw={true} end={900} duration={5} /> Kph</p>}
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <h1
                className={` ${russo_one.className} text-slate-600 flex text-[4vmax] sm:text-4xl items-center gap-1 sm:gap-3`}
              >
                <FaBolt className="text-2xl sm:text-4xl text-slate-600" />
                Power
              </h1>
              <h1
                className={`${russo_one.className} text-white text-base sm:text-3xl`}
              >
                {loaded && <p><CountUp end={350} redraw={true} duration={5} /> Kph</p>}
              </h1>
            </div>
          </div>
        </section>
        <section
          ref={secRef}
          id="#design"
          style={{ background: "linear-gradient(181deg, rgb(20 24 33) 27.86%, rgba(46, 52, 64, 0) 74.43%)" }}
          className="w-full h-screen snap-center overflow-hidden -z-[9] relative flex justify-center items-center"
        >
          <div className="flex w-full h-screenx items-center justify-between">
            <div className="flex flex-col content-center -rotate-90" ref={textRef1}>
              <h1 className={`${russo_one.className} relative z-50 text-white text-[3vw] md:text-8xl`}>Pure</h1>
              <h1 className={`${russo_one.className} relative z-50 text-white text-[3vw] md:text-8xl`}>Rare</h1>
              <h1 className={`${russo_one.className} relative z-50 text-white text-[3vw] md:text-8xl`}>Beautiful</h1>
            </div>
            <div className="flex flex-col content-center -rotate-90" ref={textRef2}>
              <h1 className={`${russo_one.className} relative z-50 text-white text-[3vw] md:text-6xl`}>Body type</h1>
              <h1 className={`${russo_one.className} relative z-50 text-gray-500 text-[3vw] md:text-6xl `}>Coupé</h1>
            </div>
          </div>
        </section>
        <section
          ref={thirdRef}
          className="w-full h-screen snap-center flex justify-center items-center"
        >
          <div className="w-full h-screen flex items-center justify-between p-10 sm:p-20" ref={textRef3}>
            <div className="">
              <h1 className={`${russo_one.className} text-white text-3xl md:text-7xl font-extrabold`}>Premium Exprience</h1>
              <p className="text-white font-sans text-base md:w-[60%] md:text-2xl">This car had a bonded aluminium and carbon carbon fiber monocoque.</p>
              <br />
              <div className="flex flex-col">
                <div>
                  <h1 className="text-white text-xl md:text-3xl font-sans font-bold">BREAKING</h1>
                  <div className={`${russo_one.className} text-slate-500 flex gap-3 text-3xl md:text-5xl`}><p className=" text-slate-500" ref={countUp}> 100 </p><p>Kph</p></div>
                </div>
                <br />
                <div>
                  <h1 className="text-white text-xl md:text-3xl font-sans font-bold">EFFICIENCY*</h1>
                  <div className={`${russo_one.className} text-slate-500 flex gap-3 text-3xl md:text-5xl`}><p className=" text-slate-500" ref={countUp2}> 194 </p><p>g/km</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={forthRef}
          className="w-full h-screen snap-center flex justify-center items-center"
        >
          <div className="w-full h-screen flex flex-col items-center justify-center p-10 sm:p-20" ref={textRef4}>
            <div className="flex flex-col relative left-1/2">
              <h1 className={`${russo_one.className} text-white text-xl md:text-6xl font-extrabold`}>Easy to ride</h1>
              <p className=" text-slate-400 font-sans text-base md:text-2xl whitespace-pre-wrap break-all w-1/2">This car weight is only 1,395kg (3,075lb).So easy to ride with this car.We believe that the purest creation are those where the design, the driving experience, the passenger experience and engineering, all play an equal role.</p>
            </div>
          </div>
        </section>
        <section
          ref={fifthRef}
          className="w-full h-screen snap-center "
        >
          <div className="w-full h-screen flex flex-col items-start justify-center p-10 sm:p-20">
            <div className="flex w-full justify-center relative left-[10vw]">
              <div className={`${styles.trigger} flex `}>
                <Image src="/engine.png" width={200} height={200} alt={"Engine"} style={{ border: "5px solid #9ca3af" }} className={`z-[1] border-spacing-3 border-4 border-black rounded-full relative -top-[5vw] left-[1vw]`} ref={imgRef} />
                <svg
                  ref={svgRef}
                  className="relative top-[2px] -left-[44px] md:left-[1px] md:-top-[46px]"
                  width="298" height="180" viewBox="0 0 298 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 11L171 6L273 155" stroke="#9ca3af" stroke-width="10" stroke-linecap="round" />
                </svg>
              </div>
            </div>
            <div ref={textRef5}>
              <h1 className={`${russo_one.className} text-white text-3xl md:text-7xl font-extrabold`}>Fastest Engine</h1>
              <div className="flex gap-3">
                <p className="text-white font-sans text-base md:text-2xl font-bold">Engine Capacity</p>
                <p className="text-white font-sans text-base md:text-2xl">3,799cc</p>
              </div>
              <div className="flex gap-3">
                <p className="text-white font-sans text-base md:text-2xl font-bold">Type</p>
                <p className="text-white font-sans text-base md:text-2xl">V8, 3.8L</p>
              </div>
              <div className="flex gap-3">
                <p className="text-white font-sans text-base md:text-2xl font-bold">Technology</p>
                <p className="text-white font-sans text-base md:text-2xl">Twin Turbochargers, Single Electric Motor Hybrid</p>
              </div>
            </div>
          </div>

        </section>
        <section
          ref={sixthRef}
          className="w-full h-screen snap-center flex justify-center items-center"
          style={{ background: "linear-gradient(2deg, rgb(20 24 33) 27.86%, rgba(46, 52, 64, 0) 74.43%)" }}
        >
          <div className="z-10 w-full h-screen whitespace-pre-wrap flex justify-center items-center text-white" style={{ textWrap: "balance" }}>
            <h1 className={`${russo_one.className} text-[5vmax] z-50 text-center`} ref={lastRef}>So, what could be your next ride?</h1>

          </div>
        </section>
      </main>
    </div >
  );
}
