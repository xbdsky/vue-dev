import request from '@/utils/request';

export default class Users {
  static fetchAll = () => request.get(`/api/users/list`);
};
