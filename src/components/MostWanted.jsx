


// import React, { useRef, useEffect, useState } from "react";
// import Button from "./Button";
// import FoodCart from "./FoodCart";
// import foodData from "../assets/data/Menu";
// import Footer from "@/pages/Footer";

// export default function MostWanted() {
//   const mostWantedProducts = foodData.menu.find(
//     (item) => item.category === "Most Wanted"
//   ).items;

//   const sectionRef = useRef(null);
//   const rightBoxRef = useRef(null);
//   const leftBoxRef = useRef(null);

//   const [inView, setInView] = useState(false); // section visibility
//   const [canScrollPage, setCanScrollPage] = useState(false);
//   const [rightBoxDone, setRightBoxDone] = useState(false);
//   const [leftBoxDone, setLeftBoxDone] = useState(false);

//   // IntersectionObserver to detect when section is mostly visible
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.5 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) obs.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Helper to check if an element is scrolled to bottom (with small tolerance)
//   const isAtBottom = (el, tolerance = 2) =>
//     el.scrollTop + el.clientHeight >= el.scrollHeight - tolerance;

//   // Right box scroll handler (fires on user scroll and programmatic scroll)
//   const handleRightBoxScroll = () => {
//     const el = rightBoxRef.current;
//     if (!el) return;
//     setRightBoxDone(isAtBottom(el));
//   };

//   // Left box scroll handler (only when left actually scrolls)
//   const handleLeftBoxScroll = () => {
//     const el = leftBoxRef.current;
//     if (!el) return;
//     setLeftBoxDone(isAtBottom(el));
//   };

//   // Redirect wheel events from left box to right box while inView
//   useEffect(() => {
//     const leftBox = leftBoxRef.current;
//     const rightBox = rightBoxRef.current;
//     if (!leftBox || !rightBox) return;

//     const handleWheel = (e) => {
//       // Only intercept when section is visible
//       if (!inView) return;

//       // If right box not done, redirect scroll to right box
//       if (!isAtBottom(rightBox)) {
//         // perform scroll
//         rightBox.scrollTop += e.deltaY;

//         // Immediately update rightBoxDone (programmatic scroll might not trigger instant onScroll)
//         setRightBoxDone(isAtBottom(rightBox));

//         // Prevent left-box (and page) default scrolling
//         e.preventDefault();
//       } else {
//         // If right box already done, do NOT prevent default — allow left box or page to scroll
//         // But we still allow the left box to scroll naturally (if it has content)
//       }
//     };

//     leftBox.addEventListener("wheel", handleWheel, { passive: false });
//     return () => leftBox.removeEventListener("wheel", handleWheel);
//   }, [inView]); // rebind when inView changes

//   // Lock page scroll only while we're inside the section and page shouldn't scroll yet
//   useEffect(() => {
//     if (inView) {
//       // Now decide when to allow page scrolling.
//       // Changed logic: allow page scroll as soon as rightBox is done.
//       const allowPage = rightBoxDone; // <-- change here if you want both boxes required
//       setCanScrollPage(allowPage);
//       document.body.style.overflow = allowPage ? "" : "hidden";
//     } else {
//       // restore normal behavior when section is out of view
//       setCanScrollPage(false);
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [inView, rightBoxDone]);

//   // Clean up on unmount just in case
//   useEffect(() => {
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="px-2 md:px-8 min-h-screen py-3">
//       <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-11">
//         MOST WANTED
//       </h2>

//       <div className="flex flex-col md:flex-row gap-3 productbox">
//         {/* Left Box */}
//         <div
//           ref={leftBoxRef}
//           onScroll={handleLeftBoxScroll}
//           className="sm:w-1/2 w-full h-[550px] border-gray-400 border-1 rounded-2xl flex-col leftbox md:sticky flex justify-between overflow-y-scroll"
//         >
//           <img
//             className="h-2/3 w-full rounded-t-2xl"
//             src="/mostwanted.png"
//             alt=""
//           />
//           <div className="flex-1 flex items-center">
//             <div className="flex flex-col px-4">
//               <h3 className="text-xl md:text-2xl">
//                 CHECK OUT MOST POPULAR PRODUCTS
//               </h3>
//               <Button content="Order Now" route="/menu" />
//             </div>
//           </div>
//         </div>

