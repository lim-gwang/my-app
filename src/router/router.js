// 메인페이지 url 설정
export const routePath = {
   login: '/login',
   home: '/home'
}
// sub page url 설정
export const subRouterPath = {
   page1:`${routePath.home}/menu1`,
   page2:`${routePath.home}/menu2`,
}

//  app menu tree 
export const appMenuTree = {
   depth1: [
      {
         title: 'CS 접수',
         depth2: [
            {
               title: 'CS 접수 내역 조회',
               url: `${subRouterPath.page1}`
            },
            {
               title: 'CS 접수 요청',
               url: `${subRouterPath.page2}`
            }
         ]
      }
   ]
};