<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div id="Form">
    <div id="Form2" cf-context></div>
  </div>
</template>

<script>
import db from '../assets/js/firebaseInit'
let chatbotMob = () => import('~/assets/chatbotMob.css')
export default {
  data() {
    return {
      chatbotMob: {
        mode: 'closed'
      }
    }
  },
  mounted() {
    this.setupForm()
  },
  methods: {
    setupForm() {
      const formFields = [
        {
          'type': 'text',
          "tag": "cf-robot-message",
          "cf-questions": "Book a call now to unravel the quality strengths of your business - and how to enhance them - with Marta Fattori",
          'cf-input-placeholder': '  '
        },
        {
          'tag': 'input',
          'type': 'text',
          'name': 'firstname',
          'required': true,
          'cf-error': 'Text is wrong |Input is not right',
          'cf-questions': 'What is your first name?',
          'cf-input-placeholder': '   Your name goes here'
        },
        {
          'tag': 'input',
          'type': 'text',
          'name': 'lastname',
          'required': true,
          'cf-error': 'Text is wrong |Input is not right',
          'cf-questions': 'Great to meet you, {previous-answer}! What is your last name?',
          'cf-input-placeholder': '   Your last name here'
        },
        {
          'tag': 'input',
          'type': 'text',
          'name': 'email',
          'required': true,
          'cf-error': 'Text is wrong |Input is not right',
          'cf-questions': 'What is your email?',
          'cf-input-placeholder': '   Your email here'
        }
      ];

      const { ConversationalForm } = require('conversational-form');

      this.cf = ConversationalForm.startTheConversation({
        dictionaryData: {
            "input-no-filter": "Sorry, not results for {input-value}",
        },
        options: {
          formEl: document.getElementById('Form2'),
          context: document.getElementById('Form'),
          theme: 'chatbotMob',
          userImage: require('~/assets/img/avatar.jpg?original&format=webp'),
          robotImage: require('~/assets/img/image1.jpg?original&format=webp'),
          hideUserInputOnNoneTextInput: true,
          showProgressBar: true,
          submitCallback: this.submitCallback,
          preventAutoFocus: true,
        },
        tags: formFields
      });
      this.$el.appendChild(this.cf.el);
    },
    submitCallback: async function() {
      const contactData = this.cf.getFormData(true)
      // Add a new document in collection "contacts"
      db.firestore().collection("contacts").add({
        firstname: contactData.firstname,
        lastname: contactData.lastname,
        email: contactData.email,
        createdAt: new Date()
      })
      .then(function(res) {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      this.cf.addRobotChatResponse("You are done. We will review your application and be in touch soon.");
      this.cf.addUserChatResponse("Bye.");
      setTimeout(() => {
        window.ConversationalForm.remove();
      },6000),
      clearTimeout(() => {
        window.ConversationalForm.remove();
      },6000)
    },
    render() {
      return (
        <div>
          <div
            ref={ref => this.elem = ref}
          />
        </div>
      );
    }
  }
}
</script>

<style scoped>
#Form {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 360px !important;
  max-height: 640px !important;
  width: 100% !important;
  color: #D25593;
}
#Form {
  max-width: 100% !important;
  top: auto !important;
  position: relative;
}
#Form2 {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
}
</style>
