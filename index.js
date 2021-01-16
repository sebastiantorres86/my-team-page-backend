const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(express.static('build'))
app.use(cors());

let info = [
  {
    name: "Bill Mahoney",
    position: "product owner",
    image: "https://i.postimg.cc/nL890NM2/photo1.png",
  },
  {
    name: "Saba Cabrera",
    position: "art director",
    image: "https://i.postimg.cc/SNs9sW-w6/photo2.png",
  },
  {
    name: "Shae Le",
    position: "tech lead",
    image: "https://i.postimg.cc/L6b1ZJpr/photo3.png",
  },
  {
    name: "Skylah Lu",
    position: "ux designer",
    image: "https://i.postimg.cc/13VN0yR4/photo4.png",
  },
  {
    name: "Griff Richards",
    position: "developer",
    image: "https://i.postimg.cc/DZnJKsrb/photo5.png",
  },
  {
    name: "Stan John",
    position: "developer",
    image: "https://i.postimg.cc/PqmpcKwj/photo6.png",
  },
];

app.get("/api/info", (request, response) => {
  response.json(info);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
