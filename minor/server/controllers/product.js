const Product = require('../models/product');
const slugify = require('slugify');
const product = require('../models/product');

exports.create = async (req, res) => {
  try {
    // const {name} = req.body;
    // const category = await new Category({name, slug: slugify(name) }).save();
    // res.json(category);
    console.log("$$$$$$$$$$$$$$$ PRODUCT CREATE completed $$$$$$$$$$$$$$");
  } catch (err) {
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }
}


exports.listAll = async (req, res) => {
  try {
    let products = await Product.find({})
      .limit(parseInt(req.params.count))
      .populate('category')
      .populate('subs')
      .sort([['createdAt', 'desc']])
      .exec()
    res.json(products);
    console.log("$$$$$$$$$$$$$$$ PRODUCT CREATE completed $$$$$$$$$$$$$$");
  } catch (err) {
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }
}


exports.remove = async (req, res) => {
  console.log("$$$$$$$$$$$$$$$ PRODUCT REMOVE completed $$$$$$$$$$$$$$");

}


exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate('category')
    .populate('subs')
    .exec();

  res.json(product);
  console.log("$$$$$$$$$$$$$$$ PRODUCT Retrive completed $$$$$$$$$$$$$$");

}

exports.update = async (req, res) => {
  try {
    // if(req.body.title){
    //   req.body.slug =   slugify(req.body.title);
    // }

    // const updated = await Product.findOneAndUpdate({ slug: req.params.slug }, req.body , {new : true}).exec();
    // res.json(updated);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@ Product Update sucessefully @@@@@@@@@@@@@@@@@@@@@@@@@")
  } catch (err) {
    // console.log('Product Update error' , err)
    // // return res.status(400).send('Product Update failed')
    // res.status(400).send('@@@@@ Update category failed@@@@@@');
  }
};

exports.list = async (req, res) => {
  try {
    // CreatedAt/UpdatedAt , des/asc , 3
    const { sort, order, limit } = req.body
    const products = await Product.find({})
      .populate('category')
      .populate('subs')
      .sort([[sort, order]])
      .limit(limit)
      .exec();

    res.json(products);

  } catch (err) {
    console.log(err);
  };

};
