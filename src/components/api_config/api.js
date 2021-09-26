import apiURL from'./APIConfig';
import axios from 'axios';

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