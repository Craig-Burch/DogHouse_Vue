<template>
  <section style="background-color: #fff;" class="mb-0" >
  <mdb-container>
    <section class="pb-5 pt-5">
      <h2 class="h1-responsive font-weight-bold text-center my-4 CocolorDark-text">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Please feel free to contact us via our contact form, phone number or email. We look forward to hearing from you and finding out what we can do for you.</p>
      <mdb-row>
        <mdb-col lg="5" class="lg-0 mb-4">
          <mdb-card class="doghouse-contactForm">
            <mdb-card-body>
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
          <div id="map-container" class="rounded z-depth-1-half map-container">
            <img class="contactPic" :src="dog" alt="Contact Us" width="100%" height="100%" frameBorder="0" style="border: 0">
          </div>
          <br/>
           <mdb-row class="text-center">
            <mdb-col md="4">
              <!-- <mdb-btn class="CocolorDark">
                <mdb-icon icon="map-marker"/>
              </mdb-btn> -->
              <p>250 W Ridge Pike</p>
              <p class="mb-md-0">Limerick, PA 19468</p>
            </mdb-col>
            <mdb-col md="4">
              <!-- <mdb-btn class="CocolorDark">
                <mdb-icon  icon="phone"/>
              </mdb-btn> -->
              <p>(610) 409-6444</p>
              <p class="mb-md-0">Tues - Sat, 8:00-4:00</p>
            </mdb-col>
            <mdb-col md="4">
              <!-- <mdb-btn class="CocolorDark">
                <mdb-icon icon="envelope"/>
              </mdb-btn> -->
              <p>DogHouse6444 <br> @Gmail.com</p>
              <!-- <p class="mb-md-0">sale@gmail.com</p> -->
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
   </mdb-container>
  </section>
</template>

<script>
import axios from "axios";
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbBadge, mdbIcon, mdbMask, mdbRow, mdbCol, mdbBtn, mdbTextarea, mdbCard, mdbCardBody, mdbView } from 'mdbvue';
export default {
  name: 'Contact',
  components: {
      mdbContainer,
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
      data: [],
      dog: '../static/contactDog.png'
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
            this.$router.push('/')
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
.contactPic {
  border-radius: 5px;
}
</style>
