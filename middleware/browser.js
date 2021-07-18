// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
export default function (ctx) {
  let userAgentData = ctx.req ? ctx.req.headers['sec-ch-ua'] : navigator.userAgentData.brands
  if ( userAgentData && (userAgentData.indexOf("Google Chrome") == -1 || userAgentData.indexOf("Chromium") == -1) ) {
    return ctx.redirect('/sorry')
  } else if (!userAgentData) {
    return ctx.redirect('/sorry')
  }
}
