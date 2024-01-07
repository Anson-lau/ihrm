/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}


/**
 * @description: validate mobile 
 * @author: Rolex - 2024-01-07 13:16:26
 * @param {string} str
 * @returns {Boolean}
 * @version: V1.0.0
 **/
 export function validMobile(str){
  return /^1[3-9]\d{9}$/.test(str);
 }