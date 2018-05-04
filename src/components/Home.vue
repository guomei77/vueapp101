  <template>
  <div class="wrapper">
  <div class="section1">
  <div class="banner"></div>
  <div class="text">
    <h2>We bring together the disciplines of business and IT to create a branded customer experience throughout the customer life cycle and beyond.</h2></div>
  <div class="seperator"></div>
  </div>
  <div class="section2">
  <h4>We are passionate about delivering a 360-degree integrated solution for various industries, with a strong focus on the automotive industry, from websites, portal solutions and e-commerce platforms, to wholesale solutions, connecting to the dealer side, enriched with business intelligence.</h4>
  <div class="list">
    <ul class="canlist">
      <li class="candoitem" v-for='(cando,index) in candoList'>
        <img :src='candoList[index].image' />
        <br>
        <span class='candoName'>{{candoList[index].name}}</span>
        <p>{{candoList[index].description}}</p>
        <span class='candoButton'>{{candoList[index].more}}</span>
      </li>
    </ul>
  </div>
  <div class='dialog'>
    <h1>Everything begins with a dialogue!</h1></div>
  </div>
<div class="section3">
<div class="postslist">
  <div class="post-wrapper" v-for='(post,index) in postsList'>
    <div class="post-image"><img :src='postsList[index].image' alt='picture' /></div>
    <div class="post-content">
      <h2>{{postsList[index].title}}</h2>
      <p class="category">{{postsList[index].category}}</p>
      <div class="seperator-line"></div>
      <p class="detail">{{postsList[index].content}}</p>
      <div class="read-more">Read More <span>></span></div>
    </div>
  </div>
  <div class='loadinfo'><span>LOAD MORE POSTs</span></div>
