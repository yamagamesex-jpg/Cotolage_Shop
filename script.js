// socket removed
let products = [
  {
    "id": "d3fc9a8e-c970-4f10-9682-7fc2c1de5628",
    "name": "Шашлык Свиной",
    "description": "Состав: феле свинины, лук репчатый, \r\nсоль п/п, перец ч/м, маринад\r\n\r\n",
    "price": 5500,
    "image": "uploads/42f6fc5b-3b43-433a-92da-eb7392c03bd5.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "f12c83d6-9dd4-4570-8d80-6704dbb2afa6",
    "name": "Шашлык \"Свиные ребрышки",
    "description": "Состав: Свинина (ребра), специи, лук репчатый, соль п/п, перец ч/м, шашлычная приправа",
    "price": 5500,
    "image": "uploads/99d29c13-2fdd-4a26-a972-b7a7c86c48e4.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "59dbc600-16d9-41e0-9255-57b7c4c06887",
    "name": "Шашлык \"Утиное филе\"",
    "description": "Состав: утиное филе, лук репчатый, соль п/п, \r\nперец ч/м, маринад ",
    "price": 4500,
    "image": "uploads/46b8b3cd-8499-48fb-9250-407660a0055f.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "844c99f4-fea0-4857-b731-0435771c6f63",
    "name": "Котлеты куриные Малышки\"",
    "description": "Состав: куриный фарш, хлеб белый, \r\nяйцо сырое, соль, перец, специи, сухари \r\nпанировочные. ",
    "price": 1400,
    "image": "uploads/c932fb0f-8a7c-460e-a2f4-017d6e88d7f2.png",
    "video": null,
    "active": true,
    "category": "Котлеты"
  },
  {
    "id": "fa6892fa-d36a-4303-953c-a83129fe6813",
    "name": "Котлеты (смешанные)",
    "description": "Состав: \r\nкуриный \r\nфарш, свинина, \r\nговядина, \r\nхлеб, яйцо, специи,сухари панировочные ",
    "price": 1400,
    "image": "uploads/5ffa1c92-a953-4a60-9494-8369016d5f00.png",
    "video": null,
    "active": true,
    "category": "Котлеты"
  },
  {
    "id": "4f868bd7-bf24-44f1-8b40-f313f9bdba8b",
    "name": "Котлеты говяжьи",
    "description": "Состав: куриный фарш, говядина, хлеб, яйцо, \r\nспеции, сухари панировочные, лук ",
    "price": 1400,
    "image": "uploads/618ce287-0b47-49c3-82ca-8e6d8e8471e3.png",
    "video": null,
    "active": true,
    "category": "Котлеты"
  },
  {
    "id": "aa6f2312-3ebd-4573-94a8-ec5938f6aaf6",
    "name": "Фрикадельки",
    "description": "Состав: фарш куриный, свиной, \r\nговядина, лук, чеснок, перец черный ",
    "price": 1400,
    "image": "uploads/17fb7972-fca5-4c2a-b01f-97e45f5c7080.png",
    "video": null,
    "active": true,
    "category": "Фрикадельки"
  },
  {
    "id": "41a6535b-95d3-41d0-bc51-ec15a6f0ea16",
    "name": "Фрикадельки говяжьи",
    "description": "Состав: фарш говяжий, жир говяжий, мясо курицы, \r\nлук репчатый соль пов. пищевая, перец ч/м, \r\nмука пшеничная в/с, яйцо куриноe, вода питьевая. ",
    "price": 1400,
    "image": "uploads/89cfe068-bced-46a0-8e51-1956fd581565.png",
    "video": null,
    "active": true,
    "category": "Фрикадельки"
  },
  {
    "id": "738b623e-83be-4750-b393-3463ad2628d4",
    "name": "Манты с сыром",
    "description": "Состав: куриный фарш, свинина, говядина, сыр, \r\nлук репчатый, соль, перец черный, яйцо, мука ",
    "price": 1600,
    "image": "uploads/8cc5da76-e0a9-4dc3-bae9-a85f07a03ae4.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "87d299bb-ad2e-427b-874c-c5ca5f44d76f",
    "name": "Манты с тыквой",
    "description": "Состав: фарш куриный, говяжий, свиной, шпик, лук \r\nреп., тыква (кубик), соль пов.пищевая, перец ч/м, \r\nмука пшеничная в/с, яйцо куриное, вода питьевая.",
    "price": 1400,
    "image": "uploads/39294f78-1d06-403c-940a-e353ed9f3355.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "300af593-ba94-478d-9297-935d05a6ce86",
    "name": "Буузы смешанные",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, морковь тушенная, специи ",
    "price": 1400,
    "image": "uploads/c7b6daa5-b08d-4fa8-8bd4-90840b63494e.png",
    "video": null,
    "active": true,
    "category": "Буузы"
  },
  {
    "id": "5add8522-985a-4dd7-92cd-9e4c3788a034",
    "name": "Буузы говяжьи",
    "description": "Состав: куриный фарш, фарш говядина, \r\nжир говяжий, морковь тушенная, специи",
    "price": 1400,
    "image": "uploads/3ef03e6b-08bc-4aef-a1eb-b7718ef44078.png",
    "video": null,
    "active": true,
    "category": "Буузы"
  },
  {
    "id": "1",
    "name": "Сочные голени для запекания",
    "description": " Состав: \r\nголени \r\nпряностями, \r\nШашлык \r\nсо специями, \r\nсоль, \r\nчеснок, \r\nсвиной: \r\nперец черный",
    "price": 2000,
    "image": "uploads/9cc6b3e3-aa8c-4591-8d9d-74a66f71eaf7.png",
    "video": null,
    "active": true,
    "category": "Маринованные продукты"
  },
  {
    "id": "f06640d8-57b3-45ad-9245-16eb9a16be4a",
    "name": "Курзе говяжьи",
    "description": "Состав: куриный фарш, говядина, \r\nтомат, сметана, \r\nперец черный",
    "price": 1400,
    "image": "uploads/1dbbe748-f394-493f-828f-a8c843256d0c.png",
    "video": null,
    "active": true,
    "category": "Курзе"
  },
  {
    "id": "4904cbfe-9c7c-4d05-988d-ddb57c996b35",
    "name": "Пельмени смешанные",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, соль, перец черный ",
    "price": 1300,
    "image": "uploads/bb020653-b758-46b4-9e4c-1c9490122138.png",
    "video": null,
    "active": true,
    "category": "Пельмени"
  },
  {
    "id": "9b445d6b-6148-40bd-9830-103b3f93021c",
    "name": "Пельмени говяжьи",
    "description": "Состав: куриный фарш, \r\nговядина, \r\nсоль, перец черный ",
    "price": 1300,
    "image": "uploads/4f9260a8-bf4f-408a-abd7-e6476e245316.png",
    "video": null,
    "active": true,
    "category": "Пельмени"
  },
  {
    "id": "febb272e-5064-4162-8703-dabaef470c6d",
    "name": "Хинкали (смешанные)",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, кинза свежая, аджика, \r\nсоль, перец черный ",
    "price": 1400,
    "image": "uploads/64192099-f13b-4647-ac80-9511301f853e.png",
    "video": null,
    "active": true,
    "category": "Хинкали"
  },
  {
    "id": "31b81659-5f46-4b77-9ed2-820915dc5ef6",
    "name": "Хинкали говяжьи",
    "description": "Cостав: фарш куриный, говядина, зелень, \r\nлук, аджика",
    "price": 1400,
    "image": "uploads/da52243e-8d5c-4ee8-8799-367d3e1703d9.png",
    "video": null,
    "active": true,
    "category": "Хинкали"
  },
  {
    "id": "09e5a7e7-cb54-4867-b71e-c32109659613",
    "name": "Барамышки",
    "description": "Состав: сбой баранины, сбой говядины, специи ",
    "price": 1600,
    "image": "uploads/46232c33-bc53-483e-b7dd-543686f0dc0f.png",
    "video": null,
    "active": true,
    "category": "Барамышки"
  },
  {
    "id": "4255b015-91e0-42ca-ab5d-375395f9dfb7",
    "name": "Чебупели",
    "description": "Состав: мука в/с, яйцо курино, вода питьевая, \r\nсоль поваренная. Начинка: ветчина, сыр ",
    "price": 1600,
    "image": "uploads/60ad3e9f-64e1-48f6-8efb-ef8a1ff57c81.png",
    "video": null,
    "active": true,
    "category": "Чебуреки"
  },
  {
    "id": "8939f4c3-c8bd-4f6a-bd46-4b9cae92ba8d",
    "name": "Манты  смешанные",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, \r\nсоль, перец черный",
    "price": 1400,
    "image": "uploads/c6cef686-fe6f-4593-abc9-744006ea255c.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "fc51cb08-c1fd-4079-b32b-c4f7a9828de3",
    "name": "Манты говяжьи",
    "description": "Состав: куриный фарш, \r\nговядина, соль, перец черный ",
    "price": 1400,
    "image": "uploads/1afd2c6e-5b97-40fa-9707-77bc9c08a959.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "44c8db56-06ae-4584-b8b9-32860c4ea866",
    "name": "Манты смешанные  с картофелем",
    "description": "Состав: куриный фарш, свинина, говядина, картофель \r\nсырой (кубики), соль, перец черный ",
    "price": 1400,
    "image": "uploads/c1695815-d00d-47f6-aa11-adb643d7a87e.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "c47f7285-4a5b-4578-a1dd-789a3794d994",
    "name": "Манты говяжьи с картофелем",
    "description": "Состав: мясо говядина, курица, жир говяжий, \r\nлук репчатый, картофель кубиками, яйцо, \r\nмука пшеничная в/с, соль п/п, перец ч/м, специи ",
    "price": 1400,
    "image": "uploads/576f464a-bb59-49fc-9449-11a7f872a5ef.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "cb86c12c-72e4-4c92-86cf-1e1772eab605",
    "name": "Манты куриные",
    "description": "Состав: \r\nспеции, \r\nкуриный \r\nфарш, \r\nсоль, перец черный ",
    "price": 1400,
    "image": "uploads/8a9a74a8-4716-43c7-bb29-e6f350a0778f.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "adc2771b-9adf-42c0-a715-e5129b4355b2",
    "name": "Пельмени  \"Элитные\"  (говяжьи, смешанные)",
    "description": "Cостав: говядина, свинина, соль, перец черный ",
    "price": 1600,
    "image": "uploads/d92a5328-6718-4d30-a1a5-4b32575bcbd0.png",
    "video": null,
    "active": true,
    "category": "Пельмени"
  },
  {
    "id": "9e7ef66a-78ca-4f08-8c92-aaca673015b8",
    "name": "Манты \"Элитные\"",
    "description": "Состав: Фарш свиной, сало, фарш говяжий, \r\nжир говяжий, соль, перец черный",
    "price": 1600,
    "image": "uploads/a8221609-5af8-44a6-853e-f869d850aec9.png",
    "video": null,
    "active": true,
    "category": "Манты"
  },
  {
    "id": "db57f14b-485f-40d0-a952-b972fd6461dc",
    "name": "Котлеты  по-домашнему",
    "description": "Состав: свинина, говядина, лук репчатый, соль ",
    "price": 1700,
    "image": "uploads/3dacec7e-bb03-4de4-ba49-2ed5b1e178f5.png",
    "video": null,
    "active": true,
    "category": "Котлеты"
  },
  {
    "id": "e4fa6dd8-0d3c-4d4b-8b2d-9ac511b4541e",
    "name": "Тефтели элитные",
    "description": "Состав: фарш говяжий, соль, перец",
    "price": 1700,
    "image": "uploads/b6a25e5b-bfcb-477d-b498-58745543fe61.png",
    "video": null,
    "active": true,
    "category": "Тефтели"
  },
  {
    "id": "25feb364-ff20-4936-84fb-ef2eb1a22dd7",
    "name": "Котлеты для бургеров говяжьи",
    "description": "Состав: фарш говяжий, соль, перец ",
    "price": 1700,
    "image": "uploads/16865a65-6b0d-4bee-801f-3bb037c3151a.png",
    "video": null,
    "active": true,
    "category": "Котлеты"
  },
  {
    "id": "84cd0fc5-85b6-4f6e-9da7-39fdbe9a6dbd",
    "name": "Перец фаршированный",
    "description": "Состав: куриный фарш, свинина, говядина, \r\nрис, яйцо, соль, специи, перец болгарский",
    "price": 0,
    "image": "uploads/e6d9e12b-8fe8-4a7b-b10b-97676d2d0690.png",
    "video": null,
    "active": true,
    "category": "Перец фаршированный"
  },
  {
    "id": "154cc55b-b8ca-4d57-a0f0-c4a7e4a332b4",
    "name": "Перец фаршированный говядина",
    "description": "Состав: фарш говяжий, курица, жир говяжий, \r\nрис белый, лук репчатый, перец болгарский, \r\nсоль п/п, перец ч/м, специи ",
    "price": 0,
    "image": "uploads/025a6b20-62e3-41f7-8ab0-e6b78dc8a8e7.png",
    "video": null,
    "active": true,
    "category": "Перец фаршированный"
  },
  {
    "id": "8af6ea5a-28e9-4b08-8d11-9cc7f060d0c7",
    "name": "Фарш смешанный",
    "description": "Состав: \r\nмясо куриное, свинина\r\nговядина, шпик ",
    "price": 1600,
    "image": "uploads/f2814ad6-7d97-408f-8147-5d43794fcff3.png",
    "video": null,
    "active": true,
    "category": "Фарш"
  },
  {
    "id": "be51523f-73ec-4572-b3f8-e4c8dfb91b24",
    "name": "Фарш говяжий",
    "description": "Состав: мясо говядина, куриное, жир говяжий ",
    "price": 1600,
    "image": "uploads/347a75cb-65b8-485f-80d6-9c630657bc94.png",
    "video": null,
    "active": true,
    "category": "Фарш"
  },
  {
    "id": "3f274442-7b69-4f0f-805a-ccc68255a86a",
    "name": "Гуляш свиной",
    "description": "Состав: феле свинины",
    "price": 3000,
    "image": "uploads/70b23c40-b95a-4e2d-9972-ececa07ffc36.png",
    "video": null,
    "active": true,
    "category": "Гуляш"
  },
  {
    "id": "0dbca24a-4c50-480b-9970-6ae016f159d4",
    "name": "Маринованные бедра для запекания",
    "description": "Состав: куриные бедра, с пряностями и специями, \r\nчеснок, перец черный, Соль",
    "price": 2000,
    "image": "uploads/e8c7f7cf-a094-4953-9d1b-bfcc2f403547.png",
    "video": null,
    "active": true,
    "category": "Курица"
  },
  {
    "id": "cbcc693f-782e-4607-91ac-291dbb89ebe9",
    "name": "Крылышки  для запекания:",
    "description": "Состав:  \r\nкрылышки куриные, \r\nсоль, перец черный, специи",
    "price": 2300,
    "image": "uploads/5162ecd4-786d-41bb-a86c-aab0d7b2979b.png",
    "video": null,
    "active": true,
    "category": "Курица"
  },
  {
    "id": "834e4718-f28b-4646-ae58-bb426008b926",
    "name": "Рыбные котлеты (из судака",
    "description": "Состав: фарш судака, хлеб белый, яйцо, \r\nманная \r\nкрупа, \r\nсухарь \r\nсоль, перец черный",
    "price": 0,
    "image": "uploads/ef4fc736-bae9-4d5e-9de6-b276e0b771c5.png",
    "video": null,
    "active": true,
    "category": "Рыбные продукты"
  },
  {
    "id": "52e57eee-0219-491f-99ac-f38ffea547b3",
    "name": "Вареники с картофелем",
    "description": "Состав: картофель, соль \r\nлук пассированный, \r\nмасло \r\nсливочное",
    "price": 1000,
    "image": "uploads/cffbae81-edf6-4401-a60d-bcf3599d7e4a.png",
    "video": null,
    "active": true,
    "category": "Вареники"
  },
  {
    "id": "bdc0ec89-5c9c-4459-afa3-a9a1a9c9aa81",
    "name": "Вареники с картофелем  +печень: ",
    "description": "Состав: артофель, печень говяжья, \r\nлук, масло сливочно, мука в/с, \r\nіртофель/. \r\nяйцо куриное, соль, вода питьевая",
    "price": 1200,
    "image": "uploads/201ec585-bd81-4890-a41c-9ec09f1f124d.png",
    "video": null,
    "active": true,
    "category": "Вареники"
  },
  {
    "id": "c902ba86-ee9b-402c-a944-fdd7132e0506",
    "name": "Вареники с картофелем,  грибами",
    "description": "Состав: картофель, грибы \r\nлук пассированный, \r\nмасло \r\nсливочное",
    "price": 0,
    "image": "uploads/d5740cea-2cf8-4f2d-beba-6d1409c62de1.png",
    "video": null,
    "active": true,
    "category": "Вареники"
  },
  {
    "id": "700fb3e7-4ef9-492f-b6d4-3609a1a7ba0a",
    "name": "Вареники с творогом (сладкие)",
    "description": "Состав: Творог, Сахар",
    "price": 1600,
    "image": "uploads/f8c423cd-e69f-4884-8c3d-755018b5386f.png",
    "video": null,
    "active": true,
    "category": "Вареники"
  },
  {
    "id": "3f6d347e-2b2f-4736-991e-efd1185e111a",
    "name": "Вареники с творогом (соленые)",
    "description": "Состав: творог, соль, лук зеленый",
    "price": 1600,
    "image": "uploads/c532a638-3205-44d8-aabc-afb84ebf1aac.png",
    "video": null,
    "active": true,
    "category": "Вареники"
  },
  {
    "id": "78e3481a-acaa-4b7d-b84c-e31b84ea85b0",
    "name": "Шашлык \"Куриные голени барбекю\" 2КГ",
    "description": "Cостав: куриные голени, соль п/п, \r\nперец ч в/с, лук репчатый, маринад ",
    "price": 4000,
    "image": "uploads/948b7457-a7dd-4a7b-9df1-e17d780e111a.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "198e0750-6444-4018-b09d-0dfb6fc8d752",
    "name": "Шашлык \"Куриные бедра барбекю 2КГ",
    "description": "Состав: куриные голени, соль п/п, \r\nперец ч в/с, лук репчатый, маринад",
    "price": 4000,
    "image": "uploads/05ec0360-ba12-405b-823b-08ad3a88ba94.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "4fa42381-7dc2-4939-841f-416b9478a605",
    "name": "Шашлык \"Куриные крылышки барбекю 2КГ",
    "description": "Состав: куриные крылышки, соль п/п, \r\nперец ч в/с, перец красн. в/с, маринад",
    "price": 4000,
    "image": "uploads/6bcd861b-2193-4b91-a4a6-daf5119616c1.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "3258e109-31ce-4210-8ef6-3f519ae42e10",
    "name": "Шашлык \"Из куриной  грудки\" 2КГ",
    "description": "Состав: филе грудки, лук репчатый, \r\nсоль п/п, перец ч в/с, маринад ",
    "price": 4500,
    "image": "uploads/bf75b605-0064-47ca-b099-21570362d2b3.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "4d87ad96-0cb8-40ad-ba32-9afdbaabfb9b",
    "name": "Шашлык \"Свиные стейки\" 2КГ",
    "description": "Состав: филе грудки, лук репчатый, \r\nсоль п/п, перец ч в/с, маринад",
    "price": 5500,
    "image": "uploads/a53e3411-db13-42ec-a916-5ad731ce03ac.png",
    "video": null,
    "active": true,
    "category": "Шашлык"
  },
  {
    "id": "b98e9297-df25-440a-ba8e-0d708d452757",
    "name": "Жаркое по-домашнему 2КГ",
    "description": "Состав: Филе свинины, марковь кубик, лук кубик, \r\nстручковая фасоль, болгарский перец (свежее \r\nмороженные) соль, перец в/с ,перец горошек, специи",
    "price": 5500,
    "image": "uploads/5ba75b75-f484-432f-8919-948be6b264bd.png",
    "video": null,
    "active": true,
    "category": "Жаркое"
  },
  {
    "id": "f372ed96-e356-4cc5-9217-ddfeef9e9384",
    "name": "Куырдак 1КГ",
    "description": "Состав:  \r\nговяжье \r\nсердце, говяжья \r\nпечень, \r\nморковь кубик, лук репчатый кубик, \r\nсоль, перец чёрный в/с",
    "price": 2400,
    "image": "uploads/1581f0ae-0a40-4536-aa78-24caffd3f6bd.png",
    "video": null,
    "active": true,
    "category": "Куырдак"
  },
  {
    "id": "f1288ac4-61d8-445f-a114-9629f76a5c31",
    "name": "Ребра свиные для запекания 1КГ",
    "description": "Состав: Свинина (ребра), \r\nсоль п/п, перец ч/м, пряности",
    "price": 3000,
    "image": "uploads/f0121fce-e836-4d16-b8c2-e93265362264.png",
    "video": null,
    "active": true,
    "category": "Свинина"
  },
  {
    "id": "1f9ea864-fd6a-418d-b44f-3a466731b924",
    "name": "Тесто дрожжевое",
    "description": "Состав: \r\nмука, \r\nдрожжи, \r\nсахар, \r\nсоль.",
    "price": 600,
    "image": "uploads/553c7832-cdee-4398-98f6-222191e92cff.png",
    "video": null,
    "active": true,
    "category": "Тесто"
  },
  {
    "id": "c905420b-d03c-47fa-81ca-942babc925c0",
    "name": "Морковь \"Кубик\" свежемороженая 0.5",
    "description": "Состав: Морковь ",
    "price": 350,
    "image": "uploads/8c583099-8b77-4f46-9b33-1a1977a25bf3.png",
    "video": null,
    "active": true,
    "category": "Овощи"
  },
  {
    "id": "b505854f-e734-4350-a8a4-9bca7b9ad47f",
    "name": "Морковь \"Соломка\" свежемороженая: 0.5",
    "description": "Состав: Морковь ",
    "price": 350,
    "image": "uploads/9decf387-f5b3-4952-b7c7-4f53dba570d5.png",
    "video": null,
    "active": true,
    "category": "Овощи"
  },
  {
    "id": "3808f6c6-fa81-47f5-9779-c1acdcbb432b",
    "name": "Свекла  \" Соломка \" свежемороженая 0.5",
    "description": "Состав: Свекла ",
    "price": 400,
    "image": "uploads/e8f0dc25-eebe-4905-a83e-469d45bc6257.png",
    "video": null,
    "active": true,
    "category": "Овощи"
  },
  {
    "id": "67a38582-fa33-47b0-a4da-d436268d92ff",
    "name": "Тыква \"Кубик\" свежемороженая",
    "description": "Состав: Тыква",
    "price": 0,
    "image": "uploads/cd11d89c-1ffd-4c8c-8226-abd6052530de.png",
    "video": null,
    "active": true,
    "category": "Овощи"
  },
  {
    "id": "e4c5b2a6-d66d-4f14-a3db-bb223ed9577b",
    "name": "Наггетсы",
    "description": "Состав: филе куриное (грудка), яйцо, \r\nмука, сухари. ",
    "price": 3000,
    "image": "uploads/a378d162-2da8-4948-aeb0-cec2a949862d.png",
    "video": null,
    "active": true,
    "category": "Наггетсы"
  },
  {
    "id": "2a1efbc8-82f2-482d-9d01-85ae0fb037b9",
    "name": "Минтай стэйк",
    "description": "Состав: \r\n\r\nрыба \r\nминтай, \r\n\r\nсоль, \r\nлимон, \r\nспеции.",
    "price": 2300,
    "image": "uploads/f8b605b2-5e81-481c-a7c1-8bcd00139d90.png",
    "video": null,
    "active": true,
    "category": "Рыбные продукты"
  },
  {
    "id": "39f92ee9-7720-4b14-ad06-4abc16ad5e62",
    "name": "Люля-кебаб",
    "description": "Состав: фарш куриный, фарш говядина, лук, \r\nзелень, соль, п/п, перец ч/м, специи",
    "price": 2000,
    "image": "uploads/1185b6e9-5c4e-435d-ac17-8a96993e6cd2.png",
    "video": null,
    "active": true,
    "category": "Люля-кебаб"
  },
  {
    "id": "52b7156e-8047-4963-8f92-1f4f4ab5e31c",
    "name": "Купаты",
    "description": "Состав: черева говяжьи, фарш \r\nсвинины, фарш говяжий, чеснок, \r\nспеции, пряности, соль, перец черный ",
    "price": 2000,
    "image": "uploads/856d4376-f9d7-4eac-817d-5377368e537e.png",
    "video": null,
    "active": true,
    "category": "Купаты"
  },
  {
    "id": "baac3af7-d793-4193-995c-9249848e30d3",
    "name": "Купаты говяжьи",
    "description": "Состав: черева говяжьи, фарш говяжий, \r\nспеции, пряности, чеснок, соль, перец черный",
    "price": 2000,
    "image": "uploads/1c0513d2-6d26-43d0-bfb7-7f27907e7850.png",
    "video": null,
    "active": true,
    "category": "Купаты"
  },
  {
    "id": "9f3adf16-5388-4dc0-aeab-c1c8baf7ba2d",
    "name": "Тефтели (смешанные)",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, \r\nрис, \r\nспеции, \r\nяйцо ",
    "price": 1400,
    "image": "uploads/e3510c6e-fea7-46bf-b821-ccba759cd65a.png",
    "video": null,
    "active": true,
    "category": "Тефтели"
  },
  {
    "id": "64c07b94-0af6-4e05-ac9b-a9e0c7d8a606",
    "name": "Тефтели говяжьи",
    "description": "Состав: куриный фарш, говядина, \r\nрис, специи, яйцо",
    "price": 1400,
    "image": "uploads/f45442f8-1af5-4d4a-8669-64a9d99456af.png",
    "video": null,
    "active": true,
    "category": "Тефтели"
  },
  {
    "id": "301467ee-03f0-4189-b76a-c913b6a732a9",
    "name": "Ленивые голубцы",
    "description": "Состав: Мясо куриное, \r\nсвинина, \r\nговядина, \r\nшпик, \r\nлук репчатый, рис, капуста свежая, специи ",
    "price": 1400,
    "image": "uploads/a51a587c-3e6e-425f-806f-3bd18157ddc7.png",
    "video": null,
    "active": true,
    "category": "Голубцы"
  },
  {
    "id": "6b9b8bf9-b2d3-4cac-97b4-85a828129533",
    "name": "Голубцы (смешанные)",
    "description": "Cостав: куриный фарш, говядина, свинина, \r\nспеции, рис, капуста ",
    "price": 1400,
    "image": "uploads/36f48de1-6502-4422-9c80-3f193d2e5f43.png",
    "video": null,
    "active": true,
    "category": "Голубцы"
  },
  {
    "id": "e7ffb9ec-2447-4da3-9c3f-ea0018565e45",
    "name": "Голубцы говяжьи",
    "description": "Состав: мясо говядина, курица, жир говяжий, \r\nрис белый, лук репчатый, капуста свежая, \r\nсоль п/п, перец ч/м",
    "price": 1400,
    "image": "uploads/3684f393-e012-4e45-b312-6de609293f3a.png",
    "video": null,
    "active": true,
    "category": "Голубцы"
  },
  {
    "id": "99b90575-5936-49c6-8943-c2b7887380b5",
    "name": "Ханум смешанный",
    "description": "Ханум смешанный",
    "price": 1400,
    "image": "uploads/02aa8abf-3283-465f-917d-dc472e67c5a0.png",
    "video": null,
    "active": true,
    "category": "Ханум"
  },
  {
    "id": "d6437beb-809c-44f7-8c45-255ae6da1a5a",
    "name": "Ханум говяжий",
    "description": "Состав: фарш повядина, курица, жир говяжий \r\nшпик, \r\nморковь, \r\nкапуста, \r\nкартофель, \r\nтомат, \r\nзелень, яйца, соль п/п, перец ч/м,. специи",
    "price": 1400,
    "image": "uploads/86f1f1d7-3022-4176-8d8b-65dd7a0ea598.png",
    "video": null,
    "active": true,
    "category": "Ханум"
  },
  {
    "id": "edb1a4d5-8a25-49c5-b67d-6cb934152ea2",
    "name": "Штрудели",
    "description": "Состав: куриный фарш, свинина,  \r\nговядина, соль, перец, лук зелены",
    "price": 1400,
    "image": "uploads/3ae4ba85-d3d9-408b-98ec-bef7b66e26ff.png",
    "video": null,
    "active": true
  },
  {
    "id": "c28950f3-8d92-4e1a-a05d-5256d44f58a0",
    "name": "Чебуреки смешанные",
    "description": "Состав: куриный фарш, свинина, \r\nговядина, специи ",
    "price": 1400,
    "image": "uploads/ad290feb-0cd5-419c-b9f2-457c060049e9.png",
    "video": null,
    "active": true,
    "category": "Чебуреки"
  },
  {
    "id": "a1b61fd1-d2ac-4c86-81f1-d7e5f8b1cd0d",
    "name": "Чебуреки говяжьи",
    "description": "Состав: \r\nкуриный \r\nфарш, говядина, \r\nперец черный, соль",
    "price": 1400,
    "image": "uploads/db8f5b30-1a29-4cad-8e3d-de0f7459f609.png",
    "video": null,
    "active": true,
    "category": "Чебуреки"
  },
  {
      "id": "afs1fd1-d2ac-4c86-81f1-d7e5f8b1cd0d",
      "name": "Утиная грудка",
      "description": "3600 тг/кг",
      "price": 3600,
      "image": "photo_5352996059916997714_y.png",
      "video": null,
      "active": true,
      "category": "Грудки"
  }
];
let filteredProducts = [];

