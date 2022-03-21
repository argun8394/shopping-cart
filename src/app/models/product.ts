export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id:any, name:any, description = '', price = 0, imageUrl = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkUEbLwpUizYPts-8FKpluUSLsxubLvgr5MLCp5uOxlIrBm6CFbZYAxuJUfyg6qtzxFFyQXoUxvMuR40kapMkRAi5SKwYw9BwTp4NufTaUmH4aCNr4XSagXw&usqp=CAE') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
