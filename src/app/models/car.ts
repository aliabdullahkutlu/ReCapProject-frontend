export interface Car {
  //         "id": 1,
  //         "brandId": 1,
  //         "colorId": 1,
  //         "modelYear": 2019,
  //         "dailyPrice": 654,
  //         "description": "DaciaOtobot"

    id:number,
    colorId:number,
    brandId:number;
    brandName:string,
    colorName:string,
    modelYear:string,
    dailyPrice:number,
    description:string,
    imagePath:string,
    status: boolean
}
