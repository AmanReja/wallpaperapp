import React from "react";
import { jsPDF } from "jspdf";
import vd2 from "../assets/Videos/vd2.mp4";
import vd3 from "../assets/Videos/vd3.mp4";
import vd4 from "../assets/Videos/vd4.mp4";
import vd5 from "../assets/Videos/vd5.mp4";
import vd6 from "../assets/Videos/vd6.mp4";
import vd7 from "../assets/Videos/vd7.mp4";
import "./Wallpapers.css";

function Wallpapers() {
  const cards = [
    { name: "Spiderman", img: vd2, price: 10, rat: 3 },
    { name: "nfs", img: vd3, price: 20, rat: 4 },
    { name: "luffy", img: vd4, price: 15, rat: 5 },
    { name: "God of War", img: vd5, price: 20, rat: 4.5 },
    { name: "Inosuker", img: vd6, price: 9, rat: 3.2 },
    { name: "Muichiro", img: vd7, price: 11, rat: 2.8 }
  ];

  const handleDownloadReceipt = (item) => {
    // Generate random order ID on button click
    const random = Math.floor(Math.random() * 1000000000);

    // Initialize jsPDF
    const doc = new jsPDF();

    // Add content to PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Purchase Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Item: ${item.name}`, 20, 30);
    doc.text(`Price: $${item.price}`, 20, 40);
    doc.text(`Video Source: ${item.img}`, 20, 50);

    // Add current date
    const date = new Date().toLocaleString();
    doc.text(`Date: ${date}`, 20, 60);

    // Add order ID and download video link
    doc.text(`Order ID: FN${random}`, 20, 70);
    doc.text(`created at: ${date}`, 20, 90);
    doc.text(`Download Video: ${item.img}`, 20, 80);

    // Save the PDF
    doc.save(`${item.name}_receipt.pdf`);
  };

  return (
    <div
      id="pl"
      className="items-container flex flex-wrap items-center justify-center gap-[30px]"
    >
      {cards.map((item) => (
        <div
          key={item.name}
          className="blackf w-full max-w-sm border border-gray-200 rounded-lg shadow"
        >
          <a href="#">
            <video
              autoPlay
              loop
              muted
              className="p-8 px-5 rounded-sm object-cover"
              alt="product image"
            >
              <source src={item.img} type="video/mp4" />
            </video>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl uppercase font-semibold tracking-tight">
                {item.name}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {/* Add star icons here for rating */}
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                {/* Repeat above for more stars */}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {item.rat}
              </span>
            </div>
            <div className="flex items-center gap-4 justify-between">
              <span className="text-3xl font-bold">${item.price}</span>
              <a
                download={item.img}
                href={item.img}
                onClick={() => handleDownloadReceipt(item)}
                className="text-white cursor-pointer bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Download Receipt
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wallpapers;
