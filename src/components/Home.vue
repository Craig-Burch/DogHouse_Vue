<template>
  <div>
   <div class="heroBackground">
        <mdb-container class="d-flex justify-content-center align-items-center">
          <mdb-row class="mt-5 pt-1 mb-5">
            <mdb-col md="12" class="text-center animated fadeInLeft">
              <img class="img-fluid mt-5" :src="headerLogo" style="max-height: 300px;">
            </mdb-col>
            <mdb-col md="12" class="text-center animated fadeInRight">
            <!--  <div class="vertical-align-custom"> -->
              <h3 class="h1-reponsive font-weight-bold CocolorDark-text">
                <strong>Your Dog Will Love Us, We Shih Tzu Not.</strong>
              </h3>
              <h5 class=" pb-md-2 pb-sm-3 pb-5 white-text"> The Dog House is open for business on West Ridge Pike in Limerick, PA. <br class="hideForMobile">We are dedicated to making sure that your pet's grooming experience is stress-free and pleasant. </h5>
              <router-link to="/Gallery">
                <mdb-btn class="CocolorBtnsDarkOutline" rounded style="font-size: 16px !important">View Gallery</mdb-btn>
              </router-link>
             <a href="#" v-scroll-to="'#services'">
                <mdb-btn  
                   class="CocolorBtnsDarkOutline" 
                   rounded 
                   style="font-size: 16px !important">
                    Services
                </mdb-btn>
              </a>
            <!-- </div> -->
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <mdb-container>
     <section class="my-4 mt-3 mb-5">
       <mdb-row style="">
        <mdb-col md="12" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="12" md="9" size="10">
               <img id="services" :src="houses" class="img-fluid" style="margin-top: 30px">
            </mdb-col>
          </mdb-row>
        </mdb-col>
       </mdb-row>
     </section>
   </mdb-container>
  </div>
<main>
<section class="my-4">
  <mdb-container>
  <h2 class="h1-responsive font-weight-bold text-center my-5 CocolorDark-text">Only The Best For Your Pets</h2>
  <p class="black-text text-center w-responsive mx-auto mb-5">Thank you for dropping by! We are excited to show you what we are all about! If you have any questions feel free to ask. You can find more info about us here as well as our galleries of past clientel. Enjoy!</p>
  <div class="row">
    <div class="col-lg-5 mb-lg-0 mb-5">
      <img :src="team" alt="Salon" class="img-fluid rounded z-depth-3">
    </div>
    <div class="col-lg-7">
      <div class="row mb-3">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Grooming</h5>
          <p class="black-text">All dog grooming appointments include a Bath with premium shampoo and conditioner, nails ground, ears cleaned, brush out and haircut. </p>
        </div>
      </div>
      <div class="row mb-3">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Product Knowledge</h5>
          <p class="black-text">At The Dog House, we are knowledgable in a variety of products to help your pet feel it's best and with the services we offer they'll look their best too! </p>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Photos</h5>
          <p class="black-text mb-0">Once we have completed your pet's grooming appointment we offer photos of them fresh and squeaky clean. We even do dress up shoots on special occasions! We post daily to our Facebook account. </p>
        </div>
      </div>
    </div>
  </div>
 <hr class="my-5">
  <div class="row">
      <div class="col-lg-5 mb-lg-0 mb-5 displayforMobile">
         <img :src="shop22" alt="Salon" class="img-fluid rounded z-depth-3">
      </div>
    <div class="col-lg-7">
      <div class="row mb-3">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Attention To Detail</h5>
          <p class="black-text">Thorough and detailed, we offer top notch grooming services for your pets.</p>
        </div>
      </div>
      <div class="row mb-3">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Comfort Is Key</h5>
          <p class="black-text">We offer a relaxed environment and professional groomers to cater to you and you pet's needs. Come visit us at The Dog House and say hello!</p>
        </div>
      </div>
      <div class="row mb-lg-0 mb-5">
        <!-- <div class="col-md-1 col-2">
          <i class="fas fa-book-open fa-2x CocolorLight-text"></i>
        </div> -->
        <div class="col-md-12 col-12">
          <h5 class="font-weight-bold mb-3 CocolorDark-text">Contact Us</h5>
          <p class="black-text mb-0">If you have any questions, feel free to reach us through our contact form or phone number below.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-5 displayforDesktop">
      <img :src="shop22" alt="Salon" class="img-fluid rounded z-depth-3">
    </div>
  </div>
