// CategorySidebar
// import React, { useState,useEffect } from "react";
// import foodData from "../assets/data/Menu"
// import { useSelector,useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { setActiveCategory } from "@/Redux/categorySlice";



// export default function CategorySidebar() {

// const navigate = useNavigate();
// const dispatch = useDispatch();
// const activeCategory=useSelector(state=>state.category.activeCategory);



// function slugify(str) {
//   return str.toLowerCase().replace(/\s+/g, '-')        // Replace spaces with hyphens
// }

// useEffect(()=>{

// })

// useEffect(() => {
//   const sections = document.querySelectorAll("[data-category]");
//   if (!sections.length) return;

//   const observerOptions = {
//     root: null,           // viewport
//      rootMargin: "-20% 0px -80% 0px", // triggers when section is near center
//     threshold: 0           // fires when section enters the area
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const category = entry.target.getAttribute("data-category");
//         if (category && category !== activeCategory) {
//           dispatch(setActiveCategory(category));
//           navigate(/menu/${slugify(category)}, { replace: true });
//         }
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => observer.observe(section));

//   return () => {
//     sections.forEach((section) => observer.unobserve(section));
//   };
// }, [dispatch, navigate, activeCategory]);


// const handleCategoryClick=(category)=>{
//   dispatch(setActiveCategory(category));
//   navigate(/menu/${slugify(category)});
//   console.log("active category",category);

//   const section = document.querySelector([data-category="${category}"]);
//   if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
// }

//   return (
// //   <div className="sticky-wrapper">
// //   <h3 className="mb-2">Murakami Selection</h3>
// //   <div className="space-y-2">
// //   {
// //     foodData.menu.map((item, index) => (
// //       <p className="text-base border-b-1 border-amber-100 " key={index}>
// //         <p onClick={()=>!item.subcategories && handleCategoryClick(item.category)} className={` font-medium cursor-pointer ${activeCategory==item.category?"text-pink-600 font-semi-bold":"text-white"}`}> {item.category}</p>
// //         {item.subcategories  && (
// //           <div className="">
// //             {Object.entries(item.subcategories).map(([subcategoryName, subcategoryData], subIndex) => (
// //              <p className={activeCategory===subcategoryName ? "text-pink-600 text-sm cursor-pointer py-2" : "py-2 text-gray-100 text-sm cursor-pointer"}
// //               onClick={()=>handleCategoryClick(subcategoryName)}
// //               key={subIndex}>{subcategoryName}</p>
// //             ))}
// //           </div>
// //         )}
// //       </p>
      
// //     ))
   
// //   }
// // </div>

// //     </div>
// // Update the main wrapper div
// <>
//   <h3 className="mb-2 hidden md:block">Murakami Selection</h3>
//   <div className="flex flex-row  overflow-x-auto p-3 md:p-0 md:flex-col md:overflow-visible space-x-2 md:space-y-2 md:space-x-0 w-full flex-x-0">
//     {
//       foodData.menu.map((item, index) => (
//         <div
//           className="text-base border-b-1 border-amber-100 flex-shrink-0 md:flex-col flex-row"
//           key={index}
//         >
//           <span
//             onClick={() => !item.subcategories && handleCategoryClick(item.category)}
//             className={font-medium cursor-pointer px-3 py-2 rounded ${activeCategory === item.category ? "text-pink-600 font-semibold" : "text-white"} border-1 border-gray-400 rounded-2xl md:border-none ${item.subcatgories?"hidden:md:block":""}}
//           >
//             {item.category}
//           </span>
//           {item.subcategories && (
//             <div className="flex-row md:flex-col flex">
//               {Object.entries(item.subcategories).map(
//                 ([subcategoryName, subcategoryData], subIndex) => (
//                   <p
//                     className={`${activeCategory === subcategoryName
//                       ? "text-pink-600 text-sm cursor-pointer py-2"
//                       : "py-2 text-gray-100  text-sm cursor-pointer"
//                       }  border-1 border-gray-400 rounded-2xl md:border-none`}
//                     onClick={() => handleCategoryClick(subcategoryName)}
//                     key={subIndex}
//                   >
//                     {subcategoryName}
//                   </p>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       ))
//     }
//   </div>
// </>

//   );
// }

import React, { useEffect } from "react";
import foodData from "../assets/data/Menu";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setActiveCategory } from "@/Redux/categorySlice";
import { scrollSectionIntoContainer } from "@/lib/scroll";

export default function CategorySidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.activeCategory);

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");


// useEffect(() => {
//   const sections = document.querySelectorAll("[data-category]");
//   if (!sections.length) return;

//   const observerOptions = {
//     root: null,           // viewport
//      rootMargin: "-20% 0px -80% 0px", // triggers when section is near center
//     threshold: 0           // fires when section enters the area
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const category = entry.target.getAttribute("data-category");
//         if (category && category !== activeCategory) {
//           dispatch(setActiveCategory(category));
//           navigate(/menu/${slugify(category)}, { replace: true });
//         }
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => observer.observe(section));

//   return () => {
//     sections.forEach((section) => observer.unobserve(section));
//   };
// }, [dispatch, navigate, activeCategory]);


  const handleCategoryClick = (category) => {
    const slug = slugify(category);
  const targetPath = `/menu/${slug}`;

    // Push URL first so users see immediate change
    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }

    // Update state immediately for UI highlight
    dispatch(setActiveCategory(category));

    // Scroll after the route paint to ensure nodes are in place
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const ok = scrollSectionIntoContainer('menu-scroll-container', slug, 'smooth');
        if (!ok) {
          const node = document.querySelector(`#${slug}`);
          if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  return (
    <div className="sticky top-[4.5rem] z-50 bg-black/90 backdrop-blur-md border-b border-gray-700">
      <h3 className="hidden md:block text-lg font-semibold text-white px-4 pt-3">
        Murakami Selection
      </h3>

      <div className="flex flex-row overflow-x-auto md:flex-col md:overflow-visible gap-2 px-4 py-3 no-scrollbar">
        {foodData.menu.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-col flex-shrink-0 mb-1">

           
            <span
             onClick={() => {
    if (!item.subcategories) handleCategoryClick(item.category);
  }}
              className={`hidden md:inline-block  md:border-none px-4 py-2 rounded-full border text-sm font-medium  cursor-pointer ${
                activeCategory === item.category
                  ? "text-pink-600 border-pink-600"
                  : "text-gray-200 border-gray-600 hover:text-pink-400 hover:border-pink-500"
              }`}
            >
              {item.category}
            </span>

            {/* ✅ Mobile logic: 
                show subcategories if exist, otherwise main category */}
            {item.subcategories ? (
              <div className="flex flex-row flex-wrap md:flex-col md:items-start md:justify-start gap-2 px-4">
                {Object.keys(item.subcategories).map((subName, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => handleCategoryClick(subName)}
                    className={`px-4 py-2 md:px-0 rounded-full md:border-none text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                      activeCategory === subName
                        ? "text-pink-600 border-pink-600 "
                        : "text-gray-200 border-gray-600 hover:text-pink-400 hover:border-pink-500"
                    }`}
                  >
                    {subName}
                  </button>
                ))}
              </div>
            ) : (
              // ✅ If no subcategories → show category (mobile only)
              <button
                onClick={() => handleCategoryClick(item.category)}
                className={`md:hidden  md:border-none px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                  activeCategory === item.category
                    ? "text-pink-600  bg-white"
                    : "text-gray-200 border-gray-600 hover:text-pink-400 hover:border-pink-500"
                }`}
              >
                {item.category}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}