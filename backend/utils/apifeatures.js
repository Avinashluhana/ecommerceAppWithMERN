class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["page", "keyword", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // filter for pricing and ratting

    // converting object into string for mongodb

    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    console.log(queryCopy)
    return this;
    
  }
}

module.exports = ApiFeatures;
