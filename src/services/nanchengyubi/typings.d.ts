declare namespace API {
  type addOrderUsingPOSTParams = {
    /** total */
    total?: number;
  };

  type addUsingGETParams = {
    /** name */
    name?: string;
  };

  type AiAssistant = {
    user: any;
    createTime?: string;
    execMessage?: string;
    id?: number;
    isDelete?: number;
    questionGoal?: string;
    questionName?: string;
    questionResult?: string;
    questionStatus?: string;
    questionType?: string;
    updateTime?: string;
    userId?: number;
  };

  type AiAssistantAddRequest = {
    questionGoal?: string;
    questionName?: string;
    questionResult?: string;
    questionType?: string;
  };

  type AiAssistantEditRequest = {
    execMessage?: string;
    id?: number;
    questionGoal?: string;
    questionName?: string;
    questionResult?: string;
    questionStatus?: string;
    questionType?: string;
  };

  type AiAssistantQueryRequest = {
    current?: number;
    execMessage?: string;
    id?: number;
    pageSize?: number;
    questionGoal?: string;
    questionName?: string;
    questionResult?: string;
    questionStatus?: string;
    questionType?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type AiAssistantUpdateRequest = {
    execMessage?: string;
    id?: number;
    questionGoal?: string;
    questionName?: string;
    questionResult?: string;
    questionStatus?: string;
    questionType?: string;
    userId?: number;
  };

  type AiFrequencyOrder = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderCancelRequest = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderQueryRequest = {
    createTime?: string;
    current?: number;
    id?: number;
    orderStatus?: number;
    pageSize?: number;
    price?: number;
    purchaseQuantity?: number;
    sortField?: string;
    sortOrder?: string;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderUpdateRequest = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyOrderVO = {
    createTime?: string;
    id?: number;
    orderStatus?: number;
    price?: number;
    purchaseQuantity?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AiFrequencyRechargeUsingPOSTParams = {
    frequency?: number;
  };

  type AiFrequencyVO = {
    id?: number;
    remainFrequency?: number;
    totalFrequency?: number;
    userId?: number;
  };

  type AiResponse = {
    resultId?: number;
  };

  type AlipayInfo = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    orderId?: number;
    payStatus?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AlipayInfoQueryRequest = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    current?: number;
    id?: number;
    orderId?: number;
    pageSize?: number;
    payStatus?: number;
    sortField?: string;
    sortOrder?: string;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type AlipayInfoVO = {
    alipayAccountNo?: string;
    alipayId?: string;
    orderId?: number;
    payStatus?: number;
    qrCode?: string;
    totalAmount?: number;
    userId?: number;
  };

  type BaseResponseAiAssistant_ = {
    code?: number;
    data?: AiAssistant;
    message?: string;
  };

  type BaseResponseAiFrequencyVO_ = {
    code?: number;
    data?: AiFrequencyVO;
    message?: string;
  };

  type BaseResponseAiResponse_ = {
    code?: number;
    data?: AiResponse;
    message?: string;
  };

  type BaseResponseAlipayInfoVO_ = {
    code?: number;
    data?: AlipayInfoVO;
    message?: string;
  };

  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseCredit_ = {
    code?: number;
    data?: Credit;
    message?: string;
  };

  type BaseResponseEssay_ = {
    code?: number;
    data?: Essay;
    message?: string;
  };

  type BaseResponseEssayResponse_ = {
    code?: number;
    data?: EssayResponse;
    message?: string;
  };

  type BaseResponseListAiFrequencyOrderVO_ = {
    code?: number;
    data?: AiFrequencyOrderVO[];
    message?: string;
  };

  type BaseResponseListPayInfoVO_ = {
    code?: number;
    data?: PayInfoVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageAiAssistant_ = {
    code?: number;
    data?: PageAiAssistant_;
    message?: string;
  };

  type BaseResponsePageAiFrequencyOrder_ = {
    code?: number;
    data?: PageAiFrequencyOrder_;
    message?: string;
  };

  type BaseResponsePageAlipayInfo_ = {
    code?: number;
    data?: PageAlipayInfo_;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type BaseResponsePageCredit_ = {
    code?: number;
    data?: PageCredit_;
    message?: string;
  };

  type BaseResponsePageEssay_ = {
    code?: number;
    data?: PageEssay_;
    message?: string;
  };

  type BaseResponsePageTextTask_ = {
    code?: number;
    data?: PageTextTask_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTextTask_ = {
    code?: number;
    data?: TextTask;
    message?: string;
  };

  type BaseResponseTextTaskVO_ = {
    code?: number;
    data?: TextTaskVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserCodeVO_ = {
    code?: number;
    data?: UserCodeVO;
    message?: string;
  };

  type BiResponse = {
    chartData?: string;
    chartId?: number;
    chartName?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
  };

  type biUsingPOSTParams = {
    /** message */
    message: string;
  };

  type Chart = {
    user: any;
    chartData?: string;
    chartName?: string;
    chartStatus?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    goal?: string;
    id?: number;
  };

  type ChartQueryRequest = {
    chartName?: string;
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartName?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type Credit = {
    createTime?: string;
    creditTotal?: number;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type CreditAddRequest = {
    creditTotal?: number;
    userId?: number;
  };

  type CreditEditRequest = {
    creditTotal?: number;
    id?: number;
  };

  type CreditQueryRequest = {
    createTime?: string;
    creditTotal?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userId?: number;
  };

  type CreditUpdateRequest = {
    creditTotal?: number;
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Essay = {
    user: any;
    createTime?: string;
    essayName?: string;
    essayType?: string;
    genEssay?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type EssayAddRequest = {
    essayName?: string;
    essayType?: string;
  };

  type EssayEditRequest = {
    essayName?: string;
    essayType?: string;
    id?: number;
  };

  type EssayQueryRequest = {
    current?: number;
    essayName?: string;
    essayType?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type EssayResponse = {
    essayContent?: string;
    essayTitle?: string;
    essayType?: string;
  };

  type EssayUpdateRequest = {
    essayName?: string;
    essayType?: string;
    genEssay?: string;
    id?: number;
    isDelete?: number;
    userId?: number;
  };

  type genChartByAiAsyncMqUsingPOSTParams = {
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type genChartByAiAsyncUsingPOSTParams = {
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type genChartByAiUsingPOSTParams = {
    chartName?: string;
    chartType?: string;
    goal?: string;
  };

  type GenChatByAiRequest = {
    questionGoal?: string;
    questionName?: string;
    questionType?: string;
  };

  type genEssayUsingPOSTParams = {
    essayName?: string;
    essayType?: string;
  };

  type genTextTaskAiUsingPOSTParams = {
    name?: string;
    textType?: string;
  };

  type genTextTaskAsyncAiMqUsingPOSTParams = {
    name?: string;
    textType?: string;
  };

  type genTextTaskAsyncAiRebuildUsingPOSTParams = {
    id?: number;
  };

  type getAiAssistantByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCreditByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getEssayByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTextTaskByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTextTaskVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    userStatus?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAiAssistant_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AiAssistant[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAiFrequencyOrder_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AiFrequencyOrder[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAlipayInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AlipayInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCredit_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Credit[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageEssay_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Essay[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTextTask_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TextTask[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type payCodeUsingPOSTParams = {
    /** orderId */
    orderId?: number;
  };

  type PayInfoVO = {
    alipayAccountNo?: number;
    alipayId?: string;
    createTime?: string;
    id?: number;
    orderId?: number;
    payStatus?: number;
    totalAmount?: number;
    updateTime?: string;
    userId?: number;
  };

  type payUsingGETParams = {
    /** alipayAccountNo */
    alipayAccountNo?: string;
  };

  type queryPayResultFromAlipayUsingPOSTParams = {
    /** alipayAccountNo */
    alipayAccountNo?: string;
  };

  type TextAddRequest = {
    name?: string;
    textType?: string;
  };

  type TextEditRequest = {
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
    userId?: number;
  };

  type TextTask = {
    createTime?: string;
    execMessage?: string;
    genTextContent?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    textType?: string;
    updateTime?: string;
    userId?: number;
  };

  type TextTaskQueryRequest = {
    current?: number;
    genTextContent?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    textType?: string;
    userId?: number;
  };

  type TextTaskVO = {
    createTime?: string;
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
  };

  type TextUpdateRequest = {
    execMessage?: string;
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
  };

  type tradeQueryUsingPOSTParams = {
    /** alipayAccountNo */
    alipayAccountNo?: string;
  };

  type User = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    isDelete?: number;
    phone?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserAddRequest = {
    email?: string;
    gender?: string;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserCodeVO = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    email?: string;
    gender?: string;
    id?: number;
    pageSize?: number;
    phone?: string;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    email?: string;
    gender?: string;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userStatus?: number;
  };

  type UserUpdateRequest = {
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserVO = {
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    phone?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
    userStatus?: number;
  };
}
