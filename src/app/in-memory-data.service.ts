// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Injectable } from '@angular/core';
// import { Products } from './products';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//       const products = [
//     { id: 1,
//       name: 'Phone XL',
//       price: 799,
//       description: 'A large phone with one of the best screens'
//     },
//       {
//         id: 2,
//         name: 'Phone Mini',
//         price: 699,
//         description: 'A great phone with one of the best cameras'
//
//       },
//       {
//         id: 3,
//         name: 'Phone Standard',
//         price: 299,
//         description: ''
//     },
//         { id: 4,
//           name: 'Phone XL',
//           price: 799,
//           description: 'A large phone with one of the best screens'
//         },
//         { id: 5,
//           name: 'Phone XL',
//           price: 799,
//           description: 'A large phone with one of the best screens'
//         },
//         { id: 6,
//           name: 'Phone XL',
//           price: 799,
//           description: 'A large phone with one of the best screens'
//         },
//         { id: 7,
//           name: 'Phone XL',
//           price: 799,
//           description: 'A large phone with one of the best screens'
//         },
//         { id: 8,
//           name: 'Phone XL',
//           price: 799,
//           description: 'A large phone with one of the best screens'
//         },
//         ];
//       return {products};
//   }
//   genId(products: Products[]): number {
//     return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 9;
//   }
// }
//
//
