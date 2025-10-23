

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import MenuSection from '../components/MenuSection';
import Cart from '../components/Cart';
import foodData from '@/assets/data/Menu';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Filter from '@/components/Filter';
import { beginAutoScrollGuard } from '@/lib/scroll';
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
    if (!category) return;
    const real = unslugify(category);
    if (real && real !== activeCategory) {
      dispatch(setActiveCategory(real));
      // Delay scroll to let content render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const header = document.querySelector(`#${category} > h2`);
          const container = document.getElementById('menu-scroll-container');
          if (header && container) {
            const containerTop = container.getBoundingClientRect().top;
            const headerTop = header.getBoundingClientRect().top;
            const offsetTop = headerTop - containerTop + container.scrollTop;
            container.scrollTo({ top: offsetTop, behavior: 'auto' });
          }
        });
      });
    }
  }, [category, dispatch]);


  useEffect(() => {
    const container = document.getElementById("menu-scroll-container");
    if (!container) return;

    const headers = Array.from(
      container.querySelectorAll("h2[data-observe='true'][data-category]")
    );
    const sentinels = Array.from(
      container.querySelectorAll("[data-sentinel='true'][data-category]")
    );
    if (!headers.length) return;

    let ticking = false;
    const onScroll = () => {
      if (typeof window !== 'undefined' && window.__menuAutoScrolling) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const containerTop = container.getBoundingClientRect().top;
        const containerBottom = container.getBoundingClientRect().bottom;

        // prefer the sentinel that crossed the top; fallback to nearest header
        let active = null;
        for (const s of sentinels) {
          const top = s.getBoundingClientRect().top;
          if (top >= containerTop - 1 && top <= containerTop + 2) {
            active = s.getAttribute('data-category');
            break;
          }
        }

        if (!active) {
          let bestHeader = null;
          let bestDelta = Infinity;
          for (const h of headers) {
            const delta = Math.abs(h.getBoundingClientRect().top - containerTop);
            if (delta < bestDelta) {
              bestDelta = delta;
              bestHeader = h;
            }
          }
          active = bestHeader ? bestHeader.getAttribute('data-category') : null;
        }

        if (active && active !== activeCategory) {
          dispatch(setActiveCategory(active));
          const slug = active.toLowerCase().replace(/\s+/g, '-');
          navigate(`/menu/${slug}`, { replace: true });
        }
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => container.removeEventListener('scroll', onScroll);
  }, [dispatch, navigate, activeCategory]);

  // Initial deep link via hash or URL param
  useEffect(() => {
    const container = document.getElementById("menu-scroll-container");
    const targetSlug = (window.location.hash || "").replace(/^#/, "") || category;
    if (!targetSlug) return;
    const targetFromSlug = unslugify(targetSlug);
    if (!targetFromSlug) return;
    const header = document.querySelector(`#${targetSlug} > h2`);
    if (header && container) {
      const containerTop = container.getBoundingClientRect().top;
      const headerTop = header.getBoundingClientRect().top;
      const offsetTop = headerTop - containerTop + container.scrollTop; // exact offset inside container
      beginAutoScrollGuard(container);
      container.scrollTo({ top: offsetTop, behavior: "auto" });
    }
  }, []);

  return (
    <div className='flex flex-col  relative h-[100vh]'>
      <div className="heading sticky top-0 z-50 bg-black  mb-4 shadow-md"><h3 className='mt-32 px-8 '>Menu  <span className="text-pink-600 text-2xl">.</span> <span className="">{activeCategory}</span> </h3></div>

     
      <div className='flex  md:flex-row flex-col px-8 min-h-[calc(100vh-8rem)] mt-7'> {/* Example: 8rem for header */}
        <div className=' w-full md:w-1/5 md:h-[calc(100vh-8rem)] md:overflow-y-auto sticky top-0 md:relative'>
          <CategorySidebar />
        </div>
        <div id='menu-scroll-container' className='md:w-3/5 w-full h-[calc(100vh-8rem)] overflow-y-auto px-3 no-scrollbar scroll-smooth'>
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
