interface IDataBase {
  id: number;
  title: string;
  phoneNumber: string;
  callNumber: string;
}

let database: IDataBase[] = [
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
    title: "مدیرفروش شرق استان :",
    phoneNumber: "09937340178",
    callNumber: "9937340178",
  },
  {
    id: 5,
    title: "مدیرفروش گلستان:",
    phoneNumber: "09937340177",
    callNumber: "9937340177",
  },
  {
    id: 6,
    title: "مدیریت - حسین غنودی:",
    phoneNumber: "09113544161",
    callNumber: "9113544161",
  },
];

const $ = document;
const dataBox = $.querySelector(".dataContainer") as HTMLDivElement;

let counter: number = 0;

const addDataToDom = (data: IDataBase) => {
  dataBox.insertAdjacentHTML(
    "beforeend",
    `
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
    `
  );
};

window.addEventListener("DOMContentLoaded", () => {
  dataBox.innerHTML = "";
  database.forEach((data) => {
    counter = counter + 100;
    addDataToDom(data);
  });
});
