import * as React from 'react';
import {useEffect, useState} from 'react';
import '../../css/account.css';
import '../../css/product-form.css';
import {InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography} from '@mui/material';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import {ProductModel} from '../../domain/ProductModel';
import {CategoryModel} from '../../domain/CategoryModel';
import {ProductApi} from '../../api/ProductApi';
import {useNavigate} from 'react-router-dom';
import {baseUrl} from '../../utils/Utils';

function ProductForm() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [selectedImage, setSelectedImage] = useState<File>();
  const [product, setProduct] = useState<ProductModel>({
    id: null,
    title: '',
    description: '',
    price: null,
    categoryId: null,
    createDate: null,
    lastUpdateDate: null,
    amountInStock: null,
    sellerId: null,
    isConfirmForSale: false,
    imageId: null
  });

  async function fetchCategories() {
    const retrievedCategories = await ProductApi.getAllCategories();
    // console.log("RESPONSE categories: " + JSON.stringify(retrievedCategories));
    setCategories(retrievedCategories);
    if (retrievedCategories.length > 0) {
      // setCategoryId(retrievedCategories[0].id);
    }
  }

  useEffect(() => {
    fetchCategories();
    console.log('LOG selectedImage: ' + selectedImage);
    console.log('LOG selectedImage str: ' + JSON.stringify(selectedImage));
    //
  }, [selectedImage]);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setProduct({...product, [event.target.name] : event.target.value});
  }

  const handleChangeCategory = (event: SelectChangeEvent) => {
    console.log('LOG asd: ' + JSON.stringify(event.target));
    setCategoryId(event.target.value);
  };

  // event: React.ChangeEvent<HTMLInputElement>
  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    console.log('LOG event.target.files: ' + JSON.stringify(event.target.files));
    console.log('LOG event.currentTarget.files: ' + JSON.stringify(event.currentTarget.files));

    const files = (event.target as HTMLInputElement).files;
    console.log('LOG files: ' + JSON.stringify(files));

    // console.log('LOG event files: ' + JSON.stringify(event.target.files));

    const selectedFiles = event.target.files as FileList;
    setSelectedImage(selectedFiles?.[0]);
  }

  const handleCreateProduct = () => {
    const sellerId = Cookies.get("userId");
    if (sellerId) {
      product.sellerId = sellerId;
    }

    if (categories[categoryId]) {
      product.categoryId = categories[categoryId].id;
    }

    ProductApi.addProduct(product).then((resp) => {
      console.log('RESP ID: ' + resp.id);

      const formData = new FormData();
      formData.append("file", selectedImage);

      fetch(baseUrl + '/api/product/image/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      })
        .then(response => (
          console.log('LOG response: ' + JSON.stringify(response)
          )))
        .catch((e) => console.log('LOG error: ' + e));
    });

    // navigate('/account');

    // TODO: upload
    // get productId from upload
    // form.imageId = resp
    // send createProduct request

    console.log('LOG selectedImage: ' + selectedImage);
  }

  return (
    <div className={'product-form-container'}>
      <form className={'product-form'}>

        <div className={'product-form-title'}>
          <Typography variant="h4">Добавление продукта</Typography>
        </div>

        <div className={'product-form-component-container'}>
          <TextField
            className={'product-form-component'}
            label={'Название'}
            name={'title'}
            onChange={handleChange}
            variant={"outlined"}
            size={"small"}
            margin={"dense"} />
        </div>

        <div className={'product-form-component-container'}>
          <TextField
            className={'product-form-component'}
            label={'Описание'}
            name={'description'}
            onChange={handleChange}
            variant={"outlined"}
            size={"small"}
            margin={"dense"} />
        </div>

        <div className={'product-form-component-container'}>
          <TextField
            className={'product-form-component'}
            label={'Цена'}
            name={'price'}
            onChange={handleChange}
            variant={"outlined"}
            size={"small"}
            margin={"dense"} />
        </div>

        <div className={'product-form-component-container'}>
          <TextField
            className={'product-form-component'}
            label={'Количество товара в наличии'}
            name={'amountInStock'}
            onChange={handleChange}
            variant={"outlined"}
            size={"small"}
            margin={"dense"} />

        </div>

        <div className={'product-form-component-container-select'}>
          <div className={'product-form-component'}>
            <InputLabel
              className={'product-form-component-label'}
              id="category-select-label">
              Категория товара
            </InputLabel>

            <Select
              className={'product-form-component-select'}
              labelId="category-select-label"
              id="category-select"
              value={categoryId}
              label="Категория товара"
              onChange={handleChangeCategory}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id} >{category.title}</MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className={'product-form-component-container-select'}>
          <input type="file" onChange={handleFileChange} />
        </div>

        {/* image */}

        <div className={'product-form-button-container'}>
          <Button
            type={"submit"}
            variant="outline-success"
            className="m-2 product-form-button-success"
            onClick={(e) => handleCreateProduct()}>
              Добавить
          </Button>
          <Button
            variant="outline-danger"
            className="m-2 product-form-button-error"
            onClick={(e) => navigate('/account')}>
              Назад
          </Button>
        </div>
      </form>
    </div>
  );

}

export default ProductForm;
