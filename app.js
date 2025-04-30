<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>خانه هوشمند با ESP32</title>
  <style>
    html {
      scroll-behavior: smooth;
    }

    body {
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 30px;
      color: #e0e0e0;
      font-size: 16px;
      animation: fadeIn 2s ease-in-out;
      overflow-x: hidden;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
      animation: floatText 3s infinite;
    }
    .video-section {
      margin: 30px 0;
    }
    iframe {
      width: 80%;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(255,255,255,0.2);
      animation: pulse 5s infinite;
    }
    .team {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 40px;
      flex-wrap: wrap;
    }
    .member {
      text-align: center;
      cursor: pointer;
      transition: transform 0.3s ease;
      position: relative;
    }
    .member:hover {
      transform: scale(1.1);
    }
    .member img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 10px rgba(255,255,255,0.2);
      margin-bottom: 10px;
    }
    .member .desc {
      font-size: 1em;
      font-weight: bold;
      color: #e0e0e0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease;
    }
    .member .desc.show {
      max-height: 150px;
    }
    .slider {
      max-width: 80%;
      margin: 50px auto;
      overflow: hidden;
    }
    .slider h2 {
      margin-bottom: 20px;
    }
    .slider-container {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
    }
    .slider-container img {
      flex: 0 0 auto;
      width: 300px;
      height: auto;
      border-radius: 10px;
      scroll-snap-align: center;
      box-shadow: 0 4px 10px rgba(255,255,255,0.2);
    }
    .extra-info {
      margin-top: 50px;
      text-align: right;
      direction: rtl;
    }
    .extra-info h3 {
      color: #e0e0e0;
      margin-bottom: 10px;
      font-size: 1.6em;
    }
    .extra-info p {
      color: #ccc;
      font-size: 1.4em;
      margin-bottom: 8px;
    }
    .qr {
      margin-top: 20px;
    }
    .qr img {
      width: 150px;
      height: 150px;
    }
    .main-description {
      font-size: 2.4em;
      margin: 20px 0;
      font-weight: bold;
      animation: slideIn 2s ease-out;
    }
    .logo {
      margin-bottom: 20px;
    }
    .logo img {
      width: 150px;
      height: auto;
      animation: rotateLogo 10s linear infinite;
    }

    code, pre, a, [dir="ltr"] {
      font-family: system-ui, sans-serif !important;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.2); }
      50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
    }
    @keyframes slideIn {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes floatText {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    @keyframes rotateLogo {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .parallax {
      background: url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
      background-attachment: fixed;
      background-size: cover;
      padding: 50px 0;
    }

    #particles-js {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@master/demo/particles.json');
    });

    function toggleDescription(clickedEl) {
      const desc = clickedEl.querySelector('.desc');
      const isVisible = desc.classList.contains('show');
      document.querySelectorAll('.member .desc').forEach(p => p.classList.remove('show'));
      if (!isVisible) {
        desc.classList.add('show');
      }
    }
  </script>
</head>
<body>
  <div id="particles-js"></div>
  <div class="logo">
    <img src="0d483907-bb40-4ea6-9b05-b1c491163434.jpg" alt="لوگوی تیم">
  </div>
  <h1>خانه هوشمند در دستان شما 💡</h1>
  <p class="main-description">کنترل از راه دور چراغ‌ها، درب، فن و سایر دستگاه‌ها با ESP32 در بستر اینترنت</p>
  <div class="parallax">
    <h2>📸 عکس‌های ماکت</h2>
    <div class="slider">
      <div class="slider-container">
        <img src="1f25ad4b-4107-4435-95f2-d5d8e943b3be.jpg" alt="ماکت 1">
        <img src="6e1297f6-570d-418f-97dd-008c1e94e27a.jpg" alt="ماکت 2">
        <img src="8874ea7a-4794-4b12-b4f1-f05a848b9c6b.jpg" alt="ماکت 3">
        <img src="5015ebb8-5af7-4597-a237-63ee7e0e541f.jpg" alt="ماکت 4">
        <img src="5015ebb8-5af7-4597-a237-63ee7e0e541f.jpg" alt="ماکت 5">
        <img src="5e18328f-a19f-45c4-8ad5-9945b31d20db.jpg" alt="ماکت 6">
    </div>
  </div>
  <div class="team">
    <div class="member" onclick="toggleDescription(this)">
      <img src="c80aabe1d3c845248e5d10937ae80ab5.jpg" alt="امیر محمد ضرابی" />
      <p class="desc">امیر محمد ضرابی : برنامه نویس سایت و طراح ماکت خانه💻</p>
    </div>
    <div class="member" onclick="toggleDescription(this)">
      <img src="41f0c7aa5c4e41fd819b225d77c5dfd5.jpg" alt="میکاییل شکاری" />
      <p class="desc">میکاییل شکاری :برنامه نویس برد و ایده دهنده🖥</p>
    </div>
    <div class="member" onclick="toggleDescription(this)">
      <img src="IMG_20250427_122126.jpg" alt="محمد حافظ دیانت نژاد" />
      <p class="desc">محمد حافظ دیانت نژاد: پژوهش کننده و موتاژ کنند ماکت🔎</p>
    </div>
  </div>

  <div class="extra-info">
    <h3>🦾 مشخصات فنی پروژه:</h3>
    <p>- برد ESP32 با اتصال WiFi</p>
    <div class="device-info">مغز اصلی پروژه که ارتباط با اینترنت را برقرار می‌کند.</div>
    <p>- کنترل از طریق مرورگر وب</p>
    <div class="device-info">با استفاده از صفحات وب می‌توان دستگاه‌ها را کنترل کرد.</div>
    <p>- قابلیت کنترل چراغ، فن و قفل درب</p>
    <div class="device-info">امکان مدیریت سه وسیله اصلی خانه هوشمند.</div>
    <p>- قابلیت اعلام وضعیت در با صدای بلنگو</p>
    <div class="device-info">با بلندگو وضعیت باز بودن یا بسته بودن در را اعلام می‌کنیم.</div>
    <p>- قابلیت اعلام وضعیت لوازم خانه در مرورگر وب</p>
    <div class="device-info">می‌توان وضعیت روشن/خاموش بودن وسایل را به صورت آنلاین دید.</div>

    <h3>لوازم استفاده شده در پروژه:</h3>
    <p>برد ESP32 برای ارسال دستورات </p>
    <div class="device-info">مغز اصلی پروژه که کد ها را در خود نگه داشته و اعمال میکنند</div>
    <p>بلندگو 8 اهم برای پخش موسیقی🔊</p>
    <div class="device-info">برای اعلام صوتی وضعیت‌ها و هشدارها</div>
    <p>ماژول رله برای روشن کردن فن💨</p>
    <div class="device-info">مانند یک کلید برقی هوشمند عمل می‌کند</div>
    <p>موتور سروو برای باز شدن در🚪</p>
    <div class="device-info">حرکت کنترل‌شده برای باز و بسته کردن در</div>
    <p>ال ای دی برای روشنایی خانه💡</p>
    <div class="device-info">نمایش وضعیت روشنایی خانه</div>
    <h3>💻 لینک گیت‌هاب:</h3>
    <p><a href="https://github.com/zarrabi-maker/esp32_project" target="_blank" style="color: #90caf9; text-decoration: underline; font-size: 1.4em;">github.com/zarrabi-maker/esp32_project</a></p>

    <div class="qr">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/zarrabi-maker/esp32_project" alt="QR Code to GitHub">
    </div>

    <h3>📞 راه ارتباطی:</h3>
    <p>شماره تماس: <strong>09190150618</strong> | <strong>09190045975</strong></p>
    <p>ایمیل: <strong>asmanzarrabi2016@email.com</strong></p>

    <h3>📍 محل نمایش پروژه:</h3>
    <p>شهرک شهید رجایی - دبیرستان دوره متوسطه اول توحید - نمایشگاه فخر ایران 2 - غرفه شماره 15</p>
  </div>
</body>
</html>

