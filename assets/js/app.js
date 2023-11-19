let database = [
    {
        id: 1,
        title: " خدمات و پشتیبانی:",
        phoneNumber: "011-33377475",
        callNumber: "1133377475",
    },
    {
        id: 2,
        title: " واحد فروش :",
        phoneNumber: "011-33377465",
        callNumber: "01133377465",
    },
    {
        id: 3,
        title: "حسابداری:",
        phoneNumber: "011-33357488",
        callNumber: "1133357488",
    },
    {
        id: 4,
        title: "مدیریت - حسین غنودی:",
        phoneNumber: "09113544161",
        callNumber: "9113544161",
    },
    {
        id: 5,
        title: "مدیرفروش آقای محمودی:",
        phoneNumber: "09937340178",
        callNumber: "9937340178",
    },
    {
        id: 6,
        title: "مدیرفروش آقای رخشانیان:",
        phoneNumber: "09937340177",
        callNumber: "9937340177",
    },
];
const $ = document;
const dataBox = $.querySelector(".dataContainer");
let counter = 0;
const addDataToDom = (data) => {
    dataBox.insertAdjacentHTML("beforeend", `
    <div class="text-white d-flex flex-column mb-3" data-aos="fade-left" data-aos-delay="${counter}">
    <span class="fs-5">
      <i class="fa fa-phone me-2 vidration"></i>
      <span>${data.title}</span>
    </span>
    <span class="d-flex flex-column">
      <a
        class="text-white text-decoration-none ms-3"
        href="tel:+98${data.callNumber}"
        >${data.phoneNumber}</a
      >
    </span>
  </div>
    `);
};
window.addEventListener("DOMContentLoaded", () => {
    dataBox.innerHTML = "";
    database.forEach((data) => {
        counter = counter + 100;
        addDataToDom(data);
    });
});
//# sourceMappingURL=app.js.map