// Элементы DOM
const productsContainer = document.getElementById('productsContainer');
const imageModal = document.getElementById('imageModal');
const modalContent = document.getElementById('modalContent');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const themeToggle = document.getElementById('themeToggle');

// Загрузка продуктов
async function loadProducts() {
  try {
    // Показываем loading
    document.getElementById('productCount').textContent = 'Загрузка товаров...';
    
    // products уже загружены выше
    filteredProducts = [...products];
    populateCategories();
    renderProducts();
  } catch (error) {
    console.error('Error loading products:', error);
    document.getElementById('productCount').textContent = 'Ошибка загрузки';
  }
}

// Заполнение категорий в фильтре
function populateCategories() {
  const categories = [...new Set(products.map(p => p.category).filter(c => c))];
  categories.sort();

  // Очищаем существующие опции кроме "Все категории"
  while (categoryFilter.children.length > 1) {
    categoryFilter.removeChild(categoryFilter.lastChild);
  }

  // Добавляем категории
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Функция поиска и фильтрации
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                         product.description.toLowerCase().includes(searchTerm);
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts();
}

// Обработчики событий для поиска и фильтра
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// Смена темы
themeToggle.addEventListener('click', toggleTheme);

// Функция смены темы
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  if (isDark) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Загрузка темы из localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(`${savedTheme}-theme`);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Отрисовка продуктов
function renderProducts() {
  productsContainer.innerHTML = '';
  filteredProducts.forEach(product => {
    const card = createProductCard(product);
    productsContainer.appendChild(card);
  });

  // Обновляем счетчик товаров
  updateProductCount();
}

