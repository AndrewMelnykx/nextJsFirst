import Cookies from "js-cookie";
const tokenFromRegistration = Cookies.get("userToken");
const temporaryTokenFromCookies = Cookies.get("temporaryToken");
const linkUserConfirm = `https://www.themoviedb.org/authenticate/${temporaryTokenFromCookies}?redirect_to=http://localhost:3000/`;

export { tokenFromRegistration, temporaryTokenFromCookies, linkUserConfirm };
