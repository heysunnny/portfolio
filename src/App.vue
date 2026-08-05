<template>
  <div>
    <!-- 헤더 -->
    <DefaultHeader />

    <div class="wrapper-menu">
      <div class="line-menu half start"></div>
      <div class="line-menu"></div>
      <div class="line-menu half end"></div>
    </div>

    <div id="wrap">
      <!-- 메인 -->
      <Home />

      <!-- aboutme -->
      <AboutMe />

      <!-- works -->
      <Works />

      <!-- contact -->
      <Contact />
    </div>

    <div id="popup">
      <div class="popupbox" style="overflow-x: hidden">
        <div class="popupcont">
          <ul>
            <li>
              <img
                :src="base + 'img/innisfree_detail.jpg'"
                alt="innisfree_detail"
              />
            </li>
            <li>
              <img :src="base + 'img/today_detail.jpg'" alt="today_detail" />
            </li>
          </ul>
          <a href="#">
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 4.5l6 6m-6 0l6-6m-3 10a7 7 0 110-14 7 7 0 010 14z"
                stroke="#000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;

import DefaultHeader from "./layouts/DefaultHeader.vue";
import Home from "./views/Home.vue";
import AboutMe from "./views/AboutMe.vue";
import Works from "./views/Works.vue";
import Contact from "./views/Contact.vue";
</script>