//         {/* Right Box */}
//         <div
//           ref={rightBoxRef}
//           onScroll={handleRightBoxScroll}
//           className="sm:w-1/2 w-full rightbox h-[550px] justify-center appearance-none overflow-y-scroll gap-2 grid grid-cols-2"
//         >
//           {mostWantedProducts.map((item, index) => (
//             <FoodCart key={index} item={item} />
//           ))}
//         </div>
//       </div>

     
//     </div>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import FoodCart from "./FoodCart";
import foodData from "../assets/data/Menu";
import Footer from "@/pages/Footer";

export default function MostWanted() {
  const mostWantedProducts = foodData.menu.find(
    (item) => item.category === "Most Wanted"
  ).items;

  const sectionRef = useRef(null);
  const rightBoxRef = useRef(null);
  const leftBoxRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [canScrollPage, setCanScrollPage] = useState(false);
  const [rightBoxDoneBottom, setRightBoxDoneBottom] = useState(false);
  const [rightBoxDoneTop, setRightBoxDoneTop] = useState(true); // initially at top

  // Helper functions
  const isAtBottom = (el, tolerance = 2) =>
    el.scrollTop + el.clientHeight >= el.scrollHeight - tolerance;
  const isAtTop = (el, tolerance = 2) => el.scrollTop <= tolerance;

  // Track when section is visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => sectionRef.current && obs.unobserve(sectionRef.current);
  }, []);

  // Handle right box scroll (both directions)
  const handleRightBoxScroll = () => {
    const el = rightBoxRef.current;
    if (!el) return;
    setRightBoxDoneBottom(isAtBottom(el));
    setRightBoxDoneTop(isAtTop(el));
  };

  // Redirect wheel from left box to right box (both directions)
  useEffect(() => {
    const leftBox = leftBoxRef.current;
    const rightBox = rightBoxRef.current;
    if (!leftBox || !rightBox) return;

    const handleWheel = (e) => {
      if (!inView) return;

      const delta = e.deltaY;

      // SCROLLING DOWN
      if (delta > 0) {
        if (!isAtBottom(rightBox)) {
          rightBox.scrollTop += delta;
          setRightBoxDoneBottom(isAtBottom(rightBox));
          e.preventDefault();
        }
      }

      // SCROLLING UP
      else if (delta < 0) {
        if (!isAtTop(rightBox)) {
          rightBox.scrollTop += delta;
          setRightBoxDoneTop(isAtTop(rightBox));
          e.preventDefault();
        }
      }
    };

    leftBox.addEventListener("wheel", handleWheel, { passive: false });
    return () => leftBox.removeEventListener("wheel", handleWheel);
  }, [inView]);

  // Decide when to allow page scrolling:
  // - Scroll down: only when rightBox is at bottom.
  // - Scroll up: only when rightBox is at top.
  useEffect(() => {
    if (!inView) {
      document.body.style.overflow = "";
      return;
    }

    // allow page scroll when either extreme reached (up or down)
    const allowPageScroll = rightBoxDoneBottom || rightBoxDoneTop;
    setCanScrollPage(allowPageScroll);
    document.body.style.overflow = allowPageScroll ? "" : "hidden";
  }, [inView, rightBoxDoneBottom, rightBoxDoneTop]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={sectionRef} className="px-2 md:px-8 min-h-screen py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-11">
        MOST WANTED
      </h2>

      <div className="flex flex-col md:flex-row gap-3 productbox">
        {/* Left Box */}
        <div
          ref={leftBoxRef}
          className="sm:w-1/2 w-full h-[550px] border-gray-400 border-1 rounded-2xl flex-col md:sticky flex justify-between overflow-y-scroll"
        >
          <img
            className="h-2/3 w-full rounded-t-2xl"
            src="/mostwanted.png"
            alt=""
          />
          <div className="flex-1 flex items-center">
            <div className="flex flex-col px-4">
              <h3 className="text-xl md:text-2xl">
                CHECK OUT MOST POPULAR PRODUCTS
              </h3>
              <Button content="Order Now" route="/menu" />
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div
          ref={rightBoxRef}
          onScroll={handleRightBoxScroll}
          className="sm:w-1/2 w-full rightbox h-[550px] justify-center appearance-none overflow-y-scroll gap-2 grid grid-cols-2"
        >
          {mostWantedProducts.map((item, index) => (
            <FoodCart key={index} item={item} />
          ))}
        </div>
      </div>

     
    </div>
  );
}
