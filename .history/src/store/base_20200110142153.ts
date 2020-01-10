import { action } from 'mobx';

type PropName<T> = {
  [U in keyof T]: T[U] extends Function ? never : U
}[keyof T]

type ChangeProp<T> = (prop: PropName<T>, value: T[PropName<T>]) => void;

/**
 * @description 所有store需要继承Base，Base用于提供一些共同方法
 */
class Base {
  @action
  changeProp: ChangeProp<this> = (propName, value) => {
    this[propName] = value;
  }
}

export default Base;
