// console.log(import.meta.env.MODE);
// const devEnv = import.meta.env.MODE === 'development';

const getImageUrl = (name: string) => {
  return new URL(name, import.meta.url).href;
};

// 产品列表信息
export const PRODUCT_LIST = {
  antminer: [
    {
      id: 1,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,  // 或者使用绝对路径
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200000588.556',
    },
    {
      id: 2,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 3,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 4,
      img1: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      img2: '',
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 5,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 6,
      img1: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 7,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 8,
      img1: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 9,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: '',
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
    {
      id: 10,
      img1: new URL('./imgs/antminer/antminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/antminer/antminer-test2.png', import.meta.url).href,
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
  ],
  avalon: [
    {
      id: 1,
      img1: new URL('./imgs/avalon/avalon-01.png', import.meta.url).href,
      img2: '',
      title: 'Canaan Avalon 1246 83TH BTC Bitcoin Miner Asic Miner 3155W Crypto Mining Machine',
      price: '100',
      originalcost: '200',
    },
    {
      id: 2,
      img1: new URL('./imgs/avalon/avalon-01.png', import.meta.url).href,
      img2: '',
      title: 'Canaan Avalon 1166pro 72TH Asic Miner, 3276W Bitcoin Miner Crypto Mining Machine',
      price: '100',
      originalcost: '200',
    },
    {
      id: 3,
      img1: new URL('./imgs/avalon/avalon-01.png', import.meta.url).href,
      img2: '',
      title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
      price: '100',
      originalcost: '200',
    },
  ],
  whatsminer: [
    {
      id: 1,
      img1: new URL('./imgs/whatsminer/whatsminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/whatsminer/whatsminer-test2.png', import.meta.url).href,
      title: 'Microbt Whatsminer M30s 88T 3344W Energy Saving Asic Miner Bitcoin Mining',
      price: '100',
      originalcost: '200',
    },
    {
      id: 2,
      img1: new URL('./imgs/whatsminer/whatsminer-test2.png', import.meta.url).href,
      img2: new URL('./imgs/whatsminer/whatsminer-test1.png', import.meta.url).href,
      title: 'Whatminer M31S+ 82TH 3444W Asic Bitcoin Mining Miners BTC Halve For Sale',
      price: '100',
      originalcost: '200',
    },
    {
      id: 3,
      img1: new URL('./imgs/whatsminer/whatsminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/whatsminer/whatsminer-test2.png', import.meta.url).href,
      title: 'New Bitcoin Miner Microbt Whatsminer M30S++ цена112T Asic Miner BTC Mining',
      price: '100',
      originalcost: '200',
    },
    {
      id: 4,
      img1: new URL('./imgs/whatsminer/whatsminer-test1.png', import.meta.url).href,
      img2: new URL('./imgs/whatsminer/whatsminer-test2.png', import.meta.url).href,
      title: 'Asic Bitcoin Miner Whatsminer M30s 90T 3420w Bitcoin Mining',
      price: '100',
      originalcost: '200',
    },
    {
      id: 5,
      img1: new URL('@/assets/antminer/antminer-test1.png', import.meta.url).href,
      img2: '',
      title: 'Whatminer M30S++ 110TH 3410W Cyypto Bitcoin Miner Asic Miner Mining Miner in Stock',
      price: '100',
      originalcost: '200',
    },
  ],
};

// 产品详情信息
export const PRODUCT_DETAIL = [

];
