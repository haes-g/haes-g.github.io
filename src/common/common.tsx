/** 共通関数 */

/**
 * Null, undefined判定
 * 
 * @param { any } arg 判定対象
 * @returns { boolean } true=Null/undefined
 */
const isNull = (arg: any) => {
  if (!arg) {
    return true;
  }

  return false;
}

/**
 * 空文字判定
 * 
 * @param { string } str 判定対象の文字列
 * @returns { boolean } true=空文字
 */
const isEmpty = (str: string) => {
  if (str === '' || str.length === 0) {
    return true;
  }

  return false;
};

export {
  isNull,
  isEmpty,
};
