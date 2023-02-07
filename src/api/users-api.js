import request from '@/utils/request'
const basePath = process.env.VUE_APP_BASE_API

//系统用户列表-组织跟系统通用
export function getSystemUserList(params) {
  return request.get(`${basePath}/users/page`, {
    params,
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

//新增系统用户
export function addSystemUser(params) {
  return request.post(`${basePath}/users`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

//修改系统用户
export function updateSystemUser(id, params) {
  return request.post(`${basePath}/users/update/${id}`, params)
}

//删除系统用户
export function delSystemUser(id, params) {
  return request.post(`${basePath}/users/delete/${id}`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 给用户赋予角色权限
export function addUserRole(params) {
  return request.post(`${basePath}/user-roles/role`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 用户详情
export function getUserDetail(params) {
  return request.get(`${basePath}/users/info`, { params })
}

// 删除当前用户某个角色
export function deleteUserRole(params) {
  return request.post(`${basePath}/user-roles/delete`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 修改密码
export function updatePassword(params) {
  return request.put(`${basePath}/users/password`, { params })
}

// 获取用户关联的角色
export function getUserRoles(params) {
  return request.get(`${basePath}/user-roles/users`, {
    params,
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 获取对应组织的全量用户列表
export function getOrganUserList(id) {
  return request.get(`${basePath}/user-organizations/organId/${id}`)
}

// 获取组织用户目前没有赋予的角色列表
export function getUserUnassigned(params) {
  return request.get(`${basePath}/user-organizations/users/unassigned`, {
    params,
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 赋予组织用户角色
export function getUserOrganizations(params) {
  return request.post(`${basePath}/user-organizations`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}

// 用户移出组织
export function deleteUserOrg(params) {
  return request.post(`${basePath}/user-organizations/delete`, params, {
    headers: { 'Amp-Organ-Id': params?.organId }
  })
}
