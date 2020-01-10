import { observable, action } from 'mobx';
import Base from './store/base';

class IndexStore extends Base {
  @observable count: number = 0;

  @action
  add = () => {
    this.count ++;
  }

  @action
  minus = () => {
    this.count --;
  }
}

export const indexStore = new IndexStore();