</mdb-container>
</section>
   <section style="">
    <mdb-container>
     <section class="my-5 pt-2">
       <mdb-row style="">
        <mdb-col md="12" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="12" md="9" size="10">
               <img :src="houses" class="img-fluid houseMargins">
            </mdb-col>
          </mdb-row>
        </mdb-col>
       </mdb-row>
     </section>
   </mdb-container>
  </section>
  <section class="hideMobileEXTRAtext" style="background-color: #F4F5F7;">
    <mdb-container>
    <section class="my-5 pt-2 pb-1">
      <h2 class="h1-responsive font-weight-bold text-center my-4 CocolorDark-text">Why Choose Us?</h2>
      <p class="lead w-responsive text-center mx-auto mb-5">With decades of experience, we truly care about grooming and the benefits it provides for you, your pet and your busy schedule.</p>
      <mdb-row>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <!-- <mdb-icon icon="hands-helping" size="2x" class="CocolorLight-text"/> -->
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold CocolorDark-text">Personalized Service</h4>
              <p>We thrive on making sure that your pet is comfortable and that you are happy with our services. We shoot for the stars with our services and maintain high standards in our salon.</p>
              <!-- <router-link to="/Services">
                <mdb-btn class="CocolorDark" size="md">Learn more</mdb-btn>
              </router-link> -->
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
             <!--  <mdb-icon icon="dog" size="2x" class="CocolorLight-text"/> -->
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold CocolorDark-text">Safety First</h4>
              <p>We pride ourselves in taking extremely good care of your pets. Training our staff on proper procedures keeps not just your furry friends safe but also calm and relaxed in a new enviornmemt.</p>
              <!-- <router-link to="/Services">
                <mdb-btn class="CocolorDark" size="md">Learn more</mdb-btn>
              </router-link> -->
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <!-- <mdb-icon icon="smile-beam" size="2x" class="CocolorLight-text"/> -->
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold CocolorDark-text">Convenient</h4>
              <p>We understand that you may have a busy schedule to deal with and not enought time to groom on your own. We are here to make your life easier and your dog a happy camper.</p>
             <!--  <router-link to="/Services">
                <mdb-btn class="CocolorDark" size="md">Learn more</mdb-btn>
              </router-link> -->
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
 </section>
  <mdb-container>
    <mdb-row>
      <mdb-col md="12" lg="12">
        <div class="mb-4">
          <div class="d-flex justify-content-between">
            <router-link to="/Gallery">
              <h6 class="font-weight-bold CocolorDark-text">
                Gallery</h6>
             </router-link>
          </div>
          <router-link to="/Gallery">
          <h3 class="font-weight-bold CocolorDark-text mb-3 p-0">
            <a>Take A Peak!</a>
          </h3>
          </router-link>
          <p class="dark-grey-text mb-lg-0 mb-md-5 mb-4">We love each and every animal that comes through our doors and are so grateful for all of our wonderful clients and their pets. To celebrate special occasions we do it right, with photos that will last a lifetime.</p>
        </div>
      </mdb-col>
      <mdb-col md="12" lg="12">
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery1" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class=" pl-0 mb-3">
                  <p class="dark-grey-text">Who wouldn't want a kiss from this cute pup. Hapy Valentines Day!</p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery2" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Such style, such confidence, where did you get the shades, Bo? Pick us up a pair next time.</p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery3" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Yes, Junior, we will all be your valentine!</p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery4" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Single and ready to mingle. </p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery5" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Harley just has that smug look about him because he knows Bo and her have some rockin' glasses. </p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery6" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Wow, Willow! Talk about a beauty queen! </p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="galleryLinks">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery7" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Luigi is out here knowing he looks good!  </p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
        <div class="mb-4">
          <mdb-row>
            <mdb-col md="3">
              <mdb-view hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" :src="gallery8" >
                <router-link to="/Gallery">
                  <mdb-mask overlay="white-slight" class="waves-light" />
                </router-link>
              </mdb-view>
            </mdb-col>
            <mdb-col md="9">
              <p class="font-weight-bold CocolorDark-text">02/08/2020</p>
              <div class="d-flex justify-content-between">
                <mdb-col col="11" class="pl-0 mb-3">
                  <p class="dark-grey-text">Precious! Thank you for stopping by, Benji! Happy Valentines Day!</p>
                </mdb-col>
                <a>
                  <!-- <mdb-icon icon="angle-double-right" /> -->
                </a>
              </div>
            </mdb-col>
            </mdb-row>
          </div>
        </mdb-col>
      </mdb-row>
  </mdb-container>
  <section style="background-color: #F4F5F7;" class="mb-0" >
  <mdb-container>
    <section class="pb-5 pt-2">
      <h2 class="h1-responsive font-weight-bold text-center my-5 CocolorDark-text">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Please feel free to contact us via our contact form, phone number or email. We look forward to hearing from you and finding out what we can do for you.</p>
      <mdb-row>
        <mdb-col lg="5" class="lg-0 mb-4">
          <mdb-card>
            <mdb-card-body class="doghouse-contactForm">
             <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
              <div style="border-radius: 5px;" class="form-header">
                <h3 class="mt-1 ml-2 dark-grey-text"><mdb-icon icon="envelope" color="dark-grey" /> Write to us:</h3>
              </div>
              <p class="dark-grey-text">We'll get back to you as soon as possible.</p>
              <div class="md-form">
                <mdb-input 
                  label="Your name" 
                  iconClass="grey-text" 
                  type="text" 
                  id="form-name"
                  name="formattedName"
                  v-model="data.formattedName" />
              </div>
              <div class="md-form">
                <mdb-input 
                  label="Your email" 
                  iconClass="grey-text" 
                  type="email" 
                  id="form-email"
                  name="email"
                  v-model="data.email" />
              </div>
              <div class="md-form">
                <mdb-input 
                  label="Subject" 
                  iconClass="grey-text" 
                  type="text" 
                  id="form-subject" 
                  name="subject" 
                  v-model="data.subject" />
              </div>
              <div class="md-form">
                <mdb-input 
                  label="What would you like to ask?" 
                  iconClass="grey-text" 
                  id="form-text" 
                  type="text" 
                  name="content"
                  v-model="data.content"/>
              </div>
              <div class="text-center">
                <mdb-btn 
                  class="CocolorDark"
                  native-type="Submit">
                  Submit
                </mdb-btn>
              </div>
             </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="7">
          <div id="map-container" class="rounded z-depth-1-half map-container" >
            <img class="contactPic" :src="dog" alt="Contact Us" width="100%" height="100%" frameBorder="0" style="border: 0">
          </div>
          <br/>
          <mdb-row class="text-center">
            <mdb-col md="4">
              <p>250 W Ridge Pike</p>
              <p class="mb-md-0">Limerick, PA 19468</p>
            </mdb-col>
            <mdb-col md="4">
              <p>(610) 409-6444</p>
              <p class="mb-md-0">Tues - Sat, 8:00-4:00</p>
            </mdb-col>
            <mdb-col md="4">
              <p>DogHouse6444 <br> @Gmail.com</p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
  </section>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbBadge, mdbIcon, mdbMask, mdbRow, mdbCol, mdbBtn, mdbTextarea, mdbCard, mdbCardBody, mdbView } from 'mdbvue';
