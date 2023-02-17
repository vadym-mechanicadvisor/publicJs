/* eslint-disable */

const getTemplate = (values) => `
        <div class="marw-logo" style="background: #ffffff no-repeat center/contain url(${values.shopLogoURL}); background-origin: content-box;"></div>
<div class="marw-container">
  <div class="marw-name">${values.shopName}</div>
  <div class="marw-address">${values.shopAddress}<br/>${values.shopTN}</div>
  <div class="marw-card">
    <div class="marw-title">Rate Your Recent Experience</div>
    <div class="marw-description">Thank you for choosing ${values.shopName}.<br/>If you have any questions or concerns, please do not hesitate to contact us.</div>
    <div class="marw-stars">
      <div class="marw-star1">
        <a href="${values.ratingUrl1}" target="_blank">
          <img class="marw-star-default" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star0.png">
          <img class="marw-star-colored" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star1.png">
        </a>
      </div>
      <div class="marw-star2">
        <a href="${values.ratingUrl2}" target="_blank">
          <img class="marw-star-default" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star0.png">
          <img class="marw-star-colored" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star2.png">
        </a>
      </div>
      <div class="marw-star3">
        <a href="${values.ratingUrl3}" target="_blank">
          <img class="marw-star-default" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star0.png">
          <img class="marw-star-colored" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star3.png">
        </a>
      </div>
      <div class="marw-star4">
        <a href="${values.ratingUrl4}" target="_blank">
          <img class="marw-star-default" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star0.png">
          <img class="marw-star-colored" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star4.png">
        </a>
      </div>
      <div class="marw-star5">
        <a href="${values.ratingUrl5}" target="_blank">
          <img class="marw-star-default" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star0.png">
          <img class="marw-star-colored" width="36px" height="36px" src="https://signature-icons-ma.s3.amazonaws.com/star5.png">
        </a>
      </div>
      <div class="marw-stars-text">
        <div class="marw-stars-text0">No Rating</div>
        <div class="marw-stars-text1">Poor</div>
        <div class="marw-stars-text2">Below Average</div>
        <div class="marw-stars-text3">Average</div>
        <div class="marw-stars-text4">Good</div>
        <div class="marw-stars-text5">Excellent</div>
      </div>
    </div>
  </div>
</div>

        `;

unlayer.registerTool({
  name: "my_tool",
  label: "My Tool",
  icon: "fa-smile",
  supportedDisplayModes: ["web", "email"],
  options: {
    general: {
      title: "General",
      position: 1,
      options: {
        shopTN: {
          label: "Shop TN",
          widget: "text",
          defaultValue: "{locationPhone.txt}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        shopName: {
          label: "Shop Name",
          widget: "text",
          defaultValue: "{locationName.txt}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        ratingUrl1: {
          label: "1 star URL",
          widget: "text",
          defaultValue: "{mechanicAdvisorReviewLink.url}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        ratingUrl2: {
          label: "2 stars URL",
          widget: "text",
          defaultValue: "{mechanicAdvisorReviewLink.url}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        ratingUrl3: {
          label: "3 stars URL",
          widget: "text",
          defaultValue: "{mechanicAdvisorReviewLink.url}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        ratingUrl4: {
          label: "4 stars URL",
          widget: "text",
          defaultValue: "{googleReviewLink.url}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        ratingUrl5: {
          label: "5 stars URL",
          widget: "text",
          defaultValue: "{googleReviewLink.url}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        shopAddress: {
          label: "Shop Address",
          widget: "text",
          defaultValue: "{locationAddress1.txt}, {locationAddress2.txt}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
        shopLogoURL: {
          label: "Shop Logo URL",
          widget: "text",
          defaultValue: "{locationLogo.image}",
          defaultValueType: {
            label: "String",
            value: "string",
          },
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return getTemplate(values);
      },
    }),
    exporters: {
      web: function (values) {
        return getTemplate(values);
      },
      email: function (values) {
        return getTemplate(values);
      },
    },
    head: {
      css: function (values) {
        return `
        .marw-logo {
  margin: 0 auto 20px;
  width: 144px;
  height: 144px;
  border-radius: 30px 30px;
  padding: 10px;
}

.marw-container {
  border-radius: 30px;
  background-color: #ffffff;
  padding: 30px 20px 20px;
}

.marw-name {
  color: #191919;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.marw-address {
  margin-top: 20px;
  color: #747a8b;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}

.marw-card {
  margin-top: 40px;
  padding: 40px 0;
  background-color: #f6f9fe;
  border-radius: 20px;
}

.marw-title{
  color: #191919;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
  padding: 0 30px;
}

.marw-description {
  margin-top: 22px;
  color: #747a8b;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  padding: 0 30px;
}

.marw-stars {
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.marw-star1,
.marw-star2,
.marw-star3,
.marw-star4,
.marw-star5 {
  display: inline-block;
  margin: 0 8px;
  cursor: pointer;
}

.marw-star-colored,
.marw-stars > div:hover .marw-star-default {
  display: none;
}
.marw-stars > div:hover .marw-star-colored {
  display: block;
}

.marw-star1:hover ~ .marw-stars-text > .marw-stars-text0,
.marw-star2:hover ~ .marw-stars-text > .marw-stars-text0,
.marw-star3:hover ~ .marw-stars-text > .marw-stars-text0,
.marw-star4:hover ~ .marw-stars-text > .marw-stars-text0,
.marw-star5:hover ~ .marw-stars-text > .marw-stars-text0 {
  display: none;
}
.marw-star1:hover ~ .marw-stars-text > .marw-stars-text1,
.marw-star2:hover ~ .marw-stars-text > .marw-stars-text2,
.marw-star3:hover ~ .marw-stars-text > .marw-stars-text3,
.marw-star4:hover ~ .marw-stars-text > .marw-stars-text4,
.marw-star5:hover ~ .marw-stars-text > .marw-stars-text5 {
  display: block;
}

.marw-stars-text {
  width: 100%;
  margin-top: 30px;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.marw-stars-text0 {
  color: #adb1c9;
}

.marw-stars-text1 {
  display: none;
  color: #ff5151;
}

.marw-stars-text2 {
  display: none;
  color: #fb6d03;
}

.marw-stars-text3 {
  display: none;
  color: #f8b131;
}

.marw-stars-text4 {
  display: none;
  color: #79b412;
}

.marw-stars-text5 {
  display: none;
  color: #29c07b;
}

        `;
      },
      js: function (values) {},
    },
  },
  validator(data) {
    return [];
  },
});
