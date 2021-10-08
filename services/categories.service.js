const faker = require('faker');

class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      });
    }
  }

  create(data) {
    const newCategoty = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newCategoty);
    return newCategoty;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.categories[index];
    this.categories[index] = {
      ...product,
      ...changes,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoryService;