export default {
  name: 'Home',
  components: {
      mdbContainer,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarBrand,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbMask,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbIcon,
      mdbBadge,
      mdbInput,
      mdbTextarea,
      mdbCard,
      mdbCardBody,
      mdbView
    },
  data () {
    return {
      headerLogo: '../static/dh-logo-hero2.png',
      shop2:'../static/shop2.png',
      shop22:'../static/shop22.png',
      team:'../static/team.png',
      houses: '../static/runner.png',
      dog: '../static/contactDog.png',
      gallery1: '../static/1.jpg',
      gallery2: '../static/2.jpg',
      gallery3: '../static/3.jpg',
      gallery4: '../static/4.png',
      gallery5: '../static/5.jpg',
      gallery6: '../static/6.jpg',
      gallery7: '../static/7.jpg',
      gallery8: '../static/8.jpg',
      data: []
    };
  },
  methods: {
    handleSubmit () {
      let formValues = [];
        const inputs = document.querySelectorAll(".doghouse-contactForm input");
          for (let input of inputs) {
            let name = input.name;
            let value = input.value;
            formValues.push({ [name]: value });
          }
          formValues = Object.assign({}, ...formValues);
          console.log("------------data",this.data)
          this.data = formValues;
          if (formValues.formattedName === "") {
            alert('Name is Required. Please fix.');
          } else if (formValues.email === "") {
              alert('Email is Required. Please fix.');
          } else if (formValues.subject === "") {
              alert('Subject is Required. Please fix.');
          } else if (formValues.content === "") {
              alert('Please tell us about your inquiry. Thank you.');
          }
          else {
            axios 
            .post("http://doghousecontact2-env.us-east-1.elasticbeanstalk.com/mailer", formValues)
            .then(response => {       
              console.log(response);     
            })
            .catch(error => {
              console.log(error);
            });
            alert("Thank you, We will contact you as soon as possible! Have a wonderful day!");
            location.reload(true)
          } 
     }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 5px;
}
h4 {
  color: black;
}
p {
  color: black;
  margin-bottom: 0;
  font-size: 20px;
}
.CocolorDark {
  background-color: #008B9A !important;
}
.CocolorLight {
  background-color: #A0D8D5 !important;
}
.CocolorOrangeBG {
  background-color: #F97F2F !important;
}
.CocolorOrange-text {
  color: #F97F2F;
}
.CocolorBtnsDarkOutline {
  border: 2px solid #008B9A !important;
  background-color: transparent !important;
  color: #008B9A !important;
}
.CocolorDark-text {
  color: #008B9A;;
}
.CocolorLight-text {
  color: #A0D8D5;
}
.galleryLinks {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1.5rem;
}
.vertical-align-custom {
  margin-top: 18%;
}
.houses {
  background-color: #F4F5F7 !important;
}
.houseMargins {
  margin-top: 4.5% !important;
}

.heroBackground {
  background-image: linear-gradient(to right, #008B9A, #A0D8D5); 
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: center center;
}
.contactPic {
  border-radius: 5px;
}
@media only screen and (max-width: 991px) {
 .displayforMobile {
    display: all;
  }
  .displayforDesktop {
    display: none
  }
}
@media only screen and (min-width: 991px) {
.displayforDesktop {
    display: all
  }
  .displayforMobile {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
.heroBackground {
    background-image: linear-gradient( #008B9A, #A0D8D5);
  }
}
@media only screen and (max-width: 767px) {
.vertical-align-custom {
    margin-top: -7%;
  }
}
@media only screen and (max-width: 765px) {
.houseMargins {
    margin-top: -3% !important;
  }
}
@media only screen and (max-width: 480px) {
.houseMargins {
    margin-top: -3% !important;
  }
}
@media only screen and (max-width: 480px) {
.hideMobileEXTRAtext {
    display: none;
  }
}
@media only screen and (max-width: 480px) {
.vertical-align-custom {
    margin-top: -15%;
  }
}
@media only screen and (max-width: 340px) {
.vertical-align-custom {
    margin-top: -25%;
  }
}
@media only screen and (max-width: 800px) {
.hideForMobile {
   display: none;
  }
}
</style>

