import Realm from 'realm';

export class CountryClass extends Realm.Object {
  name!: string;
  code!: string;
  flag!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Country',
    properties: {
      name: 'string',
      code: 'string',
      flag: 'string',
    },
    primaryKey: 'code',
  };

  constructor(realm: Realm, CountryData: string) {
    super(realm, {CountryData});
  }
  // constructor(name: string, code: string, flag: string) {
  //   this._name = name;
  //   this._code = code;
  //   this._flag = flag;
  // }

  // get name() {
  //   return this._name;
  // }
  // get code() {
  //   return this._code;
  // }
  // get flag() {
  //   return this._flag;
  // }
}
