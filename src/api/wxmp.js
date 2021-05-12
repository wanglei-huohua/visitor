import HttpUtil from "../http/HttpUtil";
import {Common} from "./common";

/**
 * 创建访客
 * @param params
 * @returns {Promise<unknown>}
 */
export function creatVisitor(params) {
  return HttpUtil.post_json(Common.job_form, params)
}

/**
 * 获取公司
 * @param params
 * @returns {Promise<unknown>}
 */
export function getCompany(params) {
  return HttpUtil.get(Common.proprietor_url, params)
}

/**
 * 获取微信openID
 * @param params
 * @returns {Promise<unknown>}
 */

export function getOpenID(params) {
  return HttpUtil.get(Common.web_url, params)
}

/**
 * 上传图片
 * @param params
 * @returns {Promise<unknown>}
 */
export function uploadImages(params) {
  return HttpUtil.file_post(Common.file_image_url, params)
}

