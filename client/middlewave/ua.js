export default function (context) {
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
    console.log('userAgent:', context.userAgent);
}