</div>
</div>
  <div class="section4">
  </div>
  </div>
  </template>

  <script>
  export default {
  components: {

  },
  data() {
  return {
    candoList: [{
        image: "https://www.crm-factory.eu/wp-content/uploads/2011/12/Logo_small_CRM.png",
        name: "CRM",
        description: "We are specialized in the customization of a wide array of CRM systems, tailoring them to your business requirements.",
        more: "MORE CRM"
      },
      {
        image: "https://www.crm-factory.eu/wp-content/uploads/2013/05/Logo_small_DWH.png",
        name: "DWH & BI",
        description: "Our data warehouse and business intelligence solutions deliver significant, bottom-line results, for all businesses.",
        more: "MORE DWH & BI"
      },
      {
        image: "https://www.crm-factory.eu/wp-content/uploads/2011/12/Logo_small_ERP.png",
        name: "ERP & EMS",
        description: "We offer services based on extensive experience in Enterprise Resource Planning and Dealer Management System particularly for automotive OEMs.",
        more: "MORE ERP & EMS"
      },
      {
        image: "https://www.crm-factory.eu/wp-content/uploads/2011/12/Logo_small_webAPPs.png",
        name: "Web & Apps",
        description: "Our experts will provide you with all the necessary  knowledge to develop highly interactive business application and portals.",
        more: "MORE Web & Apps"
      }
    ],
    postsList: [{
        id: 0,
        image: "https://www.crm-factory.eu/wp-content/uploads/2017/11/Firewall_System-400x266.jpg",
        title: "Systems Support Specialist for Our Offices in Munich and Prague",
        category: "November 9th, 2017|Categories: CRM Factory|Tags: Munich, Open Position",
        content: "WHO WE ARE MCON, as part of MCON GROUP brings together the disciplines of marketing and IT to create a branded customer experience throughout the customer life cycle and beyond. MCON plans and builds IT [...]"
      },
      {
        id: 1,
        image: "https://www.crm-factory.eu/wp-content/uploads/2017/11/customer-relationship-management-400x260.jpg",
        title: "CRM Consultant Hiring in Munich",
        category: "November 9th, 2017|Categories: CRM Factory|Tags: Munich, Open Position",
        content: "WER WIR SIND MCON, als Tochter der MCON GROUP AG vereint die Disziplinen Marketing und IT, um damit zugeschnittene Kundenlösungen für deren Customer Life Cycle anzubieten. MCON plant und entwickelt IT Systeme, die es unseren Kunden [...]"
      },
      {
        id: 2,
        image: "https://www.crm-factory.eu/wp-content/uploads/2017/11/expert_feature_1410x930-400x264.jpg",
        title: "Junior CRM Consultant Hiring in Munich",
        category: "November 9th, 2017|Categories: CRM Factory|Tags: Munich, Open Position",
        content: "WER WIR SIND MCON, als Tochter der MCON GROUP AG vereint die Disziplinen Marketing und IT, um damit zugeschnittene Kundenlösungen für deren Customer Life Cycle anzubieten. MCON plant und entwickelt IT Systeme, die es unseren Kunden [...]"
      },
      {
        id: 3,
        image: "https://www.crm-factory.eu/wp-content/uploads/2016/05/jav-dev.png",
        title: "Adapt or Perish: Data Science Trends for Automotive Industry",
        category: "September 19th, 2017|Categories: CRM Factory",
        content: "By Gareth Kennedy. MCON attended the Big Data & Analytics Innovation Summit in Shanghai on September 6th & 7th, 2017 and found that there are two broad trends that will determine the future of [...]"
      },
      {
        id: 4,
        image: "https://www.crm-factory.eu/wp-content/uploads/2017/10/bigstock-Businessman-with-binoculars-sp-44303560-400x250.jpg",
        title: "Web Developer for our Beijing office",
        category: "August 23rd, 2017|Categories: CRM Factory, Open Positions|Tags: Web Developer",
        content: "CRM Factory is looking for a web developer to join our fast track dynamic team in Beijing. You will be responsible to provide high quality front end package to the project you joined and will [...]"
      },
      {
        id: 5,
        image: "https://www.crm-factory.eu/wp-content/uploads/2017/09/Screen-Shot-2012-02-09-at-20.08.14-400x333.jpg",
        title: "AI and Machine Learning, Beyond the Buzzwords What’s in for Retail Business",
        category: "October 13th, 2017|Categories: Latest News, MCON",
        content: "By Edison Leon.  MCON data team got the opportunity to assist to Big Data & Analytics Innovation Summit Shanghai 2017 held in Shanghai on 6th and 7th of September and organized by Innovation [...]"
      }
    ],
    carousleitems: [{
        imageURl: "https://ws4.sinaimg.cn/large/006tKfTcgy1fqy7j0r3btj31kw0pmtg7.jpg",
        comments: "“The consultants from CRM Factory in our office are trusty partners. They have a very good insight of our application and proactivily provides us a lot of support. This is what I am most satisfied with.”",
        title: "Chris Tan, Project Manager - Volkswagen Finance China"
      },
      {
        imageURl: "https://ws4.sinaimg.cn/large/006tKfTcgy1fqy7j0r3btj31kw0pmtg7.jpg",
        comments: "“Really happy to have CRM FACTORY on board for our CRM strategy project”",
        title: "Mathieu Herout, CFO - Sinodis"
      },
      {
        imageURl: "https://ws4.sinaimg.cn/large/006tKfTcgy1fqy7j0r3btj31kw0pmtg7.jpg",
        comments: "“The CRM Factory team, has been very supportive, initiative and friendly. They always show strong communication skills and organizing ability, even handling pressure well during hard times. Thanks a lot for your contribution to the Market China BI.”",
        title: "Elena Yuan, Project Manager - Volkswagen Finance China"
      },
      {
        imageURl: "https://ws4.sinaimg.cn/large/006tKfTcgy1fqy7j0r3btj31kw0pmtg7.jpg",
        comments: "“Great workshop, very well prepared. Wish every Friday would be like this!”",
        title: "Jon Roach, Senior Manager - Porsche Experience Centre"
      },
    ]
  }
  },
  }
  </script>

  <style scoped>
  /* section1*/

  .banner {
  height: 630px;
  background-image: url(https://www.crm-factory.eu/wp-content/uploads/2016/08/ken-office1.jpg);
  background-position: center center;
  zoom: 1;
  }

  .text {
  text-align: center;
  background-color: #f3f3f3;
  height: 170px;
  padding-left: 13%;
  padding-right: 13%;
  }

  .text h2 {
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 3px;
  text-align: center;
  padding-top: 3.3%;
  }

  .seperator {
  height: 8px;
  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.5) 0, rgba(255, 255, 255, 0) 65%);
  }

  /* section2*/

  .section2 {
  color: #333333;
  }

  .section2 h4 {
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin: 2.5% 7%;
  }

  .list {
  margin-top: 50px;
  }

  ul {
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  text-align: center;
  }

  li {
  display: inline-block;
  }

  .candoitem img {
  margin-bottom: 12px;
  }

  .candoName {
  font-size: 30px;
  }

  .candoitem p {
  width: 350px;
  height: 100px;
  margin-top: 12px;
  font-size: 18px;
  margin-bottom: 50px;
  }

  .candoButton {
  border: 1px solid gray;
  padding: 12px 24px;
  letter-spacing: 3px;
  }

  .candoButton:hover {
  background-color: #e3e4e5;
  }

  .dialog {
  background-image: url(https://www.crm-factory.eu/wp-content/uploads/2016/10/CAFE1.jpg);
  text-align: center;
  height: 180px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  margin-top: 4%;
  padding-top: 8%;
  }

  .dialog h1 {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 42px;
  font-weight: 700;
  height: auto;
  line-height: 42px;
  }

  /* section3*/

  .section3 {
  background-color: #f4f4f4;
  /*background-position: left top;*/
  /*background-repeat: no-repeat;*/
  padding-top: 40px;
  padding-bottom: 50px;
  height: atuo;
  margin-bottom: 70px;
  }

  .postslist {
  text-align: center;
  }

  .post-wrapper {
  width: 500px;
  height: auto;
  border: 1px solid #e3e4e5;
  border-bottom: 3px solid #e3e4e5;
  display: inline-block;
  vertical-align: top;
  margin: 25px;
  background-color: #ffffff;
  }

  .post-image {}

  .post-image img {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e3e4e5;
  }

  .post-content {
  padding: 30px 25px 0px 25px;
  width: 89%;
  text-align: left;
  line-height: 2em;
  }

  .post-content h2 {
  color: #700000;
  letter-spacing: 3px;
  font-weight: 400;
  font-size: 30px;
  }

  .category {
  font-size: 18px;
  margin: 10px 0 16px 0;
  }

  .seperator-line {
  height: 6px;
  border: 1px solid #e3e4e5;
  border-left: #ffffff;
  border-right: #ffffff;
  margin-bottom: 16px;
  }

  .detail {
  font-size: 18px;
  margin-bottom: 16px;
  }

  .read-more {
  margin-bottom: 20px;
  font-size: 20px;
  }

  .read-more:hover {
  color: #700000;
  }

  .read-more span {
  vertical-align: middle;
  }

  .loadinfo {
  background-color: black;
  text-align: center;
  padding: 10px auto;
  height: 50px;
  line-height: 50px;
  margin: 30px 8.3%;

  }

  .loadinfo span {
  color: white;
  font-size: 18px;
  font-weight: bold;
  }

  /* section4*/
  </style>
