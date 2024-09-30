import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private router :Router){
    
  }

  public carList : any[]=[
    {
      manufacturer: ' Mercedes',
      model : 'cls amg', 
      year : 2021,
      price: '45000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://i.pinimg.com/originals/e8/a2/89/e8a28905c33066de133d2cf850823078.jpg',
      imgUrl2 : 'https://i.pinimg.com/236x/d6/97/96/d697965faf7d575deb70a909cf07ebf4.jpg',
      imgUrl3 : 'https://i.pinimg.com/236x/ae/f9/82/aef9823cb5684ea2144b475450099325.jpg',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.AQiZeJOuOrWWfSJ94WG64QHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Mercedes',
      model : 's class', 
      year : 2021,
      price: '83000$',
      engine : 4.0  ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://i.pinimg.com/236x/5f/90/b8/5f90b8f101e10813f1ac9e604f9046a5.jpg',
      imgUrl2 : 'https://i.pinimg.com/236x/36/be/d8/36bed8a34380f311187bea9f2861c6f7.jpg',
      imgUrl3 : 'https://i.pinimg.com/236x/eb/1b/49/eb1b4968ee055b4f872c5dfff0a2e00a.jpg',
      imgUrl4 : 'https://i.pinimg.com/originals/ec/57/95/ec5795d9992df4460ad3f7a9e2f3a1cc.jpg',
    },
    {
      manufacturer: 'Mercedes',
      model : 'G63 amg', 
      year : 2022,
      price: '220000$',
      engine : '4.0 turbo' ,
      cylinders : 8 ,
      transmission : 'Tiptronic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.RJZusMgRUL8vlx6tac0wrQHaEK&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.BM7tdmO0ch-OkN8JdmHMmAHaEV&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.erKxsQLqvWBCT-G8IcdzzgHaEV&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.1OvwRN4K9Bd5DzcVTfgXVwAAAA&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'BMW',
      model : 'M3 Competition xDrive', 
      year : 2022,
      price: '93500$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'silver',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.kvJdFAdmHGa0UutV5aW13AHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.xpSpa1lWLgvNgkTGTQ4BwgHaEc&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.P-TPHPoOUCjk7pyZ19MCJgHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.FU8FlkbgBKSiEMT2q4E0GgHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'BMW',
      model : 'X7', 
      year : 2023,
      price: '108000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'steel black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/04/bmw-x7-1-jpg-6419cf05da71d-jpg.webp?w=1920&crop=0,9,100,89',
      imgUrl2 : 'https://di-uploads-pod7.dealerinspire.com/sharpebmw/uploads/2023/06/X7_1-1.png',
      imgUrl3 : 'https://di-uploads-pod20.dealerinspire.com/pacificbmw/uploads/2022/04/x7-square.jpg',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.Fv3OncorUZsgd4-OnnIoWgHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'BMW',
      model : 'M4 xDrive', 
      year : 2022,
      price: '115000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'steel green',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.NBCkzV8GiKKfMepB_vv-qAAAAA&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.lHA6bUVfRSd3BSENbXwzcQHaEK&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.Z1ZSYufhjjGuXxSki6JkWgHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.-ltVIojj_dEWSoxmAS4XeAHaEw&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'BMW',
      model : 'E34 M540', 
      year : 1993,
      price: 'priceless',
      engine : 4.0 ,
      cylinders : 8 ,
      transmission : 'Manual',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.PywHKBmgStBD6uA6EWqyRwHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.tlath5yn62t9uWy6z-p97wHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.vsatb_SJ7psh9YhjE4bC-gHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.m4tLlpw2nBi02L5FMZzRzwHaFd&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Porsche',
      model : 'Cayenne', 
      year : 2022,
      price: '118000$',
      engine : '4.0 turbo' ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'silver',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.WfV8277E83KF2NBJpZp_PQAAAA&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.QtOW61mLqfOWJPMCrNOD6QHaDr&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.o8OroEUlI1az0L0TY4KU5gHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.zAg2SqdoGxz0_LJQVVVJ-AHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Porsche',
      model : 'panamera', 
      year : 2014,
      price: '26000$',
      engine : 3.6 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.SutzRp9xOQMR4VU0-JegNAHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.Wq93KwONf1untD7XQJv24QHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.OF9MvrQ6Oxn9jno_f2t14gHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.RM_LouwSwtNqGipPsvrr4wHaE6&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Porsche',
      model : 911, 
      year : 2012,
      price: '54000$',
      engine : 3.4 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'blue',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.JDe3UeUVbXWWWCrZAQZalQHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.PMY1tF5MV_LM6XPMXiDe9wAAAA&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.KwnL75HIepFBP3HKYy1ZbwHaE6&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.TT0JYhYe-8VB8l7hayEWogHaD2&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Ferrari',
      model : 'f8 tributo', 
      year : 2021,
      price: '269000$',
      engine : '3.9 turbo' ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.bwmYFeA_lty3wGCtFAAN4QHaEK&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.kk9gpjPjw11TktQSknBLIQHaEK&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.iWtr99UZh1s0k6XxysE8EQHaEo&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.qiEgD73vATKggJ229DVikwHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Ferrari',
      model : 'california t', 
      year : 2017,
      price: '155000$',
      engine : '3.9 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.znjYTqucnv907QF1NdHZ8wHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.VX0tIxiMsI3_FdBtm69QqgHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.Yei9VklPemq1UG52N-C-jgHaE7&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.yEFgx75d8pByFEqDmdFQLAHaFP&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Ferrari',
      model : 'enzo', 
      year : 2021,
      price: '85000$',
      engine : 6.2  ,
      cylinders : 12 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.snTzXNRheHoc64G7BWpjDAHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.iWmZgfRLNlwDbzHN9cbs0AHaD5&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.SkIyGN9yFmeajaKTOm2i2AHaFF&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.z8w5zC3q0MEps5KiYCwvqAHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Audi',
      model : 'RS7', 
      year : 2018,
      price: '43000$',
      engine : 4.0 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'blue',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.esQtKpqB7d4l1xSzaTM2UgHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.WWlCBfiiiXPoHa46H0CbkAHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.tg-78rCCQoCSAXqUHyzmrQHaE8&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.PHM_9Ogmujdb3DHGREk6-wHaE7&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Audi',
      model : 'A5', 
      year : 2017,
      price: '22000$',
      engine : '2.0 turbo' ,
      cylinders : 4 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.aMJo-NMaaFyXXAdi9UPYrQHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.3A7ljv-coGFNjcxbnGq6gQHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.OMikUq-toj2n0P7ii-VSvAHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.AtG1bIbghi19l0rqDE5QrgHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Audi',
      model : 'Q7', 
      year : 2021,
      price: '50000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.u3xqhtCtsHCTuuPWT4wY5AHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse2.mm.bing.net/th?id=OIP.lzXfee5P0-EGJquwwVCZYQHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.s2cnAn80gDG_xEsJiY1vxAHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.VwnHWkHWQF5lerOSRLIJvQHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Lexus',
      model : 'LS', 
      year : 2018,
      price: '39000$',
      engine : 3.4 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'brown',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.LNN3Ev1c2uXM6G2FR68qQgHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.q09-nfeLzAqGOvUgQj2fWAHaE7&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.DzGYF5aolfQkDehHSumhLgHaE7&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.RWzJ9tOi7F0Rf4NS_riI1AHaE7&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Lexus',
      model : 'LX', 
      year : 2018,
      price: '60000$',
      engine : 4.5 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.MJGYh6ZQw1oXljZcElOE-QHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.gUAEaatHGbe2mEbJ32pRUQHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.CoehLWj7w3ala3S-VnqpWAHaFj&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.qGjwBpce2hyTiPSqDQ5-IwHaFj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Lexus',
      model : 'RX', 
      year : 2022,
      price: '52000$',
      engine : 3.5 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'blue',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.s7SjXcTBgCyWIvN7s2GycAHaFj&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse2.mm.bing.net/th?id=OIP.0Wnnt6kEoJaSo5C5rkJmYwHaFZ&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.gAddXHykT5rxtbVdTrVvnQHaFj&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.Eh5354SZVvHKBCM3EA_KdAHaE6&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Toyota',
      model : 'camry', 
      year : 2020,
      price: '16200$',
      engine : 2.5 ,
      cylinders : 4 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.dN1O2xHDiVtragQzImZc_AHaEK&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.ssHcwOYnfKOQGC8t7EgdKQAAAA&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.Xu7pP9E_SwLla5qnkuDUTAHaEQ&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.ySXz2Mr7B6qleU7B5tMa8QHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Toyota',
      model : 'RAV 4', 
      year : 2022,
      price: '22000$',
      engine : 2.4 ,
      cylinders : 4 ,
      transmission : 'Automatic',
      color : 'silver',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.4221sQQd2Jn3V-ElUwu0IgHaDf&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.Qa2aWMCImDjD3uKB2fEX6QHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.h5-ONUkzJrpQiuxdO2TYDgHaFj&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.bSllyVNxupbicGr0Kus8AwHaFj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Toyota',
      model : 'land cruiser', 
      year : 2015,
      price: '42000$',
      engine : 4.0 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.IrlwK9FjNpeDYW2l01waZAHaEL&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.nWcYp-qTCqE1s6ShRasKHQHaFj&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.6fSr82r-Nn0yMLCphFALrwHaE8&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.GGGPtIp9XpLwVBo2fT8j5AHaFj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Toyota',
      model : 'supra', 
      year : 1997,
      price: '66000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Manual',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.AAF2FwJEex--EyVrc3z1xgAAAA&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.Ch_aLiNE0IBtn0OLG8Sg4QHaEK&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.eM107YNkUQ8u8LL85aW8gAHaE8&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.ubjZ2mQUnSW5WLcWBezYmwHaEK&pid=Api&P=0&h=220'
    },
    {
      manufacturer: 'Ford',
      model : 'mustang', 
      year : 1969,
      price: '45000$',
      engine : 5.0 ,
      cylinders : 8 ,
      transmission : 'Manual',
      color : 'blue',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.Mlzjuei_x8I2hLaL-hFrQwHaFj&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.MwDPIof3FoS3EyNOz8r4ZwHaE7&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.CqxvVvwGJMJ9_j5Uj06KsgAAAA&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.SIrUF30W0WBsolqZtzVRiwHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Ford',
      model : 'escape', 
      year : 2011,
      price: '11000$',
      engine : 3.0  ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'dark green',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.LlS_khIQv0X3r1gbXqhrOgHaFj&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.dE0juwEeigDRkbsrFPGnFwAAAA&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.T8-nGxuQwsXr5hej-_QY9wHaFj&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.fd-GZL5hr6DpU4vqE-ePCQHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Ford',
      model : 'mustang', 
      year : 2015,
      price: '19500$',
      engine : 5.0 ,
      cylinders : 8 ,
      transmission : 'Manual',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.u7cI9virFKDfkDVJy_h88QAAAA&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.tT99QLFPgk7QVI73mkJoggHaE7&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.Zj1pc1lgRQO1v6QiZrJoyQHaE7&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.nxSpg8o5KHZHMAUQmujRWgAAAA&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Dodge',
      model : 'challenger', 
      year : 2018,
      price: '14000$',
      engine : 3.6 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'orange',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.g2hQjuAZDWMfqiJfBz0qzwHaE7&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.-_tkJ2oseK7BGnVUGuLaEQHaE7&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.PJ9_lwXOytpTQyocNBuePQHaEv&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.tC9orWuHfNxNTEEG1ZZGCQHaEP&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Dodge',
      model : 'durango', 
      year : 2018,
      price: '28000$',
      engine : 5.7 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.lxlrEU1adunnl9z7JHG59AHaEh&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.G0VxFL4RYfGAIE4L7E5naAHaFQ&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.pxv7U2__IY5tgkkeNC9BdwAAAA&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.9_JNiP0L5_GS7z5Q-l2ASQHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Dodge',
      model : 'charger scatpack', 
      year : 2020,
      price: '40000$',
      engine : '6.4 turbo' ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.y8k6O7wtRQVHDnZ3ZeND7wHaEo&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.K0ZuO2vg4haRsjTsmIoilAHaEK&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.M_xJ9RhBKV6FyDppf6avswHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.A1G2xMlBVy8uqREJ5aqN9AHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Bentley',
      model : 'continental', 
      year : 2022,
      price: '240000$',
      engine : 6.0 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'gold',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.CGCISLiMNZjqMqVMYQcOMwHaE7&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.CSwERITwAZKri7_ATPBRlwHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.Qb4oxN0xvt1CD_c_GKSDSAHaD4&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse4.mm.bing.net/th?id=OIP.XzXHMqrTtCopy3Zf6460ZQHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Bentley',
      model : 'brooklands', 
      year : 2008,
      price: '220000$',
      engine : '6.8 turbo' ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.df-L0Fn_MUXjn333zyX0-AHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.MlOSkoyF-7HvUR6CW4hD0AHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse4.mm.bing.net/th?id=OIP.xcuJcpY8wQw2P2bWmLkOiAHaEj&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.6ALb6_j7BOcevochQKNwGwHaEG&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Maserati',
      model : 'ghibli', 
      year : 2017,
      price: '20000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'blue',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse4.mm.bing.net/th?id=OIP.rpN44mcXflEc0hn3yKFEeQHaE7&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse4.mm.bing.net/th?id=OIP.upnHcJYvZ4d6r5d8ooGnagAAAA&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.pV8hyBYbCV6oQSmE-oi1xAHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.2ChGyLOND_GjAYRHtxOsdwHaEK&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Maserati',
      model : 'quattroporte', 
      year : 2014,
      price: '30000$',
      engine : 3.8 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'skin color',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.HpHym-ulvKLGIxOrE6EyKgHaEo&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse3.mm.bing.net/th?id=OIP.DE_Lltolw4eK3SPuEeIiEwHaEo&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.Y_cq3njjfB1Qjh6ikG83IAHaE6&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.TXfpMS_DUUperVJIhCtMvQHaEj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Maserati',
      model : 'levante s', 
      year : 2017,
      price: '30000$',
      engine : '3.0 turbo' ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.sficW0Uf9lt1bsOTxxnpJQHaEV&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse2.mm.bing.net/th?id=OIP.kr3HfFOwUAvmBGhDSmd0LwHaE6&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse3.mm.bing.net/th?id=OIP.cAm2N9VrXTrgygb3pwEtvQHaFh&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.l0S0DMN2hqi-dsxvEynQLQHaEj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'AstonMartin',
      model : 'DB11', 
      year : 2022,
      price: '110000$',
      engine : '4.0 turbo',
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'black',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.J1zZa1UdZHDKd20I9BvsUgHaFj&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse2.mm.bing.net/th?id=OIP.Gz_h4INQzhP6PwU_JHInBQHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.eAbAd6JP0eL3OM1PTe-2YgHaFn&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.qrM8KvBPDjFTlKQqjfsg8wHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'AstonMartin',
      model : 'DBX', 
      year : 2021,
      price: '130000$',
      engine : '4.0 turbo' ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'red',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse1.mm.bing.net/th?id=OIP.Xc_wqqWsvZ0pN1OFXgO9zQHaEK&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.FMj705QmVUpL2mhFvga8LgHaE8&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse2.mm.bing.net/th?id=OIP.TELHSRDiI6MmZ_TXTOsWiwHaEK&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse2.mm.bing.net/th?id=OIP.Jda9KQ_igfR3w1PUUB5nfgHaFj&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'AstonMartin',
      model : 'V8 Vantage', 
      year : 2007,
      price: '34000$',
      engine : 4.3 ,
      cylinders : 8 ,
      transmission : 'Automatic',
      color : 'silver',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse2.mm.bing.net/th?id=OIP.mRRCUji7xsbSaTVmCBXNcQHaE5&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse2.mm.bing.net/th?id=OIP.PGc5t-6-QR43p0tJTW0qXwHaE5&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.AS46chW1r8XN9SH6ufodyAHaEq&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse1.mm.bing.net/th?id=OIP.MbTCq-D1Ts6-Zkr4QZS-vwHaE8&pid=Api&P=0&h=220',
    },
    {
      manufacturer: 'Jeep',
      model : 'wrangler rubicon', 
      year : 2017,
      price: '20500$',
      engine : 3.6 ,
      cylinders : 6 ,
      transmission : 'Automatic',
      color : 'white',
      fueltipe : 'gasoline',
      imgUrl1 : 'https://tse3.mm.bing.net/th?id=OIP.PTjgwpm-k-T_bhNzvZVNtwHaE8&pid=Api&P=0&h=220',
      imgUrl2 : 'https://tse1.mm.bing.net/th?id=OIP.kFot_GCuQNS2GRPQgTwMtAAAAA&pid=Api&P=0&h=220',
      imgUrl3 : 'https://tse1.mm.bing.net/th?id=OIP.azwTp5PJnJv_tqZyrtEb1QHaE7&pid=Api&P=0&h=220',
      imgUrl4 : 'https://tse3.mm.bing.net/th?id=OIP.SMXhKu3wQny2gbB7FAGJaQHaDm&pid=Api&P=0&h=220',
    },
  ]
  seeDetails(car:any){
    this.router.navigate(
      ['/details'],
      {queryParams :car}
    )
    
  }
}