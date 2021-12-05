import apiURL from './APIConfig';
import axios from 'axios';
import { checkStorage } from '../helperMethods';
//================== Helper Method ============================||
const config = {
  headers: {}
}
if (checkStorage()) {
  config.headers['Authorization'] = `Bearer ${checkStorage()}`
}
//============================================//
export const UserRegistration = req => {
  return axios({
    method: 'POST',
    url: apiURL + 'api/User/register',
    data: {
      FullName: req.FullName,
      CompanyName: req.CompanyName,
      NationalId: req.NationalId,
      Phone: req.Phone,
      Email: req.Email,
      password: req.password,
      Role: "Customer",
      SubscriptionPlan: req.SubscriptionPlan
    }
  })
}
export const AddItemToStorage = (ItemData, storageId) => {
  return axios({
    method: 'post',
    url: `${apiURL}api/add/new/item/${storageId}`,
    data: {
      ItemName: ItemData.ItemName,
      ItemSize: parseFloat(ItemData.ItemSize),
      Quantity: parseInt(ItemData.Quantity)
    },
    config
  })
}
export const NewOrder = (ItemData, storageId) => {
  console.log(ItemData);
  return axios({
    method: 'post',
    url: `${apiURL}api/make/order/${storageId}`,
    data: {
      ids: ItemData.ids,
      CustomerName: ItemData.CustomerName,
      OrderStatus: ItemData.OrderStatus,
      ShippedBy: ItemData.ShippedBy,
      Quantity: ItemData.Quantity
    },
    config
  })
}
//=====================================
export const getStorageById = (id) => {
  return axios.get(`${apiURL}api/get/storage/by/${id}`);
}
export const getAllCustomer = () => {
  return axios.get(`${apiURL}api/get/all/user/Customer`);
}
export const getAllStorageCapacity = () => {
  return axios.get(`${apiURL}api/get/GeneralCapacity`);
}
export const getAllStorages= () => {
  return axios.get(`${apiURL}api/all/storage`,config);
}