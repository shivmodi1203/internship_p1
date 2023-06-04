import React from "react";
import Image from "next/image";

const Task = () => {
  return (
    <div className="gridBox grid grid-cols-1 gap-10">
      <div className="header">
        <div className="navbar">
          <div className="left">
            <h1>W.</h1>
          </div>
          <div className="right gap-6">
            <span>Home</span>
            <span>New</span>
            <span>Popular</span>
            <span>Tranding</span>
            <span>Catagories</span>
          </div>
        </div>
      </div>
      <div className="middle_container gap-10">
        <div className="right_container">
          <div className="img-1 bg-red-300 relative p-4">
            <Image src="/images/image-web-3-desktop.jpg" alt="image-1" fill />
          </div>

          <div className="box-1 p-4">
            <span>The Bright Future of Web 3.0?</span>
          </div>
          <div className="box-2 grid p-4">
            <span className="text-sm">
              We dive into the next evolution of the web that claims to put the
              power of the plateforms back into the hand of the pople. But is it
              really fulfilling its promise ?
            </span>
            <button type="button" className="button w-48 h-12">
              READ MORE
            </button>
          </div>
        </div>

        <div className="img-2 grid p-5 text-white p-4">
          <div>
            <h1 className="text-yellow-600 font-bold text-3xl">New</h1>
          </div>
          <div className="grid">
            <strong>Hydrogen vs Electric Cars</strong>
            <small>Will hydrogen-fueled cars ever catch up EVs</small>
          </div>
          <span className="line"></span>
          <div className="grid">
            <strong>The Downsides of AI Artistry</strong>
            <small>
              What are the possible adverse effects of on-demand AI image
              generation ?
            </small>
          </div>
          <span className="line"></span>
          <div className="grid">
            <strong>Is VC Funding Drying Up?</strong>
            <small>
              Private funding by VC firms is down 50% YOY.We take a look at what
              that means.
            </small>
          </div>
        </div>
      </div>
      <div>
        <div className="footer grid grid-cols-1 md:grid-cols-3">
          <div className="box-3 gap-3 p-4">
            <div className="relative">
              <Image src="/images/image-retro.jpg" alt="image" fill />
            </div>
            <div className="grid">
              <h1 className="text-3xl font-extrabold text-gray-300">01</h1>
              <strong>Reviving Retro PCs</strong>
              <small className="text-[15px] text-gray-300">
                What happens when old PCs are given modern updates?
              </small>
            </div>
          </div>
          <div className="box-3 gap-3 p-4">
            <div className="relative">
              <Image src="/images/image-laptop.jpg" alt="image" fill />
            </div>
            <div className="grid">
              <h1 className="text-3xl font-extrabold text-gray-300">02</h1>
              <strong>Top 10 Laptops of 2022</strong>
              <small className="text-[15px] text-gray-300">
                Our best picks for various needs and budgets.
              </small>
            </div>
          </div>
          <div className="box-3 gap-3 p-4">
            <div className="relative">
              <Image src="/images/image-gaming.jpg" alt="image" fill />
            </div>
            <div className="grid">
              <h1 className="text-3xl font-extrabold text-gray-300">03</h1>
              <strong>The Growth of Gaming</strong>
              <small className="text-[15px] text-gray-300">
                How the pandemic has sparked fresh opportunities.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
