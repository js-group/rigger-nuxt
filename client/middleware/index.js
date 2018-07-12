export default function (context) {
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  // context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
  // console.log('isServer:', context.isServer);
  // console.log('isClient:', context.isClient);
  // console.log('isStatic:', context.isStatic);
  context.userAgent = context.isStatic ? '' : (context.isServer ? context.req.headers['user-agent'] : navigator.userAgent);
}