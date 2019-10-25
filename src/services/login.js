import request, { baseURL } from '../utils/request';

// Идентификатор картинки капчи
export async function captchaID() {
  return request(`/v1/login/captchaid`);
}

// 图形验证码
export function captcha(id) {
  return `${baseURL}/v1/login/captcha?id=${id}`;
}

// 登录
export async function login(params) {
  return request(`/v1/login`, {
    method: 'POST',
    body: params,
    notNotify: true,
  });
}

// 退出
export async function logout() {
  return request(`/v1/login/exit`, {
    method: 'POST',
  });
}

// Изменить пароль
export async function updatePwd(params) {
  return request(`/v1/current/password`, {
    method: 'PUT',
    body: params,
  });
}

// Информация о текущем пользователе
export async function getCurrentUser() {
  return request(`/v1/current/user`);
}

// Запрос доступных пользователю пунктов меню
export async function queryMenuTree() {
  return request(`/v1/current/menutree`);
}
