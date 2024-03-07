// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addEssay POST /api/essay/add */
export async function addEssayUsingPOST(
  body: API.EssayAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/essay/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteEssay POST /api/essay/delete */
export async function deleteEssayUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/essay/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editEssay POST /api/essay/edit */
export async function editEssayUsingPOST(
  body: API.EssayEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/essay/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** genEssay POST /api/essay/gen */
export async function genEssayUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genEssayUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseEssayResponse_>('/api/essay/gen', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getEssayById GET /api/essay/get */
export async function getEssayByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEssayByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseEssay_>('/api/essay/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listEssayByPage POST /api/essay/list/page */
export async function listEssayByPageUsingPOST(
  body: API.EssayQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageEssay_>('/api/essay/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyEssayByPage POST /api/essay/my/list/page */
export async function listMyEssayByPageUsingPOST(
  body: API.EssayQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageEssay_>('/api/essay/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateEssay POST /api/essay/update */
export async function updateEssayUsingPOST(
  body: API.EssayUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/essay/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
