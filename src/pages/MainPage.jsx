import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import MenuSection from '../components/MenuSection';
import Cart from '../components/Cart';
import foodData from '@/assets/data/Menu';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Filter from '@/components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '@/Redux/categorySlice';
function MainPage() {

  const navigate = useNavigate();
  const activeCategory = useSelector((state => state.category.activeCategory));

  const { category } = useParams();
  const dispatch = useDispatch();

  console.log("useparams", category)

const unslugify = (slug) => {
  for (const item of foodData.menu) {
    // 🔹 Check main category
    const mainSlug = item.category.toLowerCase().replace(/\s+/g, "-");
    if (mainSlug === slug) return item.category;

    // 🔹 Check subcategories (if any)
    if (item.subcategories) {
      for (const subName of Object.keys(item.subcategories)) {
        const subSlug = subName.toLowerCase().replace(/\s+/g, "-");
        if (subSlug === slug) return subName;
      }
    }
  }

  // 🔹 If not found
  return null;
};



  useEffect(() => {
    if (category) {
      const real = unslugify(category);
      console.log("real category", real);
      if (real && real !== activeCategory) {
        dispatch(setActiveCategory(real));
        console.log("Active Category updated from URL:", real);
      }
    }
  }, [category, dispatch, activeCategory]);


  useEffect(() => {
  const sections = document.querySelectorAll("[data-category]");
  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // adjust based on your design
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const category = entry.target.getAttribute("data-category");
        if (category && category !== activeCategory) {
          dispatch(setActiveCategory(category));
          const slug = category.toLowerCase().replace(/\s+/g, "-");
          navigate(`/menu/${slug}`, { replace: true });
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, [dispatch, navigate, activeCategory]);

  return (
    <div className='flex flex-col  relative h-[100vh]'>
      <div className="heading sticky top-0 z-50 bg-black  mb-4 shadow-md"><h3 className='mt-32 px-8 '>Menu  <span className="text-pink-600 text-2xl">.</span> <span className="">{activeCategory}</span> </h3></div>

     
      <div className='flex  md:flex-row flex-col px-8 min-h-[calc(100vh-8rem)] mt-7'> {/* Example: 8rem for header */}
        <div className=' w-full md:w-1/5 md:h-[calc(100vh-8rem)] md:overflow-y-auto sticky top-0 md:relative'>
          <CategorySidebar />
        </div>
        <div className='md:w-3/5 w-full h-[calc(100vh-8rem)] overflow-y-auto px-3 no-scrollbar'>
          <MenuSection />
        </div>
        <div className='md:w-1/5   hidden min-h-[calc(100vh-8rem)] rounded-2xl p-3 bg-white  sticky top-[8rem] self-start md:flex flex-col  shadow-lg'>
  <Cart />
</div>
      </div>

    </div>
  );
}

export default MainPage;
