<template>
  <div id="top">
    <section class="top">
      <header class="flex justify">
        <h1>Koki Nishida</h1>
        <nav>
          <ul class="flex justify">
            <li class="header-item"><a href="">profile</a></li>
            <li class="header-item"><a href="">portfolio</a></li>
            <v-hover v-slot:default="{ hover }">
              <li class="header-item">
                <a :elevation="hover ? 12 : 2" href="#contact">contact</a>
              </li>
            </v-hover>
          </ul>
        </nav>
      </header>

      <div class="top-access">
        <!-- <div class="insta"><a href="">instagram</a></div>
        <div class="git"><a href="">GitHub</a></div> -->
      </div>
    </section>
    <section class="profile">
      <h1 class="ttl">Profile</h1>
      <div class="line"></div>
      <div class="flex">
        <div class="profile-left">
          <img
            class="profile-img"
            src="~/assets/profile.jpg"
            alt="profile-image"
          />
        </div>
        <div class="profile-right">
          <h3>西田　亘輝</h3>
          <p>
            千葉県出身　千葉県市川市在住　<br />
            法政大学　経営学部　市場経営学科　卒業
            大学４年生の就活中にエンジニアを目指すことを決意。
            現在は、プログラミングスクールの質問対応として働いております。
            質問対応業務にて多くのエラーに触れ、論理的に筋道をたて解決していく能力を身につけました
          </p>
        </div>
      </div>
    </section>
    <section class="portfolio">
      <h2 class="ttl">Portfolio</h2>
      <div class="flex">
        <div class="portfolio-item">
          <a href=""
            ><img src="" alt="" /> <img src="~/assets/study-share.png" alt=""
          /></a>
          <h2>study-share</h2>
          <div class="v-btn">
            <v-btn elevation="2">
              <a class="nuxt-link" href="/study">詳細へ</a>
            </v-btn>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
    <section id="contact" class="contact">
      <h2 class="ttl">contact</h2>
      <div class="flex">
        <a href="https://www.instagram.com/xitian5673/">
          <div class="insta">
            <p class="position">Instagram</p>
          </div>
        </a>
        <a href="https://github.com/koki-n">
          <div class="git">
            <p class="position">GitHub</p>
          </div>
        </a>
      </div>
    </section>
    <v-hober>test</v-hober>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>

<style scoped>
/* 共通 */
p {
  margin: 0;
  padding: 0;
}
.flex {
  display: flex;
}
a {
  text-decoration: none;
  margin: 0;
  color: white;
}
li {
  list-style: none;
}
.justify {
  justify-content: space-between;
}
.ttl {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 60px;
  font-size: 30px;
}
/* header */
header {
  height: 100px;
  align-items: center;
}
.header-item {
  margin-right: 20px;
}
.header-item a {
  color: white;
}
/* top */
.top {
  background: url(~/assets/test.jpg) center center / cover no-repeat;
  height: 100vh;
  background-position: bottom;
  width: 100%;
  background-attachment: fixed;
}

/* profile */
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
.profile-right {
  width: 60%;
}
.profile-left {
  width: 40%;
  text-align: center;
}
.portfolio-item {
  width: 30%;
  margin: 0 auto;
}
.portfolio-item img {
  width: 100%;
}
.v-btn {
  display: flex;
  justify-content: center;
}
.nuxt-link,
.portfolio-item h2 {
  color: white;
  text-align: center;
  display: block;
}
/* contact */
.contact {
  height: 300px;
}
.contact .flex {
  justify-content: center;
}
.insta,
.git {
  background-color: #787878;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
}
.insta {
}
.git,
.insta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
}
</style>