// Обновление счетчика товаров
function updateProductCount() {
  const countElement = document.getElementById('productCount');
  const total = products.length;
  const filtered = filteredProducts.length;
  
  if (total === filtered) {
    countElement.textContent = `Всего товаров: ${total}`;
  } else {
    countElement.textContent = `Показано: ${filtered} из ${total}`;
  }
}

// Создание карточки товара
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = `product-card ${!product.active ? 'inactive' : ''}`;

  let mediaElement = '';
  if (product.video) {
    mediaElement = `<video class="product-video" src="./uploads/${product.video}" controls></video>`;
  } else if (product.image && product.image !== 'BLANK') {
    mediaElement = `<img class="product-image" src="${product.image}" alt="${product.name}">`;
  } else {
    mediaElement = `<div class="product-image" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999;">BLANK</div>`;
  }

  card.innerHTML = `
    ${mediaElement}
    <div class="product-info">
      <div class="product-header">
        <h3 class="product-name">${product.name}</h3>
        ${product.category ? `<span class="product-category">${product.category}</span>` : ''}
      </div>
      <p class="product-description">${product.description}</p>
      <p class="product-price">${formatPrice(product.price)}</p>
      <span class="product-status ${product.active ? 'active' : 'inactive'}">
        ${product.active ? 'В наличии' : 'Нет в наличии'}
      </span>
    </div>
  `;

  // Обработчики событий
  const media = card.querySelector('.product-image, .product-video');
  if (media && media.tagName === 'IMG') {
    media.addEventListener('click', () => openImageModal(product));
  }

  return card;
}

