<template>
  <section id="aboutme">
    <div class="d-flex">
      <img :src="base + 'img/profile.jpg'" alt="me" class="photo" />
      <div class="txt">
        <h5>강혜선</h5>
        <h5>KANG HYE SEON</h5>

        안녕하세요! 웹 퍼블리셔 강혜선입니다<br />
        안녕하세요! 웹 퍼블리셔 강혜선입니다안녕하세요! 웹 퍼블리셔 강혜선입니다
        <br /><br />

        안녕하세요 안녕하세요 안녕하하세하세요 <br />
        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안<br />
        안녕하세요 안녕하세요 안녕하세요 <br />
        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하<br /><br />

        안녕하세요 안녕하세요 안녕하하세하세요 <br />
        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안<br />
        안녕하세요 안녕하세요 안녕하세요 <br />
        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하 안녕하세요 안녕하세요
        안녕하세요 안녕하 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하

        <!-- 좋아하면 더 잘한다는 마음으로 UI 개발 일을 하고 있습니다.<br /><br />

            웹 퍼블리싱을 빠삭하게 다룹니다.<br />
            React/TypeScript 등 프레임워크 환경에서 <br />
            컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요. <br />
            어디에서도 잘 보이는 반응형, 웹 접근성과 <br />
            웹 표준을 고려한 웹 페이지를 그려냅니다. <br /><br />

            맡은 프로젝트의 목적을 우선적으로 고려하며,<br />
            원활한 협업을 중요하게 생각해요. <br />
            다양한 직군과 함께 멋지고 즐거운 UX를 만드는 데 관심이 많습니다. -->
      </div>
    </div>

    <div class="skill">
      <div class="work">
        <span>WORK EXPERIENCE</span>
        <p>2024.02 - NOW (주)천재교육</p>
        <p>2020.12 - 2023.11 스케치북</p>
      </div>
      <div class="certificate">
        <span>CERTIFICATE</span>
        <p>2020 웹디자인기능사</p>
        <p>2020 컴퓨터그래픽스운용기능사</p>
        <p>2019 컴퓨터활용능력 2급</p>
        <p>2015 GTQ 포토샵 2급</p>
      </div>
      <div class="education">
        <span>EDUCATION</span>
        <p>2020.02 덕성여자대학교 졸업 (사회복지학과, 국제통상학과)</p>
        <p>
          2020.02 - 2020.07 스마트기기 UI/UX 웹디자인&웹퍼블리셔 양성과정 수료
        </p>
      </div>
      <div class="skills">
        <span>SKILLS</span>
        <div class="pho">
          <p>Photoshop</p>
          <div><div></div></div>
          <p>95%</p>
        </div>
        <div class="ill">
          <p>Illustrator</p>
          <div><div></div></div>
          <p>90%</p>
        </div>
        <div class="html">
          <p>HTML5/CSS3</p>
          <div><div></div></div>
          <p>95%</p>
        </div>
        <div class="js">
          <p>JacaSctipt/jQuery</p>
          <div><div></div></div>
          <p>90%</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const base = import.meta.env.BASE_URL;
</script>
