import React from "react";
import Image from "next/image";
// import Map from "../components/Map";


const Main = () => {
return (
    <>
        <div className="">
            <h1 className="p-10 mt-12 text-2xl text-pink-500 flex items-center justify-center">Welcome to Success Liabrary</h1>
            <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
                quod? Nisi, eos quibusdam, aliquid laudantium voluptate id ab ullam
                eaque iste qui in tempore dolorem omnis nobis sequi perferendis veniam
                esse eligendi minima! Nemo nihil nam, reiciendis veritatis molestiae
                voluptatum numquam quia mollitia, eaque obcaecati vel corrupti,
                exercitationem unde ipsam qui. Quidem officia officiis repellat
                ratione, incidunt laborum corporis quia deserunt natus molestiae,
                quaerat neque asperiores quisquam laudantium at ducimus voluptates.
                Fuga, distinctio amet voluptatum id, eum animi facere quo ab aperiam
                impedit porro deleniti ratione, vel recusandae saepe itaque? Officia
                iusto nisi repellat facere quod sunt ad nam? Eligendi.
            </p>
          <div>
          <span className="text-red-500 bg-yellow-300 flex items-center justify-center">Here is beautiful environment</span>
          </div>

           <div className=" mt-5 flex  justify-center  ">
           <div className="ml-10">
           <Image
                src="/top.png"
                width={600}
                height={100}
                alt="Picture of the author"
            />
           </div>
           <div className="ml-5 ">
           <Image
                src="/mid.png"
                width={600}
                height={100}
                alt="Picture of the author"
            />
           </div>
           </div>
           {/* <div>
           <Map />
           </div> */}
        </div>
    </>
);
};

export default Main;