// Форматирование цены
function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'KZT'
  }).format(price);
}

// Открытие модала с изображением
function openImageModal(product) {
  if (product.video) {
    modalContent.innerHTML = `<video controls autoplay><source src="./uploads/${product.video}" type="video/mp4"></video>`;
  } else if (product.image && product.image !== 'BLANK') {
    modalContent.innerHTML = `<img src="./uploads/${product.image}" alt="${product.name}">`;
  }
  imageModal.classList.remove('hidden');
}

// Закрытие модала с изображением
document.getElementById('closeImageModal').addEventListener('click', () => {
  imageModal.classList.add('hidden');
  modalContent.innerHTML = '';
});

// Закрытие по клику на фон
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.add('hidden');
    modalContent.innerHTML = '';
  }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
    imageModal.classList.add('hidden');
    modalContent.innerHTML = '';
  }
});

// Intersection Observer для скролл анимаций
function setupScrollAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Наблюдаем за всеми карточками
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach(card => {
      observer.observe(card);
    });
  }, 100);
}

// Параллакс эффект при скроле
function setupParallax() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (header && scrolled < 500) {
      header.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
  });
}

// Гладкий скролл и анимации элементов при скроле
function setupSmoothScroll() {
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Анимация счетчика товаров
  const countElement = document.getElementById('productCount');
  if (countElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInRight 0.6s ease-out';
        }
      });
    });
    observer.observe(countElement);
  }
}

// Инициализация
loadTheme();
loadProducts();

// Запуск анимаций при готовности DOM
window.addEventListener('load', () => {
  setupScrollAnimations();
  setupParallax();
  setupSmoothScroll();
});
