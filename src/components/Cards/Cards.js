import React from "react";
import productImage from "../../productImage.png";
import "./Card.css";

const Cards = () => {
  return (
    <>
      <div className='container-cards'>
        {dataProductDummy.map((i, e) => (
          <div key={e} className='cards'>
            <img className='card-image' src={productImage} alt='' />
            <div className='card-text'>
              <div className='text-title'>ANAK-ANAK MANTEL ANAK JAKET MUSIM SEMI WANITA ...</div>
              <div className='text-price'>Rp.{i.price}</div>
              <div className='btn-delete'>Delete</div>
            </div>
          </div>
        ))}

        {/* <div className='cards'>
        <img className='card-image' src={productImage} alt='' />
        <div className='card-text'>
          <div className='text-title'>ANAK-ANAK MANTEL ANAK JAKET MUSIM SEMI WANITA ...</div>
          <div className='text-price'>Rp. 100.000</div>
          <div className='btn-delete'>Delete</div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Cards;

const dataProductDummy = [
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/927/348/15481843729_1576178539.search.jpg",
    price: 188000,
    id_product: "617704792459",
    productName: "抖音直播厂家手表女2021年新款正品时尚潮流镶钻钢带表微商",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01KbMOIC1kQ73tovf9W_!!2208149694677-0-cib.jpg",
    price: 172725,
    id_product: "638775004783",
    productName: "休闲时尚套装女春秋季减龄洋气韩版运动卫衣网红炸街工装两件套潮",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01903DXY1M9a12pXlgi_!!2212354321392-0-cib.jpg",
    price: 75200,
    id_product: "651377153201",
    productName: "法茜娜2020新款抖音网红简约手表手链两件套休闲女士手表",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN019SQ4Qw1M9a1NUTImA_!!2212354321392-0-cib.jpg",
    price: 211500,
    id_product: "652206774367",
    productName: "LUSHIKA心月系列女士三件套盒抖音快手直播平台潮流时尚网红女表",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/927/348/15481843729_1576178539.jpg",
    price: 188000,
    id_product: "617704792459",
    productName: "抖音直播厂家手表女2021年新款正品时尚潮流镶钻钢带表微商",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/999/140/19269041999_1586726378.jpg",
    price: 23500,
    id_product: "624001924483",
    productName: "外贸跨境爆款摩登太阳镜 欧美街拍ins网红模特方形墨镜女1735-1",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01dmPP2s1sPfgDivEPh_!!2213070075759-0-cib.jpg",
    price: 72850,
    id_product: "668865275051",
    productName: "包包女包2022新款流行高级质感百搭时尚斜挎包洋气可爱迷你手提包",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01tO0rnT1NiDYJbERzo_!!965421603-0-cib.jpg",
    price: 11162.5,
    id_product: "638731521963",
    productName: "杰特麦迪森时尚全框架米钉款太阳镜潮人街拍墨镜复古小方框太阳镜",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/459/022/19181220954_1798939722.search.jpg",
    price: 135830,
    id_product: "610196881884",
    productName: "美规现货早餐烤吐司机轻食跨境面包机美标家用110V多士炉烤面包机",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/371/422/16135224173_1977739101.jpg",
    price: 157450,
    id_product: "617237657989",
    productName: "美菱电饭煲智能不粘锅厂家批发迷你小型多功能电饭锅家用一件代发",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01l0TM1R2Lu0m8uYQ74_!!2212510089751-0-cib.jpg",
    price: 108100,
    id_product: "668783679892",
    productName: "欧名发廊吹风机家用大功率理发店负离子胶原蛋白电吹风筒冷热风",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2018/987/387/8742783789_109817239.jpg",
    price: 256150,
    id_product: "545124525531",
    productName: "瑞沃酒店专用商用挂墙壁挂式电吹风机卫生间浴室家用干发器吹风筒",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01f3ncBa1u2t832wWjp_!!1039425980-0-cib.jpg",
    price: 70265,
    id_product: "535512292769",
    productName: "酒店客房1.2L电热水壶 双层宾馆烧水壶 304不锈钢开水壶礼品批发",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN015F53zS1jLFGRFOLmm_!!967014531-0-cib.jpg",
    price: 324300,
    id_product: "541756090301",
    productName: "奥力奇宾馆浴室壁挂式吹风筒干发器酒店大功率恒温插座一体电吹风",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/2020/089/187/20910781980_92865746.jpg",
    price: 131600,
    id_product: "1073585304",
    productName: "批发600W多功能电吹风机 6合1卷发器棒 电动美发梳子套装冷热风",
    type: "1688",
  },
  {
    image: "https://cbu01.alicdn.com/img/ibank/O1CN012iJWnz1uWevyKmcdx_!!2211353596045-0-cib.jpg",
    price: 16426.5,
    id_product: "645609386394",
    productName: "厂家直销大功率吹风机蓝光负离子电吹风发廊冷热吹风筒礼品批发",
    type: "1688",
  },
];
