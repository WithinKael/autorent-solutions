import React, { useState } from 'react';
import css from '../css/FormFilter.module.css';
import brands from '../Data/makes.json';
import { useDispatch } from 'react-redux';
import {
  setBrandFilter,
  setMillegeOne,
  setMillegeTwo,
  setPriceFilter,
} from '../redux/carsReducer';

const FormFilter = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [millegeOne, setCarMillegeOne] = useState('');
  const [millegeTwo, setCarMillegeTwo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setBrandFilter(brand));
    dispatch(setPriceFilter(price));
    dispatch(setMillegeOne(millegeOne));
    dispatch(setMillegeTwo(millegeTwo));
  };

  const handleSelectBrand = event => {
    setBrand(event.target.value);
  };

  const handleSelectPrice = event => {
    setPrice(event.target.value);
  };

  const handleChangeMillegeOne = event => {
    const value = event.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setCarMillegeOne(value);
    }
  };

  const handleChangeMillegeTwo = event => {
    const value = event.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setCarMillegeTwo(value);
    }
  };

  const makeDropdownPrice = () => {
    const array = [];
    for (let i = 10; i < 355; i += 10) {
      array.push(i);
    }
    return array;
  };

  const dropDownArrayPrice = makeDropdownPrice();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.selectContainer}>
        <label className={css.label}>Car brand</label>
        <select className={css.selectBrand} onChange={handleSelectBrand}>
          <option value="">Enter the text</option>
          {brands.map((brand, index) => (
            <option value={brand} key={index}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={css.selectContainer}>
        <label className={css.label}>Price/ 1 hour</label>
        <select className={css.selectPrice} onChange={handleSelectPrice}>
          <option value="">To $</option>
          {dropDownArrayPrice.map((price, index) => (
            <option key={index} value={price}>
              {price + ' $'}
            </option>
          ))}
        </select>
      </div>

      <div className={css.selectContainer}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputContainer}>
          <input
            placeholder="From"
            type="number"
            className={css.inputOne}
            onChange={handleChangeMillegeOne}
            value={millegeOne}
            maxLength={5}
          />
          <input
            placeholder="To"
            type="number"
            className={css.inputTwo}
            onChange={handleChangeMillegeTwo}
            value={millegeTwo}
            maxLength={5}
          />
        </div>
      </div>

      <div className={css.selectContainer}>
        <button type="submit" className={css.formButton}>
          Search
        </button>
      </div>
    </form>
  );
};

export default FormFilter;
