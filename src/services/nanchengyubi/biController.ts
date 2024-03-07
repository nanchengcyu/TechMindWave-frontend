// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** bi POST /api/bi */
export async function biUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.biUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/bi', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
